import { clsx } from 'clsx/lite'
import Image from 'next/image'

interface BeforeAfterSideBySideExamplesProps {
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

export function BeforeAfterSideBySideExamples({
  beforeImage,
  afterImage,
  className,
}: BeforeAfterSideBySideExamplesProps) {
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
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
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
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
          After
        </div>
      </div>
    </div>
  )
}
