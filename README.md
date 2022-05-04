# Ascend
[![Node.js CI/CD Production](https://github.com/OctoMammoth/mpit2022/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/OctoMammoth/mpit2022/actions/workflows/main.yml)
[![Node.js CI/CD Development](https://github.com/OctoMammoth/mpit2022/actions/workflows/dev.yml/badge.svg?branch=dev)](https://github.com/OctoMammoth/mpit2022/actions/workflows/dev.yml)

## Backend installation:
### create .env

`DATABASE_URL` = `"postgresql://admin:vq012mv9@localhost:5432/database?schema=public"`

`ACCESS_KEY_ID` = `"ACCESS_KEY_S3"`

`SECRET_ACCESS_KEY_ID` = `"S3_SECRET"`

`AWS_S3_BUCKET` = `"bucket-0001"`

`AWS_URI` = `"http://localhost:9000"`

`SMS_RU_API` = `"SMS_RU_API_KEY"`

`USER_SECRET` = `"gj0js912"`

`ADMIN_SECRET` = `"0v01k8s4"`

use `yarn` for pack packages

use `docker-compose up -d` for docker-containers ups

use `yarn migrate` for setup your database

use `yarn start` for start backend

## Jitsi install copy .env.examply to .env
and set up for your machine

## Frontend

use `yarn` for pack packages

use `yarn start` for startup Metro

use `yarn android` for build Android dev application 
