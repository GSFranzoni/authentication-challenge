# Image Uploader

### Challenge
Simple authentication app made with **Laravel**, **Socialite**, **React** and **Inertia JS**.

### Requirements
- I can register a new account
- I can log in
- I can log in or register with at least one of the following services: Google, Facebook, Twitter or Github
- I can sign out
- I can see my profile details
- I can edit my details including: photo, name, bio, phone, email and password
- I can upload a new photo or provide an image URL

Read more on the [challenge page](https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw).

### Project setup
First of all, you need to install **docker** and **docker-compose**. The instructions can be found [here](https://docs.docker.com/compose/install/).

Then, you need to install **Make**. The instructions can be found [here](https://www.gnu.org/software/make/).

You need to create a `.env` file in the root of the project. You can use the `.env.example` file as a template.
```
cp .env.example .env
```

Make sure you fill the `AWS_*` variables with your AWS credentials, because the app uses S3 to store the user avatars.

After that, you can run the following command to start the project:
```
make init
```
It will install all dependencies and start the project. You can access the project on [http://localhost](http://localhost).

### Demo
You can see a demo of the project [here](http://authentication-challenge.herokuapp.com/).
