/* This file is the entry point for running the policies through checkPolicy() */

var Mocha = require('mocha');

/* customize the output of the testing software to the specs */
const {	
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
} = Mocha.Runner.constants;

class reportFailsOnly {
  constructor(runner) {
    const stats = runner.stats;
    runner.on(EVENT_TEST_FAIL, (test, err) => {
      console.log(`${test.fullTitle()}`);
    })
    .once(EVENT_RUN_END, () => {
        console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);
    });
  }
}

/* Instantiate a Mocha instance. */
var mocha = new Mocha({
  ui: 'tdd',
  reporter: reportFailsOnly
});

/* add the test harness */
mocha.addFile('./parsePolicies');

/* Run the tests. */
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});
