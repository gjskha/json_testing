var should = require("should");
var chai = require("chai");
var expect = chai.expect;
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;

/* set up a driver for testing the function with supplied policies */
const testPolicies = require("./testPolicies");

for (policy of testPolicies.policies) {

  checkPolicy(policy);
}

/*
  The checkPolicy() function checks for:
- the address of the policy holder
- the name of the policy holder
- the email address of the policy holder
- the complete driver’s license number of the policy holder
- the exact date of birth of all operators
- the gender of all operators
*/

function checkPolicy(policy) {
 
  describe(`Policy ${policy.policyId}`, function() {

    /* Test for name and email address */
    it("is missing first name", function(done) {

      expect(policy).to.have.nested.property('policyHolder.name.firstName');

      done();
    });

    it("is missing last name", function(done) {

      expect(policy).to.have.nested.property('policyHolder.name.lastName');

      done();
    });

    it("has email missing", function(done) {

      expect(policy).to.have.nested.property('policyHolder.email');

      done();
    });

    /* Make sure that the address has all the required elements */
    it("has address missing", function(done) {

      expect(policy.policyHolder.address).to.include.all.keys('number','street','city','zip');

      done();
    });

    /* Testing for presence of driver's license for policy holder */
    it("is missing DL for policy holder", function(done) {
 
      primary = policy.operators.filter(operator => operator.isPrimary === true); 

      expect(primary[0].driversLicenseNumber).to.not.be.undefined;        
      expect(primary[0].driversLicenseNumber).to.not.be.null;        
      
      done();
    });

    /* Testing for presence of gender for all operators */
    it("has a missing gender", function(done) {

      gender = policy.operators.filter(
        function check_gender(operator) {
          if (typeof(operator.gender) === "undefined") {
            console.log(`--> ${operator.name.firstName} ${operator.name.lastName} does not have a gender.`);
          }
          return operator.should.have.property('gender'); 
        }
        //operator => operator.should.have.property('gender')
      );
 
      expect(gender.length).to.equal(policy.operators.length);

      done();
    });

    /* Testing for exact birthday of all operators */
    it("has inexact birthdays", function(done) {

      correct_bdays = policy.operators.filter(
        function check_bday(operator) {
          if (operator.birthdayRange.start != operator.birthdayRange.end) {
            console.log(`--> ${operator.name.firstName} ${operator.name.lastName} does not have exact birthday.`);
          }

          return operator.birthdayRange.start === operator.birthdayRange.end;
        }
      );
 
      expect(correct_bdays.length).to.equal(policy.operators.length);

      done();
    });

  });
}
