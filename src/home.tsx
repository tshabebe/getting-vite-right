import { Button } from 'react-aria-components'
import { Icon } from './components/Icon'

export default function Home() {
  return (
    <main className="min-h-screen container flex flex-col">
      <img
        src="/logo.png"
        alt="Logo"
        className="size-24 -mx-2 mt-4 lg:mt-2 md:size-32 absolute opacity-80"
      />
      <div className="pt-20 md:pt-24 flex flex-col gap-5 md:gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Next Games</h1>
          <h2>Earn while having fun! 😊</h2>
        </div>
        <div className="flex gap-4 items-end">
          <BetComponent />
          <span className="text-3xl md:text-4xl font-bold">$24,630</span>
        </div>
      </div>
    </main>
  )
}

function BetComponent() {
  return (
    <Button
      className={
        'flex px-6 py-2 bg-elevation-1 gap-6 md:gap-12 lg:gap-14 hover:bg-elevation-1-hover hover:text-foreground-hover items-center rounded-2xl'
      }
    >
      <span className="flex items-end gap-1">
        <span className="text-2xl md:text-3xl">$20</span>
        <span>bet</span>
      </span>
      <div className="flex p-2 bg-green-background hover:bg-green-backround-hover  rounded-md">
        <Icon
          name="ArrowUpFromLine"
          className=" stroke-green-foreground hover:stroke-green-foreground-hover size-3.5 md:size-4 lg:size-5"
        />
      </div>
    </Button>
  )
}
