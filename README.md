<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS with Typescript'
description: 'This template demonstrates how to make a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v3.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node with Typescript HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v3.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples) which includes Typescript, Mongo, DynamoDB and other examples.

Clone this project and use it to create your own backend.

### Features

Developer experience first:

- 🔥 [Serverless framework](https://www.serverless.com)
- ⚡️ [ExpressJS](http://expressjs.com)
- ✅ Type checking [TypeScript](https://www.typescriptlang.org) with strict mode
- 💖 Database with [MongoDB](https://www.mongodb.com/) with in-memory database for local development
- 📏 Linter with [ESLint](https://eslint.org) with Airbnb configuration
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit testing with Jest and Supertest for integration testing
- 👷 Run tests on pull request with GitHub Actions
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using @ prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest
- 📖 Local support with Serverless Offline
- ⚙️ Environment variable with Serverless Dotenv
- 🎉 Fast bundler with esbuild
- ✨ HTTP Api instead of API gateway for cost optimization
- 💨 Live reload

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ahmedkhaled4d/Serverless-typescript-http-api-aws.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

The local server is now listening at http://localhost:4000

### Deploy to production

You can deploy to production with the following command:

```
npm run deploy-prod
```

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

**Invoke the function**

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/
```
