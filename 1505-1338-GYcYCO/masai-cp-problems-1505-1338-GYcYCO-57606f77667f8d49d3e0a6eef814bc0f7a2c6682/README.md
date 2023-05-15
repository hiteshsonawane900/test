# JS - Hotel Booking App Level-0

## Submission Instructions [Please note]

### Maximum Marks - 5

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 2 marks.
 ✅ Student is able to loop through the data and append in the dom - 2 marks.
```

### JS-VITE-WITH-MOCK-SERVER

Please do not use VSCode live-server. It will not work. Use the npm commands suggested to you here.

#### Installation

```
npm install --engine-strict
```
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

#### Start only Backend server

```
npm run server
```


#### Start only Frontend server

```
npm run start
```

#### Start both BE & FE in a single command

```
npm run watch
```

## Folder structure

- index.html(Home Page)
- scripts/index.js
- styles (Create this folder and all your css files goes here)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem statements

- In this application we will have 1 main api that we will use:-

  1. hotelAPI

This just a variable of index.js(Will be given in the template)

- When you want to make an api request import that api variable in your js file and use it.

- In this application, we have 1 page:-
  1. index.html(Home Page)

1. ### index.html(Home Page)

- In this page we have to make a api request to the api.

- import the `hotelAPI` variable in your js file(it is declared in Modules/index.js)

- If you make a successful api call there, you will get the data in form of an array of objects.

- Loop over the data and for each object create a card. Inside that card you have to append all the data like name, price, city and image.

- The cards should be appended in a div with id:- `hotel-container`.
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Screenshot%202023-01-18%20at%2012.26.06%20PM_271903.png)

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
