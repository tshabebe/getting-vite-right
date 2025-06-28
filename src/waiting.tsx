import { Dialog } from 'react-aria-components'
import { Icon } from './components/Icon'
import { StaggeredFadeLoader } from './components/staggeredFadeLoader'
import { UnknownUser } from './components/userUnknownIcon'

export function WaitingComponent() {
  return (
    <Dialog className="w-sm mx-4 md:w-md bg-background text-foreground border-border border pb-4 rounded-2xl">
      <div className="py-10 px-8">
        <button className="px-4 py-2 bg-elevation-1 hover:bg-elevation-1-hover transition-colors rounded-2xl">
          <Icon name="ArrowLeft" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/waiting-dama.png"
          alt="ludo"
          className="object-contain h-40"
        />
      </div>
      <Players />
      <div className="px-4 flex justify-center">
        <button className="px-4 py-2 flex gap-2 bg-elevation-1 transition-colors hover:bg-elevation-1-hover items-center rounded-2xl">
          <Icon name="ArrowLeft" /> <span className="">back to dama</span>
        </button>
      </div>
    </Dialog>
  )
}

function Players() {
  return (
    <div className="flex justify-between items-center px-16 py-6">
      {/*  for the player that is ready */}
      <div className="flex flex-col">
        <Avatar />
        <span className="text-base">Player</span>
        <span className="font-medium">Ready</span>
      </div>
      {/*  for the player that is waiting */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">VS</span>
        <StaggeredFadeLoader />
      </div>
      {/*  for the player that is waiting */}
      <div className="flex flex-col">
        <div className="size-14 rounded-full bg-elevation-1 flex items-center justify-center">
          <UnknownUser />
        </div>
        <span className="text-base">Player</span>
        <span className="font-medium text-foreground-secondary">Ready</span>
      </div>
    </div>
  )
}

// this could Ideally be an Image with object-cover
function Avatar() {
  return (
    <div className="size-14  rounded-full flex items-center justify-center bg-elevation-1 font-bold text-lg">
      T
    </div>
  )
}
