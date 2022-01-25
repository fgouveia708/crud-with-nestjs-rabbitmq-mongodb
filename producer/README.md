# CRUD with NestJS, RabbitMQ and MongoDB - PRODUCER

This project is responsible for create, update and delete contact.

## Getting started


### Required

- [Nest](https://github.com/nestjs/nest)
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

## Swagger

- [Swagger LOCAL](http://localhost:3000/api)

