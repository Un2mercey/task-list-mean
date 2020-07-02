# MEAN application "Task list"

- M - MongoDB
- E - Express
- A - Angular
- N - NodeJS

# Installation

## NodeJS

[source](https://nodejs.org/en/)

```
node -v
v12.16.3

npm -v
6.14.4
```

## Angular CLI

[source](https://cli.angular.io/)

```
ng v
Angular CLI: 10.0.0
...
```
## Nodemon

packet for NodeJS
[documentation](https://www.npmjs.com/package/nodemon)

```
npm i -g nodemon
```

## Concurrently

packet for NodeJS
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


# Install application dependencies

```
npm i
```

# Building

Run `ng build` or `npm run build` to build the project.


# Running

```
npm start
```

# Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` or `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
