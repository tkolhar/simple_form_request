
---

### **Test Plan for Create Request Tickets Feature**

#### **Objective:**
To ensure that the create request tickets feature meets the highest quality standards by performing comprehensive testing across various levels and components of the system, including the web application client, REST API, database backend, and Docker environment.

### **Components to Test:**
1. **Web Application Client**
   - User Interface (UI)
   - Form validation and error handling
   - Functionality (e.g., ticket creation, viewing past requests)
   - Accessibility and responsiveness

2. **REST API**
   - Endpoints for managing support requests
   - Data validation and business logic
   - Status codes and error responses
   - Performance and load handling

3. **Database Backend**
   - Data storage, retrieval, and integrity
   - Indexing and query performance
   - Data consistency across CRUD operations

4. **Docker Compose Environment**
   - Container orchestration and communication
   - Service startup and dependency management
   - Network and volume persistence

### **Types of Testing:**

#### **1. Functional Testing**

   **Form Validation:**
   - **Test Case 1:** Verify that the "Title" field is required. Submit the form without entering a title and ensure a validation error is displayed.
   - **Test Case 2:** Validate the "Description" field is required. Submit the form without a description and check for an appropriate error message.
   - **Test Case 3:** Test the "Application Area" dropdown to ensure a selection is required before submission.
   - **Test Case 4:** Validate that the "Date" field does not accept future dates.
   - **Test Case 5:** Verify that an invalid video URL (not from YouTube or Vimeo) triggers a validation error.
   - **Test Case 6:** Check that an invalid email format in the "Contact Email" field shows an error.
   - **Test Case 7:** Ensure that the "Resolved" status is set to false by default when a new request is created.

   **Form Submission:**
   - **Test Case 8:** Submit the form with all valid data and verify that it is saved correctly in the database.
   - **Test Case 9:** Test form submission with optional fields (Video URL, Contact Email) left empty to ensure no errors occur.
   - **Test Case 10:** Submit a form with all fields filled out and verify that the data is correctly reflected in the database and the UI.

   **Viewing Past Requests:**
   - **Test Case 11:** Ensure that users can view a list of their past requests, including details such as title, description, application area, and status.
   - **Test Case 12:** Verify that resolved requests are correctly marked and displayed as "Resolved" in the past requests view.
   - **Test Case 13:** Test pagination or scrolling for a large number of past requests to ensure the UI handles it smoothly.

   **Updating Requests:**
   - **Test Case 14:** Mark a request as resolved and verify that the status is updated in the database and UI.
   - **Test Case 15:** Try to mark an already resolved request as unresolved and ensure that the system handles this scenario correctly (if applicable).

#### **2. API Testing**

   **Endpoint Validation:**
   - **Test Case 16:** Send a POST request to create a new support request and verify that it returns a 201 Created status code.
   - **Test Case 17:** Send a GET request to retrieve all support requests for a user and verify the data structure and content.
   - **Test Case 18:** Test the PUT/PATCH endpoint to update a support request’s status and verify that the status is updated correctly in the database.

   **Status Codes:**
   - **Test Case 19:** Send an invalid request (e.g., missing required fields) to the POST endpoint and verify that it returns a 400 Bad Request status code.
   - **Test Case 20:** Attempt to retrieve a non-existent support request using the GET endpoint and verify that it returns a 404 Not Found status code.
   - **Test Case 21:** Verify that the API returns a 401 Unauthorized status code when trying to access endpoints without proper authentication.

   **Input Validation:**
   - **Test Case 22:** Test the API with missing required fields and validate that it rejects the request with appropriate error messages.
   - **Test Case 23:** Send a request with invalid data formats (e.g., invalid email, malformed URL) and ensure the API responds with validation errors.
   - **Test Case 24:** Verify that the API correctly handles special characters and large input sizes without errors.

   **Data Integrity:**
   - **Test Case 25:** Create a new support request and verify that the data is accurately stored in the database.
   - **Test Case 26:** Update a support request and ensure that only the specified fields are updated, leaving other data intact.
   - **Test Case 27:** Delete a support request and confirm that it is removed from the database.

   **Security:**
   - **Test Case 28:** Test for SQL injection by submitting potentially harmful SQL queries in the input fields and verifying that the API remains secure.
   - **Test Case 29:** Attempt a cross-site scripting (XSS) attack by submitting malicious scripts in input fields and ensure the API sanitizes the input.
   - **Test Case 30:** Ensure that the API rejects requests from unauthorized users, protecting data from unauthorized access.

