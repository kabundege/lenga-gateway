# Lenga Gateway

Landing page for the Lenga platform. Directs visitors to program reports (analytics) or content management (Strapi admin).

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4000](http://localhost:4000).

## Links

| Destination | URL |
|-------------|-----|
| Program reports | https://analytics.lenga.site |
| Content management | https://api.lenga.site |

## Docker

```bash
docker build -t lenga-gateway .
docker run -p 4000:4000 lenga-gateway
```
# lenga-gateway
