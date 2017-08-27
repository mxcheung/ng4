# Ng4Material

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

## Step by Step 
Cover the material in website below
https://material.angularjs.org/latest/demo/select
https://jsonplaceholder.typicode.com/photos
https://coursetro.com/posts/code/67/Angular-4-Material-Tutorial
https://github.com/angular/material2/blob/master/src/lib/module.ts

## Step by Step 

1.  Create project
   ng new ng4-material  
   
2. Install material  
   npm install --save @angular/material @angular/cdk @angular/animations  

3. app.module.ts  
import @angular/material  
 --MdSelectModule

4. app.component.html  
<md-toolbar color="primary">  

	<span>MyCompany</span>
	<span class="example-spacer"></span>
	<button md-button [mdMenuTriggerFor]="appMenu"><md-icon>menu</md-icon> Menu</button>
	
</md-toolbar>

      <div layout="row" layout-align="space-between center">
        <span>What is your favorite color scheme?</span>
        <md-select model="title" placeholder="Title" class="md-no-underline">
          <md-option *ngFor="let data of (myData ? myData.slice(0,3): []); let i = index" [value]="data.title">{{ data.title }}</md-option>
        </md-select>
      </div>


5. app.component.ts
   rest call to https://jsonplaceholder.typicode.com/photos  

6. index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
  
7. styles.css
    indigo-pink.css
    
    
    
<md-select placeholder="State">
   <md-option>None</md-option>
   <md-option *ngFor="let state of states" [value]="state.code">{{ state.name }}</md-option>
</md-select>    
