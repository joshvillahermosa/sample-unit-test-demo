# Sample Unit Test Repo
Hey guys, I hope you liked my short demonstration on basic unit testing, 
Unfortunately we did not cover all the topics so I highly encourage you guys to
research Spying and Stubbing. 

## Running The Repo
The instructions listed are used with npm, but feel free to use `yarn` instead

1. Clone this repo
1. Run `npm install`.
1. Run `npm test`. **Do this to the coverage folder will be generated**

This shoild be enough to get some tests running

## Commands
There are really two commands you will need to know:

1. `npm test` for running test files. This will generate a new coverage
report each time run.
1. `npm run serve-coverage` to serve the test coverage folder. You will
need to realod to see the updated results

## Package summary
Our discussion last friday made me think it might be a good idea to add a
small summary of each dependacy listed in the `package.json`

1. `jasmine` - A simple testing framework.
1. `http-server` - A simple node module that allows you to server static files
faster.
1. `nyc` - A code coverage tool used to show how you code is covered by tests
and creates a html report.

## Final notes
* To ne honest I can make this repo better by having test watchers, live
reload for the coverage html reporter, and implementing `husky` so the
last step in the installation process can be skipped. If requested I can put it
in OR you can make a PR to do so ;).
* What we talked about last Friday during that party was only the surface of
testing. There is so much more and I am willing to meet again to talk more
about it.
* Good tests can prevent bugs from entering production. **__Refactor in
confidence__**