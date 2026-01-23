'use client'

import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Wallpaper } from './wallpaper'

interface BeforeAfterSliderProps {
  beforeImage: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }
  afterImage: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }
  wallpaper?: 'green' | 'blue' | 'purple' | 'brown'
  placement?: 'bottom' | 'bottom-left' | 'bottom-right' | 'top' | 'top-left' | 'top-right'
  className?: string
  defaultPosition?: number // 0-100, default 50
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  wallpaper = 'blue',
  placement = 'bottom',
  className,
  defaultPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(percentage)
    },
    [],
  )

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        handleMove(e.clientX)
      }
    },
    [isDragging, handleMove],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        e.preventDefault()
        handleMove(e.touches[0].clientX)
      }
    },
    [isDragging, handleMove],
  )

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <Wallpaper color={wallpaper} data-placement={placement} className={clsx('group', className)}>
      <div className="relative [--padding:min(10%,--spacing(16))] group-data-[placement=bottom]:px-(--padding) group-data-[placement=bottom]:pt-(--padding) group-data-[placement=bottom-left]:pt-(--padding) group-data-[placement=bottom-left]:pr-(--padding) group-data-[placement=bottom-right]:pt-(--padding) group-data-[placement=bottom-right]:pl-(--padding) group-data-[placement=top]:px-(--padding) group-data-[placement=top]:pb-(--padding) group-data-[placement=top-left]:pr-(--padding) group-data-[placement=top-left]:pb-(--padding) group-data-[placement=top-right]:pb-(--padding) group-data-[placement=top-right]:pl-(--padding)">
        <div
          ref={containerRef}
          className="relative overflow-hidden ring-1 ring-black/10 select-none group-data-[placement=bottom]:rounded-t-sm group-data-[placement=bottom-left]:rounded-tr-sm group-data-[placement=bottom-right]:rounded-tl-sm group-data-[placement=top]:rounded-b-sm group-data-[placement=top-left]:rounded-br-sm group-data-[placement=top-right]:rounded-bl-sm"
        >
          {/* Before Image (Full) */}
          <div className="relative w-full">
            <Image
              src={beforeImage.src}
              alt={beforeImage.alt}
              width={beforeImage.width}
              height={beforeImage.height}
              className={clsx('w-full h-auto', beforeImage.className)}
            />
          </div>

          {/* After Image (Clipped) */}
          <div
            className={clsx('absolute inset-0 overflow-hidden', afterImage.className?.includes('bg-') && 'bg-white')}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={afterImage.src}
              alt={afterImage.alt}
              width={afterImage.width}
              height={afterImage.height}
              className={clsx('w-full h-auto', afterImage.className?.replace('bg-white', ''))}
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-10 shadow-[0_0_0_2px_rgba(0,0,0,0.1)] select-none"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            draggable={false}
          >
            {/* Handle Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-mist-200 shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-mist-400"></div>
                <div className="w-0.5 h-3 bg-mist-400"></div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
    </Wallpaper>
  )
}
