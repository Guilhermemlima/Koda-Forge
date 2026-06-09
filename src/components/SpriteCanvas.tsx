'use client'

/**
 * SpriteCanvas — Hero animation via sprite sheet
 * Sprite: /sprite.jpg  (3840×1440, 12×8 grid, 96 frames, 24 fps)
 * Source: Hammer_strikes_anvil_explosion video
 * UI/UX Pro Max: Motion-Driven + Video-First Hero pattern
 */

import { useRef, useEffect } from 'react'

/* ── Sprite config ──────────────────────────────────────── */
const COLS          = 12
const ROWS          = 8
const TOTAL         = 96
const FW            = 320   // px per frame in sprite
const FH            = 180
const FPS           = 24
const MS_PER_FRAME  = 1000 / FPS
const EXPLODE_START = 28    // frame where impact + sparks begin
const EXPLODE_END   = 52    // frame where explosion fades

export default function SpriteCanvas() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const wrapRef    = useRef<HTMLDivElement>(null)
  const progRef    = useRef<HTMLDivElement>(null)

  /* mutable refs — no re-render needed */
  const raf        = useRef<number | null>(null)
  const lastTs     = useRef<number>(0)
  const frame      = useRef<number>(0)
  const sprite     = useRef<HTMLImageElement | null>(null)
  const loaded     = useRef<boolean>(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    const prog   = progRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ── draw a single frame from the sprite grid ── */
    function drawFrame(f: number) {
      if (!loaded.current || !ctx || !sprite.current) return
      const col = f % COLS
      const row = Math.floor(f / COLS)
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      ctx.drawImage(
        sprite.current,
        col * FW, row * FH, FW, FH,
        0, 0, canvas!.width, canvas!.height,
      )
    }

    /* ── progress bar ── */
    function updateProgress(f: number) {
      if (prog) prog.style.width = ((f / (TOTAL - 1)) * 100).toFixed(1) + '%'
    }

    /* ── explosion flash via CSS class ── */
    function triggerExplosion() {
      if (!wrap) return
      wrap.classList.add('canvas-exploding')
      setTimeout(() => wrap?.classList.remove('canvas-exploding'), 200)
    }

    /* ── animation loop ── */
    function tick(ts: number) {
      if (ts - lastTs.current >= MS_PER_FRAME) {
        const prev = frame.current
        frame.current = (frame.current + 1) % TOTAL
        drawFrame(frame.current)
        updateProgress(frame.current)
        if (frame.current === EXPLODE_START && prev !== EXPLODE_START) {
          triggerExplosion()
        }
        lastTs.current = ts
      }
      raf.current = requestAnimationFrame(tick)
    }

    /* ── pause when off-screen (saves CPU / battery) ── */
    const visObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!raf.current) raf.current = requestAnimationFrame(tick)
        } else {
          if (raf.current) { cancelAnimationFrame(raf.current); raf.current = null }
        }
      },
      { threshold: 0.1 },
    )
    visObs.observe(canvas)

    /* ── load sprite sheet ── */
    const img = new Image()
    img.onload = () => {
      loaded.current = true
      sprite.current = img
      drawFrame(0)
      if (reducedMotion) {
        /* show the dramatic impact frame — no motion */
        drawFrame(EXPLODE_START)
        updateProgress(EXPLODE_START)
      } else {
        raf.current = requestAnimationFrame(tick)
      }
    }
    img.onerror = () => {
      /* fallback: render poster image */
      const poster = new Image()
      poster.onload = () => {
        if (!ctx) return
        ctx.drawImage(poster, 0, 0, canvas.width, canvas.height)
      }
      poster.src = '/hero-poster.jpg'
    }
    img.src = '/sprite.jpg'

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      visObs.disconnect()
    }
  }, [])

  return (
    <div className="canvas-wrap">
      {/* outer glow frame — receives .canvas-exploding class on impact */}
      <div ref={wrapRef} className="canvas-frame">

        {/* status chip */}
        <div className="canvas-chip" aria-hidden="true">
          <span className="chip-dot" />
          KodaForge em ação
        </div>

        {/* the canvas itself */}
        <canvas
          ref={canvasRef}
          width={320}
          height={180}
          className="hero-canvas"
          role="img"
          aria-label="Animação: martelo forjando metal com explosão de faíscas — símbolo da KodaForge"
        />

        {/* bottom gradient to blend with page bg */}
        <div className="canvas-overlay" aria-hidden="true" />

        {/* loop progress bar */}
        <div className="canvas-progress" aria-hidden="true">
          <div ref={progRef} className="canvas-progress-bar" />
        </div>
      </div>
    </div>
  )
}
