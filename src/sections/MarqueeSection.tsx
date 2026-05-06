import { useEffect, useRef, useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=840&h=540&fit=crop&q=80',
  'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=840&h=540&fit=crop&q=80',
]

const ROW1 = IMAGES.slice(0, 11)
const ROW2 = IMAGES.slice(11)
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1]
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.12
      setOffset(scrollOffset)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tile size responsive: nhỏ hơn trên mobile
  const tileW = typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 420
  const tileH = typeof window !== 'undefined' && window.innerWidth < 640 ? 130 : 270

  return (
    <section
      ref={sectionRef}
      className="pt-16 sm:pt-24 md:pt-40 pb-8 sm:pb-10 overflow-hidden"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Row 1 */}
      <div
        className="flex mb-2 sm:mb-3"
        style={{
          gap: '8px',
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {ROW1_TRIPLED.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
            style={{ width: `${tileW}px`, height: `${tileH}px` }}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div
        className="flex"
        style={{
          gap: '8px',
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {ROW2_TRIPLED.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
            style={{ width: `${tileW}px`, height: `${tileH}px` }}
          />
        ))}
      </div>
    </section>
  )
}
