# solar-strapi

Strapi is the leading open-source headless CMS.

API Creation is made simple and do not have to write the boilerplat code when its availbale out of the box for you.
Try a [live demo ] (https://solar-strapi.herokuapp.com/)

On the local environment it uses SQL Lite database

#

```
npm install
npm run develop
```

gcloud builds submit --tag gcr.io/restaurant-dev-369923/strapi-dev-354

gcloud run deploy strapi-dev-354 --image gcr.io/restaurant-dev-369923/strapi-dev-354