# MEAN application "Task list"

![](https://phpdes.com/wp-content/uploads/2013/04/MongoDB.png)
![](https://p7.hiclipart.com/preview/545/451/583/node-js-express-js-javascript-solution-stack-web-application-others.jpg)
![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png)
![](https://img2.freepng.ru/20180619/vjl/kisspng-node-js-angularjs-react-javascript-npm-node-js-5b28f6111cb2c9.1605132215294110891176.jpg)

M - MongoDB
E - Express
A - Angular
N - NodeJS

## NodeJS

[download-page]((https://nodejs.org/en/))

```
node -v
v12.16.3

npm -v
6.14.4
```

## Angular CLI
![](https://q-bit.biz/uploads/article/ang_cli2_1518602695_1538829951.png)
[download-page](https://github.com/angular/angular-cli)

```
ng v
Angular CLI: 10.0.0
...
```

## Concurrently packet for NodeJS

[documentation](https://www.npmjs.com/package/concurrently)

```
npm i -g concurrently
```

## MongoDB

- Step 1 : [register](https://cloud.mongodb.com/)
- Step 2 : choose clusters
- Step 3 : choose connect
- Step 4 : choose connect your application
- Step 5 :
    - line 2: const uri - its your private uri to import in backend/db/unmerceydb.js to line 6 instead {unmerceydb_key} as string
    - then delete line 2 in backend/db/unmerceydb.js
    - example uri: mongodb+srv://<YOUR_LOGIN>:<YOUR_PASSWORD>@smthng-pyl9d.gcp.mongodb.net/<YOUR_DB_NAME>?retryWrites=true&w=majority

## Download dependencies

```
npm i
```

## Build

Run `ng build` or `npm build` to build the project.


## Start application

```
npm start
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).