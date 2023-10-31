# Backend

## Install

Windows: You have to run next command in WSL2 terminal from root project.
```
./vendor/bin/sail up
```

For easier interaction with docker just move to this folder and then use default docker commands:
```
cd ./vendor/bin/
docker-compose up
docker-compose down
docker-compose ps
```

To get inside docker container run:
```
docker exec -it backend-backend-1 sh
```

When cloning project run:
```
php artisan key:generate

php artisan key:generate --show
```

# Frontend

## Install
```
npm install
npm run dev
```

## Use translations (i18n)
```
this.$t('title')
```

## Use icons

```
<v-icon icon="mdi-domain" />
<font-awesome-icon :icon="['fas', 'home']" />
```