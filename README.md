# Cypress BDD Test Repository for Saucedemo using Dockerfile

This repository contains end-to-end tests for the [Saucedemo](https://www.saucedemo.com) website using Cypress and Cucumber. The tests cover scenarios related to user login, ordering items, and completing the purchase process.


## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rashmisagar/DemoCypressAutomation.git

2. **Install the dependencies:**

   ```bash
   cd DemoCypressAutomation
   npm install

3. **Running Tests Locally:**

 Execute the following command to run the tests locally using: npm test

 This will launch Cypress and execute the test scenarios defined in the integration folder.

4. **Configuration:**

Cypress configurations can be modified in the cypress.json file.
Test data such as login credentials and shipping information are stored in the fixtures/data.json file.
CI/CD with GitHub Actions

This repository is configured to run tests automatically on every push using GitHub Actions. The workflow is defined in the .github/workflows/cypress.yml file.

5. **Docker:**

A Dockerfile is provided for containerized test execution. To run tests in Docker, build the image and run a container:

 ```bash
 docker build -t DemoCypressAutomation
 docker run -it DemoCypressAutomation




