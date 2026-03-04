'use client'

import { useEffect, useState, useCallback } from 'react'

const slides = [
  {
    url: '/hero-one.jpeg',
    label: 'Grand Suite',
    caption: 'Lavish interiors crafted for royalty',
  },
  // {
  //   url: '/hero-two.jpeg',
  //   label: 'Infinity Pool',
  //   caption: 'Where the water meets the horizon',
  // },
  // {
  //   url: '/hero-three.jpeg',
  //   label: 'Ocean Views',
  //   caption: 'Wake up to paradise every morning',
  // },
    {
    url: '/hero-four.avif',
    label: 'Ocean Views',
    caption: 'Wake up to paradise every morning',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  const SLIDE_DURATION = 5000
  const TRANSITION_DURATION = 1200

  const goToSlide = useCallback(
    (index: number) => {
      if (transitioning || index === current) return
      setTransitioning(true)
      setNext(index)
      setProgress(0)
      setTimeout(() => {
        setCurrent(index)
        setNext(null)
        setTransitioning(false)
      }, TRANSITION_DURATION)
    },
    [current, transitioning]
  )

  // Auto-advance
  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setProgress(0)
      goToSlide((current + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [current, goToSlide])

  // Progress bar
  useEffect(() => {
    if (transitioning) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
      if (elapsed < SLIDE_DURATION) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current, transitioning])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Raleway:wght@300;400;500&display=swap');

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity ${TRANSITION_DURATION}ms cubic-bezier(0.77,0,0.18,1);
        }

        .hero-slide.active {
          animation: kenBurns ${SLIDE_DURATION + TRANSITION_DURATION}ms ease-in-out forwards;
        }

        @keyframes kenBurns {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          100% { transform: scale(1.0) translate(-1%, -0.5%); }
        }

        .hero-slide.next-in {
          animation: kenBurnsReverse ${TRANSITION_DURATION}ms ease-out forwards;
        }

        @keyframes kenBurnsReverse {
          0%   { transform: scale(1.04); }
          100% { transform: scale(1.08); }
        }

        .slide-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.3em;
          font-family: 'Raleway', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          text-transform: uppercase;
        }

        .content-reveal {
          transition: opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1);
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .hero-eyebrow {
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          letter-spacing: 0.35em;
          font-size: 0.7rem;
          text-transform: uppercase;
        }

        .hero-caption {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
        }

        .hero-btn-primary {
          font-family: 'Raleway', sans-serif;
          font-weight: 500;
          letter-spacing: 0.25em;
          font-size: 0.7rem;
          text-transform: uppercase;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.65);
          color: white;
          padding: 0.9rem 2.5rem;
          backdrop-filter: blur(6px);
          transition: background 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .hero-btn-primary:hover {
          background: rgba(255,255,255,0.22);
          border-color: white;
        }

        .hero-btn-secondary {
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          letter-spacing: 0.25em;
          font-size: 0.7rem;
          text-transform: uppercase;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          padding: 0.9rem 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: color 0.3s ease;
        }
        .hero-btn-secondary:hover { color: white; }
        .hero-btn-secondary::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .hero-btn-secondary:hover::after { width: 44px; }

        .nav-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .nav-dot.active {
          background: white;
          transform: scale(1.4);
        }

        .progress-bar {
          height: 1px;
          background: white;
          transform-origin: left;
          transition: width 0.1s linear;
        }

        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.7));
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(0.7); }
        }

        .slide-counter {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
        }
      `}</style>

      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Luxe Haven Hotel Hero"
        style={{ background: '#0a0a0a' }}
      >
        {/* Slides */}
        {slides.map((slide, i) => {
          const isActive = i === current
          const isNext = i === next
          return (
            <div
              key={slide.url}
              className={`hero-slide ${isActive ? 'active' : ''} ${isNext ? 'next-in' : ''}`}
              style={{
                backgroundImage: `url("${slide.url}")`,
                opacity: isActive || isNext ? 1 : 0,
                zIndex: isNext ? 2 : isActive ? 1 : 0,
              }}
              role="img"
              aria-label={slide.label}
            />
          )
        })}

        {/* Layered overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.3) 100%)',
            zIndex: 3,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
            zIndex: 3,
          }}
        />

        {/* Left side label */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            className="slide-label text-white/50"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease 0.8s',
            }}
          >
            {slides[current].label}
          </div>
          <div style={{ width: 1, height: 64, background: 'rgba(255,255,255,0.2)' }} />
        </div>

        {/* Main Content */}
        <div
          className="relative text-left px-6 w-full max-w-5xl mx-auto pl-20"
          style={{ zIndex: 10 }}
        >
          <div
            className="content-reveal"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '0.2s',
            }}
          >
            {/* <p
              className="hero-eyebrow text-white/60 mb-6"
              style={{ transition: 'opacity 0.6s ease', opacity: transitioning ? 0 : 1 }}
            >
              Est. 1924 · {slides[current].label}
            </p> */}
          </div>

          <div
            className="content-reveal"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: '0.4s',
            }}
          >
            <h1
              className="hero-title text-white mb-4"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
            >
              Luxury<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Redefined.</em>
            </h1>
          </div>

          <div
            className="content-reveal"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: '0.55s',
            }}
          >
            <p
              className="hero-caption text-white/75 mb-10 max-w-md"
              style={{ transition: 'opacity 0.5s ease', opacity: transitioning ? 0.4 : 1 }}
            >
              {slides[current].caption}
            </p>
          </div>

          <div
            className="content-reveal flex items-center gap-2"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: '0.7s',
            }}
          >
            <button className="hero-btn-primary">Book Your Stay</button>
            <button className="hero-btn-secondary">Explore</button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-8 pb-8"
          style={{ zIndex: 10 }}
        >
          {/* Slide counter + dots */}
          <div
            className="flex flex-col gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease 1s',
            }}
          >
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`nav-dot ${i === current ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ width: 120, height: 1, background: 'rgba(255,255,255,0.2)' }}>
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Slide counter */}
          <div
            className="slide-counter text-white/50 text-2xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease 1.1s',
            }}
          >
            <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-white/30 mx-2">/</span>
            {String(slides.length).padStart(2, '0')}
          </div>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-3"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease 1.2s',
            }}
          >
            <span className="hero-eyebrow text-white/40" style={{ fontSize: '0.6rem' }}>
              Scroll
            </span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>
    </>
  )
}