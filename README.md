# the-game
A suite of mini-games to fend off boredom.

## Contributing
Please contribute! Any and all help is appreciated.

### Prerequisites
You'll need [Node.js](https://nodejs.org) installed. You can use the IDE of your choice, but I recommend [Visual Studio Code](https://code.visualstudio.com/). It's lightweight, fast, and quickly becoming an industry standard for web development. If you go that route, you'll find the tslint plugin helpful.

### Setup
After cloning the repo, navigate into `/the-game` directory and run

`npm install`

Once installation finishes, generate a production (minified) build by running

`npm run build`

You can build *and* deploy on a local server by running

`npm run serve`

and then opening the displayed "localhost" URL in a browser.

### Inner dev loop
For active development, it isn't necessary to generate the production build with each code change. Instead, run

`npm run start`

to launch a development server that will build and re-deploy each time you save changes to a file. The transpiled JavaScript code is source-mapped, so you can use the browser's developer console to debug your TypeScript code directly.

To execute tests, run

`npm run test`

and use the interactive menu to select modules to test. We're using [Jest](https://jestjs.io/docs/en/getting-started.html) as our test framework. New tests can be added simply by creating a file with the `.test.ts` extension.

### Pull requests
To keep the codebase healthy and the product running smoothly, we will be following a lightweight pull request protocol. While you're working on a change on your machine, work out of a local branch. You can create one by running

`git checkout -b <branch_name>`

When you're done with the change and have committed locally, you'll create an upstream branch and generate a request to pull that branch into origin master. To do that, run

`git push origin <branch_name>:<user_name>/<branch_name>`

Example: `git push origin bugFix:nbduke/bugFix`. On the main repository page in GitHub, you'll then find a link to generate a PR. For now, you can complete your own PRs - that is, we won't require an actual code review. However, since we don't have continuous integration set up yet, please make sure you have generated the production build with `npm run build` (and fixed all tslint warnings) and passed all tests with `npm run test`. Also, please use "squash commits" when completing a PR; this makes the Git history sane and orderly.

If you make any changes to the installation/setup/development loop of the product, please update this readme so others will know what to do. Thank you!
