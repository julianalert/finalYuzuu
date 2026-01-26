import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { XMarkIcon } from '@/components/icons/x-mark-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'

interface BeforeAfterSideBySideProps {
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
  className?: string
}

export function BeforeAfterSideBySide({
  beforeImage,
  afterImage,
  className,
}: BeforeAfterSideBySideProps) {
  return (
    <div className={clsx('flex', className)}>
      {/* Before Image - Square */}
      <div className="relative w-1/2 aspect-square overflow-hidden">
        <Image
          src={beforeImage.src}
          alt={beforeImage.alt}
          width={beforeImage.width}
          height={beforeImage.height}
          className={clsx('w-full h-full object-cover', beforeImage.className)}
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 px-3 py-1.5 rounded-md text-sm font-medium">
          <XMarkIcon className="size-3.5" />
          Before
        </div>
      </div>
      
      {/* White Divider */}
      <div className="w-0.5 bg-white" />
      
      {/* After Image - Square */}
      <div className="relative w-1/2 aspect-square overflow-hidden">
        <Image
          src={afterImage.src}
          alt={afterImage.alt}
          width={afterImage.width}
          height={afterImage.height}
          className={clsx('w-full h-full object-cover', afterImage.className)}
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 px-3 py-1.5 rounded-md text-sm font-medium">
          <CheckmarkIcon className="size-3.5" />
          After
        </div>
      </div>
    </div>
  )
}
