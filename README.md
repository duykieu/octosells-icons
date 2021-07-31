# Octosells Icons Package

# Demo

https://octosells-icons.web.app/

## Installation

```npm
npm install @octosells/icons

# or

yarn add @octosells/icons
```

## Development

This package generates svg icons from Octosells Design to a React packages for frontend development.

1. Copy all svg files to `packages/icons/src/svgs`

2. Run this command

```npm
yarn generate
```

3. Edit `generate-icons.js` if needed.

## Build
Run this command to build both demo web interface and icons package.
```npm
yarn build
```

## Deploy
1. Login to firebase account `firebase login`

2. Run
```shell
firebase deploy --only hosting
```
