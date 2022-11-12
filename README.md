### Project setup
It's a project setup for Laravel, Inertia, React, Chakra UI and Docker.

First of all, you need to install **docker** and **docker-compose**. The instructions can be found [here](https://docs.docker.com/compose/install/).

Then, you need to install **Make**. The instructions can be found [here](https://www.gnu.org/software/make/).

You need to create a `.env` file in the root of the project. You can use the `.env.example` file as a template.
```
cp .env.example .env
```
After that, you can run the following command to start the project:
```
make init
```
It will install all dependencies and start the project. You can access the project on [http://localhost](http://localhost).
