# Muithew using Turbo Repos - Monorepos by Vercel

This repository is set up as a Monorepo using Vercel's Turbo Repos. It consists of two main projects: the admin dashboard and the landing page.

### Admin Dashboard

- **Framework/Languages**: React 18
- **Build Tool**: Vite
- **Demo**: <https://muithew-admin.vercel.app>

### Landing Page

- **Framework/Languages**: Next.js 14
- **Demo**: <https://muithew-landing.vercel.app>

### Storybook Documentation

- **Framework/Languages**: Storybook v7
- **Demo**: <https://muithew-docs.vercel.app>

#### Packages Used

1. [Styled Components](https://styled-components.com/) - Used for styling components.
2. [Material-UI (MUI)](https://mui.com/) - Provides a set of React components that implement Google's Material Design.
3. [Storybook](https://storybook.js.org/) - Used for developing UI components in isolation.

## Getting Started

```bash
git clone https://github.com/annminn104/muithew-monorepos.git

cd muithew-monorepos

yarn # Using Node version 18

yarn build

yarn dev # Start all apps 🚀

# Storybook documentation:

yarn storybook:build

yarn storybook:move

# Start mini app
yarn dev --filter=[app-name]

# Start mini storybook
yarn storybook --filter=[package-name]
```

### Docker command

```bash
docker network create app_network

docker-compose -f docker-compose.yml up -d
```

### Configure Server

- [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)

- [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04)

- [Certbot](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04)

- [Jenkins](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-22-04)

### Frameworks/Libraries

- React - Nextjs - Astro - Gatsby - Remix - Qwik
