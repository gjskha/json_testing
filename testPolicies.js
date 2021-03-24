/* imagine an array of policy objects like below. */
const policies = [
  {
    "policyId": "9afe73e5-77c9-4677-ba5f-1b9e807396a0",
    "issuer": "nationwide",
    "issueDate": "2021-01-21",
    "renewalDate": "2021-07-22",
    "policyTermMonths": 6,
    "premiumCents": 49234,
    "policyHolder": {
      "name": {
        "firstName": "John",
        "middleName": "",
        "lastName": "Smith"
      },
      "address": {
        "number": "292",
        "street": "Hillside Way",
        "suffix": "S",
        "city": "Anytown",
        "state": "ME",
        "zip": "08321"
      },
      "email": "John.Smith897@example.com"
    },
    "operators": [
      {
        "isPrimary": true,
        "name": {
          "firstName": "John",
          "middleName": "",
          "lastName": "Smith"
        },
        "birthdayRange": {
          "start": "1988-05-22",
          "end": "1989-05-21"
        },
        "driversLicenseState": "ME",
        "driversLicenseStatus": "ValidUSLicense",
        "driversLicenseNumber": "XXXXX1633",
        "relationship": "Named Insured"
      },
      {
        "isPrimary": false,
        "name": {
          "firstName": "Mary",
          "middleName": "",
          "lastName": "Smith"
        },
        "birthdayRange": {
          "start": "1992-05-22",
          "end": "1992-05-21"
        },
        "driversLicenseState": "ME",
        "driversLicenseStatus": "ValidUSLicense",
        "driversLicenseNumber": "XXXXX1633",
        "relationship": "Spouse"
      }
    ]
  }
];

exports.policies = policies;

