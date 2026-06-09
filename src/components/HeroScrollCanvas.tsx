'use client'

/**
 * HeroScrollCanvas — scroll-driven sprite background
 * As the user scrolls through #hero, frames advance in sync.
 * Sprite: /sprite.jpg (3840×1440 · 12×8 · 96 frames · 320×180 px each)
 * UI/UX Pro Max: Scroll-Triggered Storytelling + Motion-Driven
 */

import { useRef, useEffect } from 'react'

const COLS         = 12
const ROWS         = 8
const TOTAL        = 96
const FW           = 320
const FH           = 180

export default function HeroScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const spriteRef = useRef<HTMLImageElement | null>(null)
  const loadedRef = useRef(false)
  const currentF  = useRef(-1)          // track last drawn frame to avoid re-draws

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    /* high-quality upscaling for full-screen display */
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    /* ── resize canvas to viewport ── */
    function resize() {
      if (!canvas) return
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      drawFrame(currentF.current < 0 ? 0 : currentF.current)
    }

    /* ── draw one frame from sprite, cover-fit to canvas ── */
    function drawFrame(f: number) {
      if (!loadedRef.current || !spriteRef.current || !canvas || !ctx) return
      const fi = Math.max(0, Math.min(TOTAL - 1, f))
      if (fi === currentF.current) return   // no-op if same frame
      currentF.current = fi

      const col = fi % COLS
      const row = Math.floor(fi / COLS)

      /* cover-fit: fill canvas, crop edges */
      const srcW = FW, srcH = FH
      const dstW = canvas.width, dstH = canvas.height
      const scale = Math.max(dstW / srcW, dstH / srcH)
      const drawW = srcW * scale
      const drawH = srcH * scale
      const dx = (dstW - drawW) / 2
      const dy = (dstH - drawH) / 2

      ctx.clearRect(0, 0, dstW, dstH)
      ctx.drawImage(
        spriteRef.current,
        col * FW, row * FH, FW, FH,   // source slice in sprite
        dx, dy, drawW, drawH,          // destination — cover fit
      )
    }

    /* ── scroll handler: map scrollY → frame ── */
    function onScroll() {
      const hero = document.getElementById('hero')
      if (!hero) return
      const heroTop    = hero.getBoundingClientRect().top + window.scrollY
      const scrollRoom = hero.offsetHeight - window.innerHeight
      if (scrollRoom <= 0) return
      const progress   = Math.max(0, Math.min(1, (window.scrollY - heroTop) / scrollRoom))
      drawFrame(Math.round(progress * (TOTAL - 1)))
    }

    /* ── prefers-reduced-motion: skip animation ── */
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ── load sprite ── */
    const img = new Image()
    img.onload = () => {
      loadedRef.current = true
      spriteRef.current = img
      drawFrame(0)
      if (!reducedMotion) {
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll() // apply current position immediately
      }
    }
    img.onerror = () => {
      /* fallback: dark gradient placeholder (sprite not deployed yet) */
      if (!ctx || !canvas) return
      ctx.fillStyle = '#06061a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    img.src = '/sprite.jpg'

    window.addEventListener('resize', resize, { passive: true })
    resize()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-bg-canvas"
      aria-hidden="true"      // decorative background — screen readers skip
    />
  )
}
