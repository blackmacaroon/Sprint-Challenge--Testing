# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps you in the event you ever need to return to old code, for any number of reasons, and improves your project manager's ability to review and assist you with your project.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?
===============================================================================

`describe()` is used to group together several related tests, creating a test 'suite'. It's not required but it helps keep things organized and helps you understand exactly where each test is coming from. You can also nest describes inside an outer describe to create a testing heirarchy.
`it()` is synonymous with `test()` they're used to describe the actual test and what the outcome is expected to be. each `it()` is considered one test, but you can put as many expectations into it as you'd like

1. What is the point of `Test Driven Development`? What do you think about this approach?
===============================================================================

TDD is useful in that it allows you to program onward confidently. As you test, you code only what's necessary to pass. This saves you a lot of time maybe over-coding and it also makes debugging an easier process. If you're testing well, as you code, you'll know immediately if something breaks. When it comes time to deploy, you will be confident that every component and method and function is behaving precisely as you want it to before your users get a chance to find errors and complain about it. So far, I love TDD, it makes perfect sense from a developer perspective. I would enjoy digging deeper into testing, it's been fun flexing this new muscle trying to figure out what to test before it even existst to test it.

1. Mention three types of automated tests.
===============================================================================

static tests - catch basic user errors like typos and type errors as you code - quick and cheap
unit tests - to verify that each individual unit is working as expected - medium quick and medium cheap
integration tests - to verify that all the working units work together as expected - medium slow, medium expensive
e2e tests - like a lil robot, acting as a user, running around in your app clicking on everything to verify that everything works as expected. Slow and expensive.

## Project Set Up

- [ ] Fork and clone this repository.
- [ ] **CD into the folder** where you downloaded the repository.
- [ ] Run `yarn` or `npm i` to download all dependencies.
- [ ] Type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Use `jest` and `supertest` to write the tests.
- [ ] Write the **tests BEFORE** writing the route handlers.
- [ ] Your API must have both `POST` and `GET` endpoints for `/games`.
- [ ] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [ ] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- Validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- Add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - Add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exist return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