#### **3. Integration Testing**

   **End-to-End Scenarios:**
   - **Test Case 31:** Simulate a complete user scenario from creating a support request to viewing it in the past requests view and updating its status.
   - **Test Case 32:** Test the integration between the web client and API by submitting requests through the UI and verifying the data in the database.
   - **Test Case 33:** Verify that the system correctly handles errors at various stages (e.g., API failure during submission) and provides meaningful feedback to the user.

   **Service Communication:**
   - **Test Case 34:** Verify that the web client, API, and database communicate seamlessly within the Docker environment, handling dependencies and delays appropriately.
   - **Test Case 35:** Test how the system behaves when one service (e.g., the database) is temporarily unavailable and recovers after service restoration.

   **Error Handling:**
   - **Test Case 36:** Simulate API failures (e.g., invalid endpoint, server error) and verify that the UI displays appropriate error messages to the user.
   - **Test Case 37:** Test the system’s response to database errors (e.g., constraint violations) and ensure it fails gracefully without crashing.

#### **4. Performance Testing**

   **Load Testing:**
   - **Test Case 38:** Simulate multiple users submitting and viewing support requests simultaneously to evaluate the system’s performance under load.
   - **Test Case 39:** Test the system’s behavior under peak load conditions (e.g., high traffic) to ensure it maintains acceptable performance levels.

   **Stress Testing:**
   - **Test Case 40:** Push the system beyond its normal load (e.g., 10x typical user activity) to identify breaking points and evaluate recovery mechanisms.
   - **Test Case 41:** Test the API’s response times and error rates when subjected to a sudden surge in requests.

   **Database Performance:**
   - **Test Case 42:** Measure query performance under various data volumes to ensure the database handles large datasets efficiently.
   - **Test Case 43:** Test the performance impact of complex queries (e.g., filtering and searching past requests) on the overall system.

   **API Response Time:**
   - **Test Case 44:** Monitor the API’s average response time under normal load conditions to ensure it meets performance benchmarks.
   - **Test Case 45:** Test API response times during and after peak loads to evaluate performance degradation and recovery.

#### **5. Usability Testing**

   **User Experience:**
   - **Test Case 46:** Evaluate the ease of use of the help request form, including the clarity of instructions, error messages, and feedback.
   - **Test Case 47:** Conduct user testing sessions to gather feedback on the user interface and identify potential usability issues.
   - **Test Case 48:** Test the intuitiveness of the UI by asking new users to create and submit a support request without prior instructions.

   **Accessibility:**
   - **Test Case 49:** Test the application using screen readers to ensure it is accessible to visually impaired users.
   - **Test Case 50:** Verify that the application is fully navigable using only the keyboard, without requiring a mouse.
   - **Test Case 51:** Check for sufficient color contrast and readability to ensure the application is accessible to users with color blindness.

   **Responsive Design:**
   - **Test Case 52:** Test the application on various devices (e.g., desktops, tablets, smartphones) to ensure it is responsive and functional on different screen sizes.
   - **Test Case 53:** Verify that the application adapts correctly to both portrait and landscape orientations on mobile devices.

