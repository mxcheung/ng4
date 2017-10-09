# Netball

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Install project
ng install netball  

## Add ball component and module
ng generate module ball  
ng generate component ball  
BallModule import BallComponent  
AppModule import BallModule  
App Component Html replace with selector app-ball  

## Add ball component variable
message: String;  
add reference {{message}}  

## Add ball service
ng generate service ball  
BallModule import BallService   
BallModule add provider BallService   
BallComponent import BallService   
BallComponent add constructor BallService  
BallComponent invoke BallService  
BallService add method getMessage  

## Add data ball service
BallService add method getProducts  
BallComponent invoke BallService.getProducts   
Ball Component Html iterate products  