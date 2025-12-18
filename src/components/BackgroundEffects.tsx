import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-purple/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Nodes - Tech Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--purple))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d="M100,100 Q300,50 500,150 T900,100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,300 Q200,250 400,350 T800,300"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="500"
          cy="150"
          r="4"
          fill="hsl(var(--accent))"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.circle
          cx="400"
          cy="350"
          r="3"
          fill="hsl(var(--purple))"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
    </div>
  );
};
