import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 16, // giảm từ 30 → 16, chuyển động nhẹ hơn
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px', amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease-out mượt, không bật
      }}
    >
      {children}
    </motion.div>
  )
}