#### **6. Security Testing**

   **Authentication and Authorization:**
   - **Test Case 54:** Ensure that only authenticated users can create, view, and update their support requests.
   - **Test Case 55:** Test that users can only access their own requests and cannot view or modify requests belonging to other users.
   - **Test Case 56:** Verify that role-based access control (if implemented) is enforced correctly across the application.

   **Input Sanitization:**
   - **Test Case 57:** Test for SQL injection vulnerabilities by submitting various SQL queries in input fields and verifying that the API sanitizes the input.
   - **Test Case 58:** Submit potentially harmful scripts in input fields to test for XSS vulnerabilities and ensure that the application sanitizes the input.

   **Data Protection:**
   - **Test Case 59:** Verify that sensitive information, such as contact emails, is encrypted and protected both in transit and at rest.
   - **Test Case 60:** Test that the application properly implements security headers (e.g., Content Security Policy, X-Content-Type-Options) to protect against common attacks.

#### **7. Compatibility Testing**

   **Cross-Browser Testing:**
   - **Test Case 61:** Test the web client across different browsers (e.g., Chrome, Firefox, Safari, Edge) to ensure consistent functionality and appearance.
   - **Test Case 62:** Verify that browser-specific features, such as autofill, do not interfere with the application’s functionality.

   **Operating Systems:**
   - **Test Case 63:** Test the application on different operating systems (e.g., Windows, macOS, Linux) to ensure consistent behavior and performance.
   - **Test Case 64:** Ensure that the application works seamlessly across different versions of the same operating system.

#### **8. Regression Testing**

   **Existing Features:**
   - **Test Case 65:** Run a full regression suite to ensure that the new help feature does not introduce any bugs or issues in existing application functionality.
   - **Test Case 66:** Test integration points between the help feature and other parts of the application to verify no unintended side effects.

   **Automated Regression Suite:**
   - **Test Case 67:** Develop an automated regression suite to be run before each deployment to catch any regressions early.
   - **Test Case 68:** Verify that the automated regression suite covers all critical paths in the application, including edge cases.

#### **9. Data Migration Testing (if applicable)**

   **Migration Scripts:**
   - **Test Case 69:** Test the correctness of data migration scripts by migrating existing user data to the new feature and verifying accuracy.
   - **Test Case 70:** Verify that data migrated from old formats to the new system is accessible and functional within the new feature.

   **Backward Compatibility:**
   - **Test Case 71:** Ensure that the application can still function correctly with older data formats after the feature is implemented.
   - **Test Case 72:** Test that users with older data can still view and interact with their support requests without issues.

### **Automation Approach:**
1. **Tools:**
   - **Frontend Testing:** Cypress for UI and end-to-end testing.
   - **API Testing:** Postman/Newman or REST Assured for automated API testing.
   - **Performance Testing:** JMeter or k6 for load and stress testing.
   - **Security Testing:** OWASP ZAP or Burp Suite for security testing.
   - **CI/CD Integration:** Integrate tests into a CI/CD pipeline using GitLab CI, Jenkins, or Azure DevOps.

2. **Test Automation:**
   - **Environment Setup:** Use Docker Compose to spin up the application environment, ensuring that tests run in a setup close to production.
   - **Test Execution:** Develop and execute automated test cases for core functionalities, focusing on form validation, API integration, and end-to-end scenarios.
   - **Reporting:** Generate detailed reports from the automated test runs, including any failures or issues identified during testing.

### **Feedback on Implementation:**
- **Strengths:**
  - **User Interface:** The form is intuitive and easy to use, making it simple for users to submit help requests.
  - **Modularity:** The separation of the client, API, and database into Docker containers enhances maintainability and scalability.

- **Areas for Improvement:**
  - **Real-Time Validation:** Implement real-time validation feedback to improve the user experience while filling out the form.
  - **Request Tracking:** Provide more granular status tracking for support requests, such as “In Progress” or “Pending Review.”
  - **Search and Filter:** Add search and filter capabilities in the "Past Requests" view to help users find specific requests more easily.
  - **Swagger Integration:** Enable Swagger for API documentation to aid in understanding and testing the API.

---
