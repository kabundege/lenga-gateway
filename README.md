# Lenga Gateway

Landing page for the Lenga platform. Directs visitors to program reports (analytics) or content management (Strapi admin).

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Links

| Destination | URL |
|-------------|-----|
| Program reports | https://analytics.lenga.site |
| Content management | https://api.lenga.site |

## Docker

```bash
docker build -t lenga-gateway .
docker run -p 3000:3000 lenga-gateway
```
# lenga-gateway
