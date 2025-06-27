import { Button } from 'react-aria-components'
import { Icon } from './components/Icon'

export function ProfileComponent() {
  return (
    <Button
      className={
        'bg-elevation-1 hover:bg-elevation-1-hover p-2 hover:text-foreground-hover items-center rounded-full'
      }
    >
      <Icon
        name="User"
        className="stroke-foreground size-3.5 md:size-4 lg:size-5"
      />
    </Button>
  )
}
