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
    games: {
        lolo: {
            path: "games/lolo",
            getHref: () => '/app/games/lolo',
        },
        XO: {
            path: "games/XO",
            getHref: () => '/app/games/XO',
        }
    },
  },
} as const;