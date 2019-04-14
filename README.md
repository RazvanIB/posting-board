# FrontBranch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to use

Social Cloud is an application meant to represent the beginnings of a social network. It has users, login/register functionality, Remember Password, Photo uploads, a barebones wall, posts. 
The backend for this application is hosted on Google Cloud, so only this code needs to be run locally. 

To dive deeper into its functionalities: 
Every login and register operation is 100% secure. While communicating with the database, I am sending information comprising the username and password as a hash (using sha256), and permission to login is given based on the status received from the server.
Every post is stored in a database and the user is given four choices about it: 
- a post can be deleted
- if the image is a geographical point of reference, then the coordinates and a little map (satellite view) is shown
- the text can be translated instantly to any other language available by choosing the desired language in a dropdown menu
- the entire post can be analyzed, a Google API returning an analysis comprising a classification for the title and body of the post (wether it's considered good or not that good) and, if the landmark in the picture is recognized, information about what actual landmark is presented in the picture. To test this functionality (and the Maps one), I recommend uploading a photo of the Eiffel Tower or the Colosseum.
- every single one of these is an API call to the backend

Some of these functionalities are also available on other users' posts. Every user can see the others and also read, translate or analyze their posts. 

Plans for the future: I want to add a friends functionality, to add a "post on a friend's wall" functionality, maybe a gallery of photos and a chat between 2 users. 