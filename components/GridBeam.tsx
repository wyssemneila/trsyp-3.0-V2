'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const GridBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('gridbeam-wrap', className)}>
    <div className="gridbeam-grid" aria-hidden="true" />
    <Beam style={{ left: '15%', top: '12%' }} delay={0} />
    <Beam style={{ left: '55%', top: '35%' }} delay={2.5} />
    <Beam style={{ left: '80%', top: '60%' }} delay={5} />
    <Beam style={{ left: '30%', top: '75%' }} delay={7.5} />
    {children}
  </div>
);

function Beam({ style, delay = 0 }: { style?: React.CSSProperties; delay?: number }) {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="gridbeam-svg"
      style={style}
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke="url(#beam-grad)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id="beam-grad"
          variants={{
            initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
            animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay,
          }}
        >
          <stop stopColor="#00E87A" stopOpacity="0" />
          <stop stopColor="#00E87A" />
          <stop offset="0.325" stopColor="#FF1D78" />
          <stop offset="1" stopColor="#FF1D78" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

export default GridBeam;
