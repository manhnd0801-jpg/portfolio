import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.3'], // thu hẹp vùng trigger, animation xảy ra nhanh hơn
  })

  // Chia theo từ thay vì từng ký tự — ít motion hơn, dễ đọc hơn
  const words = text.split(' ')

  return (
    <p ref={ref} className={`relative ${className ?? ''}`} style={style} aria-label={text}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string
  index: number
  total: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  // Mỗi từ animate trong 1/3 tổng scroll range, overlap nhau
  const start = (index / total) * 0.7
  const end = start + 0.35

  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1])

  return (
    <>
      <motion.span className="inline" style={{ opacity }}>
        {word}
      </motion.span>
      {index < total - 1 && ' '}
    </>
  )
}
