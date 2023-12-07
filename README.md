# UniCount: Universal countdown for every moment

It is basically a URL-path based countdown. I created this because the previous countdown project is so limited.
It is a WIP project by the way.

## Features

- [x] Basic URL countdown for midnight for the day
- [ ] Special page for special countdown (e.g. New Year, Christmas, Songkran (Thai New Year))
  - [x] New Year
- [ ] Custom URL generator for even more customization

## How to use the current version

You can basically use `https://BASE_URL_FOR_THE_APP/{year}/{month}/{date}`. Month and date are optional. If
they are not provided, it will default to 1. For example `https://BASE_URL_FOR_THE_APP/2025` is countdown for 2025 new year.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
