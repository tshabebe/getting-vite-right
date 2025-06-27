import { Button, Input } from 'react-aria-components'
import { useState } from 'react'
import { Icon } from './components/Icon'
import { paths } from './paths'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = paths.app.games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="min-h-screen mx-auto px-3.5 md:px-6 lg:px-36 container flex flex-col">
      <div className="flex flex-col gap-6 ">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex flex-col gap-4">
          <SearchGames
            screen="sm"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <GameCard
            games={filteredGames as unknown as typeof paths.app.games}
          />
        </div>
      </div>
      <FloatingInviteBar />
    </main>
  )
}

function Header({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
}) {
  return (
    <div className="flex flex-col">
      <div className="pt-5 md:pt-8 flex flex-col gap-2 md:gap-6">
        <div className="flex gap-2 md:pl-6 items-center">
          <span className="block md:hidden">
            <ProfileComponent />
          </span>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-fit h-9 lg:mt-2 md:w-fit md:h-10 opacity-80"
          />
          <div className="flex gap-2 ml-auto items-center ">
            <span className="hidden md:block">
              <ProfileComponent />
            </span>
            <span className="hidden md:flex items-end gap-1 mt-2">
              <span className="text-3xl font-bold leading-none">24,630</span>
              <span className="text-foreground-secondary pb-1">Birr</span>
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-end ">
          <BetComponent />
          <SearchGames
            screen="md"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <span className="md:hidden grow flex items-end gap-1">
            <span className="text-3xl font-bold">24,630</span>
            <span className="text-foreground-secondary pb-1">Birr</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function SearchGames({
  screen,
  searchQuery,
  setSearchQuery,
}: {
  screen: 'md' | 'sm'
  searchQuery: string
  setSearchQuery: (query: string) => void
}) {
  return (
    <div
      className={`  overflow-hidden rounded-2xl ${
        screen === 'md'
          ? 'hidden md:block self-stretch'
          : screen === 'sm'
          ? 'block md:hidden self-stretch h-12'
          : ''
      }`}
    >
      <Input
        className={
          'px-3 bg-gray-input w-full h-full border-border outline-none rounded-2xl'
        }
        placeholder="find your games"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

function BetComponent() {
  return (
    <Button
      className={
        'flex px-6 py-2 grow md:grow-0 bg-elevation-1 justify-between md:justify-start md:gap-12 lg:gap-14 hover:bg-elevation-1-hover hover:text-foreground-hover items-center rounded-2xl'
      }
    >
      <span className="flex items-end gap-1">
        <span className="flex items-end gap-1">
          <span className="text-2xl md:text-3xl">20</span>
          <span className="pb-1 flex gap-1">
            <span className="text-foreground-secondary">Birr</span>
            <span>/</span>
            <span>bet</span>
          </span>
        </span>
      </span>
      <div className="flex p-2 bg-green-background hover:bg-green-background-hover  rounded-md">
        <Icon
          name="ArrowUpFromLine"
          className=" stroke-green-foreground hover:stroke-green-foreground-hover size-3.5 md:size-4 lg:size-5"
        />
      </div>
    </Button>
  )
}

function ProfileComponent() {
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

function GameCard({ games }: { games: typeof paths.app.games }) {
  return (
    <div className="grid md:px-6 gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 basis-10">
      {games.map((game) => (
        <Button className={'h-48 relative'} key={game.name}>
          <img
            src={game.path}
            alt={game.name}
            className="w-full h-full object-cover  rounded-lg"
          />
          <div className="absolute px-3.5 md:px-4 pb-2  text-foreground-contrast h-14 bottom-0 flex items-end bg-gradient-to-t from-elevation-1 via-50% via-elevation-1/50 to-elevation-1/0 inset-x-0">
            <span className="text-base">{game.name}</span>
          </div>
        </Button>
      ))}
    </div>
  )
}

function FloatingInviteBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-elevation-1/80 backdrop-blur-md max-w-md mx-auto px-4 py-4 rounded-2xl shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon name="UserPlus" className="stroke-green-foreground" />
        <span className="text-green-foreground">Invite Friends</span>
      </div>
      <div className="flex items-center gap-1">
        <ProfileComponent />
        <span className="">test***4</span>
      </div>
    </div>
  )
}

function InviteBar() {}
