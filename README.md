# Real time chat app

Real time chat using nodejs and socket.io and aurelia.io. Chat rooms open at the bottom of the page, and the user can navigate while chat remains active.

## Running the app

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. Make sure you have jspm and gulp installed:
```shell
npm install -g jspm
npm install -g gulp
```

And you will likely want to run:
```shell
jspm registry config github
```

3. From the ***client*** folder execute the following commands:

```shell
npm install
jspm install -y
gulp build
```
4. From the ***server*** folder, execute the following command:

```shell
npm install
node index.js
```

5. Navigate to http://localhost:8888 in the browser