Chitter
========

## Getting started

### Setup 
From the command line run the following:
```
git clone git@github.com:beca-g/chitter-typescript.git
cd chitter-typescript
```

### Install dependencies  
```
npm install
```

### To run tests
```
npm run coverage
```

### To compile
```
npx tsc
```

### To run the server  
(this will be removed once deployed)  
```
npm run start
```


## Specification

In this project we will be creating the backend API of a Twitter clone where users will be able to post messages to a public stream. 

## User Stories
```
As a Maker
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a Maker
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a Maker
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a Maker
So that I can post messages on Chitter as me
I want to sign up for Chitter
```
```
As a Maker
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a Maker
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```
```
As a Maker
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep
```

## Diagram 
![Imgur](https://imgur.com/VLlS1VS.png)

## Tech
* Typescript
* mocha/chai
* nyc coverage
