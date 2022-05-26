Repository for my personal blog. Built using Docusaurus 2. Contains personal observations and learnings, with myself as the primary audience.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Uses github actions for CI/CD. Build is tested on branches/PR's. All commits to `main` are automatically deployed.