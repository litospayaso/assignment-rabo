# Assignment

This project is made in [nodejs](https://nodejs.org/es/).

To install all dependencies execute:
```
npm install
```
That is not mandatory because `node_modules` folder is already in the project.

## Execute code

To exectute the code run:
```
npm start
```
and type the location of csv or xml file. Data output can be piped to the exit of the application:
```
npm start > output.out
```

## External libraries

I have used a IBAN library for IBAN validation [iban.js](https://github.com/arhs/iban.js/)

## Explanation of the app.

There is a folder of validators for each field to validate. There is also a file to validate a record in JSON format (this method call to all validators). To manage the validators `main.js` take the input file and call to validate record function on each record. `main.js` creates a stream to parse line by line records. I made it in this way to handle big data information. 

## Why nodeJs.

I choose nodeJs because it is so simple to create a backEnd application on javascript. The code amount is really few and it is very simple to maintain. By the way it is easy too to deploy a server with [express](http://expressjs.com/es/) and generate microservices. I have created some, you can desploy it executing:
```
npm run server
```
On the other hand javascript services can be imported to frontEnd application as a normal library.

## Running tests

Tests has been written in mocha [mochajs](https://mochajs.org/) and [chaijs](http://www.chaijs.com/). All tests are in test folder. There is one test for each validator. To execute all tests run:
```
npm test
```
