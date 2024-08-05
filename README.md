# Simple Request Form

---

# Setting Up and Running Cypress Tests

This guide explains how to set up the necessary dependencies and run existing Cypress tests in this project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager, typically included with Node.js)

## Setup Instructions

Follow these steps to set up the project and run the Cypress tests:

### 1. Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/tkolhar/simple_form_request.git
cd my-cypress-project
```

### 2. Install Project Dependencies

Once you're inside the project directory, install the project dependencies using npm:

```bash
npm install
```

This command will install all required packages listed in the `package.json` file, including Cypress.

### 3. Open Cypress Test Runner (Interactive Mode)

To run Cypress tests interactively using the Cypress Test Runner:

```bash
npx cypress open
```

- This command will open the Cypress Test Runner where you can select and run individual test files interactively.
- Select the test file you want to run from the list that appears in the Test Runner.

### 4. Run Cypress Tests in Headless Mode

To run all Cypress tests in headless mode (without the GUI), use the following command:

```bash
npx cypress run
```

- This command will execute all the tests in the `cypress/e2e` (or `cypress/integration` in older versions) directory and output the results in the terminal.
- You can also specify a particular test file to run by adding `--spec` followed by the path to the test file. For example:

  ```bash
  npx cypress run --spec "cypress/e2e/tests/support_request_tickets.cy"
  ```

### 5. View Test Results

After running the tests in headless mode, you can view the results in the terminal. Additionally, Cypress will generate videos and screenshots (by default) for failed tests, which you can review in the `cypress/videos` and `cypress/screenshots` directories.

For review purpose I have placed the execution results of both API and UI tests under `cypress/screenshots` They are mp4 format and can be downloaded and playbacked to view the demo.


### 6. Troubleshooting

If you encounter any issues, here are a few common problems and solutions:

- **Dependencies Not Installed Correctly**: Ensure you ran `npm install` from the project root and that there are no errors during the installation process.
- **Cypress Not Opening**: Verify that the correct Node.js and npm versions are installed and that Cypress was installed successfully.
- **No Spec Files Found**: Ensure that your test files are in the correct directory (`cypress/e2e` or `cypress/integration` for older versions) and that they are named with the correct file extension (`.cy.js`, `.cy.ts`, etc.).

For more information, refer to the [Cypress Documentation](https://docs.cypress.io).

---

