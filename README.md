# CRUD with NestJS, RabbitMQ and MongoDB

This project is responsible for create, update, read and delete contact.

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

## Architecture

![](https://raw.githubusercontent.com/fgouveia708/crud-with-nestjs-rabbitmq-mongodb/blob/main/architecture-crud-with-nestjs-rabbitmq-mongodb.png)
