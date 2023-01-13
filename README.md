## Run project at develop mode

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lint

For run esLint:

```bash
yarn lint
```

## Build project

project will save at /build folder

```bash
yarn build
```

## Create images

```bash
docker-compose -f docker-compose.yml build
```

it's created nginx and nextjs images for deploying
nginx output port by defoult 81
