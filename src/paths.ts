export const paths = {
  app: {
    root: {
      path: '/',
      getHref: () => '/',
    },
    support: {
      path: 'support',
      getHref: () => '/support',
    },
    games: [
      {
        path: '/ludo.png',
        name: 'Ludo',
        getHref: () => '/app/games/ludo',
      },
      {
        path: '/xo.png',
        name: 'XO',
        getHref: () => '/app/games/XO',
      },
      {
        path: '/bingo.png',
        name: 'Bingo',
        getHref: () => '/app/games/bingo',
      },
      {
        path: '/chess.png',
        name: 'Chess',
        getHref: () => '/app/games/chess',
      },
      {
        path: '/dama.png',
        name: 'Dama',
        getHref: () => '/app/games/dama',
      },
      {
        path: '/ginRummy.png',
        name: 'Gin Rummy',
        getHref: () => '/app/games/ginRummy',
      },
      {
        path: '/spinWin.png',
        name: 'Spin Win',
        getHref: () => '/app/games/spinWin',
      },
      {
        path: '/uno.png',
        name: 'Uno',
        getHref: () => '/app/games/uno',
      },
    ],
  },
} as const
