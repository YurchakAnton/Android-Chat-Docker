## Clone `.env.example` as `.env` and set your settings
## Adonis key

```bash
  adonis key:generate
```
#### For up docker-container
```docker-compose up
```
####  If you build docker-container
```bash
  make up
  make ssh
```
#### In `web` container
```bash
  adonis adm:init
  adonis migration:run
  adonis seed
  adonis module:sync
```
### If you dont have `docker`
#### If you dont have global `@adonisjs/cli pm2`
```bash
  npm i -g @adonisjs/cli pm2
```
