# Next.js + TypeScript

## Features

- TypeScript
- ESlint, Prettier
- Styled-Components
- Cypress, e2e testing with cypress
- Storybook
- Jest, Unit testing with Jest and testing libary

## Structure

```raw
.

├── public/                           Static content to serve
├── src/
│   ├── pages/
│   │    ├── _app.tsx                 React UI wrapper, equivalent to "App.js" in CRA
│   │    ├── _document.tsx            NextJS wrapper, provides raw HTML used in SSR
│   │    └── *                        Page components, routing is based on file tree
│   ├── styles/
│   │    ├── global.ts                Global Styles
│   │    └── theme.ts                 Setup Styled-Components theme
│   ├── ui/                           Reusable stateless components based on Styled-Components with story and jest test, in 3 different subfolders
│   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │    └── widgets                  Wdigets consume a set of components can be something larger, lives in pages.
│   └── utils/  
│   │    ├── common.ts                common utility functions
│   │    ├── schema.ts                 data models

├── cypress.json                      Cypress config
├── .prettierrc                       Prettier config
└── package.json                      Application manifest
```

## Development

```shell
yarn install

# start dev mode
yarn dev
```



## Build for Production

```shell
yarn build
yarn start
```

## Theme

The theme is based on mobile first and defined in src/styles/theme.ts file. Open the file to check the details. The theme has few media query helper functions:

- theme.media.small
- theme.media.medium
- theme.media.large
- theme.media.up
- theme.media.down
- theme.media.between

Usage example:

