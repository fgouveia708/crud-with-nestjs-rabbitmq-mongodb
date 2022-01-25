# CRUD with NestJS, RabbitMQ and MongoDB - CONSUMER

This project is responsible for fetch and proccess contact.

## Getting started


### Required

- [NestJS](https://github.com/nestjs/nest)
- [Docker](https://www.docker.com/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [MongoDB](https://www.mongodb.com/)

### Clone project 

Clone the project and run `npm i`

### Installing the dependencies to run locally

We use the following services for data storage:

- RabbitMQ
- MongoDB

To provision these resources locally go to folder `/dev` and run `docker-compose up -d`

## Run application


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Routes


### /v1/contact
Get all contacts

```bash
curl --location --request GET '{base_url}/v1/contact' \
--data-raw ''
```

### /v1/contact/verify-email?email={email}
Check email exist

```bash
curl --location --request GET '{base_url}/v1/contact/verify-email?email=email@email.com' \
--data-raw ''
```

### /v1/contact/get-by-email?email={email}
Get contact by email

```bash
curl --location --request GET '{base_url}/v1/contact/get-by-email?email=email@email.com' \
--data-raw ''
```

### /v1/contact/{id}
Get contact by id

```bash
curl --location --request GET '{base_url}/v1/contact/61f021f5f71b1e87605082bf' \
--data-raw ''
```


## Swagger

- [Swagger LOCAL](http://localhost:3001/api)
