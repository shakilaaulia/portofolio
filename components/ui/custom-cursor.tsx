"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface PointerProps {
  children: React.ReactNode
  className?: string
  name: string
}

export function Pointer({ children, className, name }: PointerProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isInside) setIsInside(true)
    }
    const handleMouseLeave = () => setIsInside(false)
    const handleMouseEnter = () => setIsInside(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [x, y, isInside])

  return (
    <div
      style={{ cursor: "none" }}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} name={name} />}
      </AnimatePresence>
      {children}
    </div>
  )
}

interface FollowPointerProps {
  x: any
  y: any
  name: string
}

function FollowPointer({ x, y, name }: FollowPointerProps) {
  return (
    <motion.div
      className="fixed z-[9999] h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none"
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-neon-orange text-neon-orange"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>
      <div className="w-fit rounded-full bg-neon-orange px-2 py-1 text-black text-xs font-bold whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  )
}
