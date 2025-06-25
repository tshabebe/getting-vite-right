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
        path: '/src/assets/ludo.png',
        name: 'Ludo',
        getHref: () => '/app/games/ludo',
      },
      {
        path: '/src/assets/xo.png',
        name: 'XO',
        getHref: () => '/app/games/XO',
      },
      {
        path: '/src/assets/bingo.png',
        name: 'Bingo',
        getHref: () => '/app/games/bingo',
      },
      {
        path: '/src/assets/chess.png',
        name: 'Chess',
        getHref: () => '/app/games/chess',
      },
      {
        path: '/src/assets/dama.png',
        name: 'Dama',
        getHref: () => '/app/games/dama',
      },
      {
        path: '/src/assets/ginRummy.png',
        name: 'Gin Rummy',
        getHref: () => '/app/games/ginRummy',
      },
      {
        path: '/src/assets/spinWin.png',
        name: 'Spin Win',
        getHref: () => '/app/games/spinWin',
      },
      {
        path: '/src/assets/uno.png',
        name: 'Uno',
        getHref: () => '/app/games/uno',
      },
    ],
  },
} as const
