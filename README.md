# Muithew-monorepos

## Muithew using Turbo monorepos

This repository is set up as a Monorepo using Vercel's Turbo Repos.

### Docker

```bash
docker network create app_network

docker compose -f docker-compose.yml up -d --build
```

### Admin dashboard

- **Framework/Languages**: React 18
- **Build Tool**: Vite
- **Demo**: <https://admin.maruhachinousan.com>

### Landing page

- **Framework/Languages**: Next.js 14
- **Demo**: <https://landing.maruhachinousan.com>

### Maruhachinousan landing page

- **Framework/Languages**: Next.js 14
- **Demo**: <https://maruhachinousan.com>

### Astro blog

- **Framework/Languages**: Astro 4.5
- **Demo**: <https://astro.maruhachinousan.com>

### Remix example

- **Framework/Languages**: Remix 2.8
- **Demo**: <https://remix.maruhachinousan.com>

### Storybook documentation

- **Framework/Languages**: Storybook v7
<!-- - **Demo**: <https://muithew-docs.vercel.app> -->

#### Packages used

1. [Styled Components](https://styled-components.com/) - Used for styling components.
2. [Material-UI (MUI)](https://mui.com/) - Provides a set of React components that implement Google's Material Design.
3. [Storybook](https://storybook.js.org/) - Used for developing UI components in isolation.
4. [Framer Motion](https://framer.com/motion/) - Animation library

### Getting started

```bash
git clone https://github.com/annminn104/muithew-monorepos.git

cd muithew-monorepos

yarn install # Using Node version 18

yarn dev # Start all apps 🚀

# Storybook documentation:

yarn storybook:build

yarn storybook:move

# Start mini app
yarn dev --filter=[app-name]

# Start mini storybook
yarn storybook --filter=[package-name]
```

### Frameworks/Libraries in apps

- [React](https://react.dev)

- [Nextjs](https://nextjs.org)

- [Astro](https://astro.build)

- [Remix](https://remix.run)

- [Gatsby](https://gatsbyjs.com)

- [Qwik](https://qwik.builder.io)

- [Storybook](https://storybook.js.org)

### Configure Server

- [Docker](https://digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

- [Nginx](https://digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04)

- [Certbot](https://digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04)

- [Jenkins](https://digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-22-04)

- CI/CD:

  - [Config Jenkins](https://viblo.asia/p/ci-cd-lab-su-dung-jenkins-nginx-deploy-du-an-reactjs-umijs-len-aws-ec2-bWrZnWgmlxw)

```shell
.
├── node_modules/
├── package.json
├── apps/
│   ├── react/
│   │   ├── package.json
│   ├── nextjs/
│   │   ├── package.json
│   ├── remix/
│   │   ├── package.json
│   ├── gatsby/
│   │   ├── package.json
│   ├── qwik/
│   │   ├── package.json

```

```shell
importers:

  .:
    devDependencies:
      eslint:
        specifier: ^8.57.0
        version: 8.57.0
      prettier:
        specifier: ^3.2.5
        version: 3.2.5
      turbo:
        specifier: ^1.12.4
        version: 1.12.4

  apps/docs:
    dependencies:
      react:
        specifier: 18.2.0
        version: 18.2.0
      react-dom:
        specifier: 18.2.0
        version: 18.2.0(react@18.2.0)
    devDependencies:
        typescript:
        specifier: ^5.3.3
        version: 5.3.3

  apps/web:
    dependencies:
      react:
        specifier: ^18.2.0
        version: 18.2.0
      react-dom:
        specifier: ^18.2.0
        version: 18.2.0(react@18.2.0)
    devDependencies:
      typescript:
        specifier: ^5.3.3
        version: 5.3.3

```
