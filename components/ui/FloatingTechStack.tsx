"use client";

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiFigma } from 'react-icons/si';

interface IconProps {
  id: number;
  icon: IconType;
  className: string;
  iconClassName?: string;
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('absolute', iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] dark:shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-white/10 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className={clsx("w-6 h-6 md:w-8 md:h-8", iconData.iconClassName)} />
      </motion.div>
    </motion.div>
  );
};

const techIcons: IconProps[] = [
  { id: 1, icon: SiReact, className: '-top-12 left-0 md:-left-12', iconClassName: 'text-[#61DAFB]' },
  { id: 2, icon: SiFigma, className: '-top-8 right-0 md:-right-8', iconClassName: 'text-[#F24E1E]' },
  { id: 3, icon: SiJavascript, className: 'top-1/2 -left-4 md:-left-16', iconClassName: 'text-[#F7DF1E]' },
  { id: 4, icon: SiNextdotjs, className: 'top-1/2 -right-4 md:-right-16', iconClassName: 'text-black dark:text-white' },
  { id: 5, icon: SiTypescript, className: '-bottom-12 left-10 md:left-24', iconClassName: 'text-[#3178C6]' },
  { id: 6, icon: SiTailwindcss, className: '-bottom-16 right-10 md:right-24', iconClassName: 'text-[#06B6D4]' },
];

export function FloatingTechStack() {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 w-full h-full">
        {techIcons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
