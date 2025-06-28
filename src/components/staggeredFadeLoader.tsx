import { motion } from 'motion/react'

export function StaggeredFadeLoader() {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-4 w-4 rounded-full bg-elevation-1-hover"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      ))}
    </div>
  )
}
