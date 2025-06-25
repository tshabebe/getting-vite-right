import { icons } from 'lucide-react'

interface Props {
  name: keyof typeof icons
  strokeWidth?: number
  className?: string
}

export const Icon: React.FC<Props> = ({ name, strokeWidth, className }) => {
  const LucideIcon = icons[name]

  return <LucideIcon strokeWidth={strokeWidth} className={className} />
}

export type IconNames = keyof typeof icons
export const iconNames = Object.keys(icons) as IconNames[]
