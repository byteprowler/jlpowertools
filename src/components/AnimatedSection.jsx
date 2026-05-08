import { motion } from 'framer-motion';

const directionVariants = {
  up:    { initial: { opacity: 0, y: 40 },  animate: { opacity: 1, y: 0 } },
  down:  { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: 40 },  animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
};

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const variant = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
