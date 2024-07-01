"use client"

import { cn } from "@/lib/utils"

type ImageProps = {
    src: string
    alt: string
    className?: string
    width?: number
    height?: number
}

const Image = ({ src, alt, className, width, height }: ImageProps) => (
    <img src={src} alt={alt} className={cn("rounded-lg", className)} width={width} height={height} />
)

export { Image }
