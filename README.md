# JSON Testing

Here is my take on testing a JSON object for having members of various kinds. You might think that a combination of regex and Javascript's equality operators would be a good way to go about this. But as the old joke goes,

> Some people, when confronted with a problem, think "I know, I'll use regular expressions."  Now they have two problems.

So rather than doing it myself, I opted to use well established BDD testing libraries to do the heavy lifting instead. I specified a custom reporter for Mocha so that it outputs only errors and a summary. If one were to comment this part out in ```index.js```, you'd get a standard QA style output.

# Dependencies

requires the ```mocha```, ```chai```, and ```should``` libraries.

# Running 

Run the test suite like this:

```$ node index.js```

# Test data

The ```testPolicies.js``` file contains an example of a moderately complex JSON object that might be tested.
