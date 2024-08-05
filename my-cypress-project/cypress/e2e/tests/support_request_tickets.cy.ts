/// <reference types="cypress" />

describe('Support Request Form Tests', () => {
    // This runs before each test case
    beforeEach(() => {
      cy.visit('http://localhost:4200');
    });
  
    it('Should display validation errors for missing required fields', () => {
      cy.get('html').within(() => {
        cy.contains("Create Ticket").click();
        cy.contains("Submit").click();
      });
  
      // Check for validation messages
      cy.contains('You need to enter a title.').should('be.visible');
      cy.contains('You need to select an application area.').should('be.visible');
      cy.contains('You need to select a date.').should('be.visible');
    });
  
    it('Should display an error for invalid video URL', () => {
      cy.contains("Create Ticket").click();  
      cy.get("[formcontrolname='title']").type('Test Issue');
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get("[formcontrolname='description']").type('This is a test issue description.');
      cy.get("[formcontrolname='dateTime']").type('8/3/2024');
      cy.get("[formcontrolname='videoUrl']").type('invalid-url');
      cy.contains("Submit").click();
  
      // Check for URL validation error
      cy.contains("Error occurred, check the network tab on your browser's developer tools for more details").should('be.visible');
    });
  
    it('Should submit the form with valid data and delete it', () => {
      cy.contains("Create Ticket").click();  
      cy.get("[formcontrolname='title']").type('Test Issue');
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get("[formcontrolname='description']").type('This is a test issue description.');
      cy.get("[formcontrolname='dateTime']").type('8/3/2024');
      cy.get("[formcontrolname='videoUrl']").type('https://www.youtube.com/watch?v=example');
      cy.contains("Submit").click();
      cy.contains("Delete").click();
      cy.wait(1000);
      // Check for URL validation error
      cy.contains("Item deleted successfully").should('be.visible');
    });
  
    it('Should display past requests', () => {

      //Add requests 
      cy.contains("Create Ticket").click();  
      cy.get("[formcontrolname='title']").type('Test Issue');
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get("[formcontrolname='description']").type('This is a test issue description.');
      cy.get("[formcontrolname='dateTime']").type('8/3/2024');
      cy.get("[formcontrolname='videoUrl']").type('https://www.youtube.com/watch?v=example');
      cy.contains("Submit").click();

      // Navigate to the past requests page
      cy.get('[role="list"]').should('have.length.greaterThan', 0);
  
      // Verify that at least one request item is displayed
      cy.get('[role="list"]').first().within(() => {
        cy.contains('Test Issue').should('be.visible');
      });
  
      cy.contains("Delete").click();
    });
  
    it('Should update a request status to resolved', () => {

      //Add requests 
      cy.contains("Create Ticket").click();  
      cy.get("[formcontrolname='title']").type('Test Issue');
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get("[formcontrolname='description']").type('This is a test issue description.');
      cy.get("[formcontrolname='dateTime']").type('8/3/2024');
      cy.get("[formcontrolname='videoUrl']").type('https://www.youtube.com/watch?v=example');
      cy.contains("Submit").click();

      // Navigate to the past requests page
      cy.get('[role="list"]').first().within(() => {
        cy.contains('Edit').click(); // Click to open the request
      });
  
      // Click to mark as resolved
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get('input[type="checkbox"]').click();
      cy.contains("Submit").click();
  
      // Verify that the status is updated to resolved
      cy.contains('Item edited successfully').should('be.visible');

      cy.contains("Delete").click();
    });

    it('Should display an error for invalid Email', () => {
      cy.contains("Create Ticket").click();  
      cy.get("[formcontrolname='title']").type('Test Issue');
      cy.get("[formcontrolname='applicationArea']").click();
      cy.contains("Dashboard").click();
      cy.get("[formcontrolname='description']").type('This is a test issue description.');
      cy.get("[formcontrolname='dateTime']").type('8/3/2024');
      cy.get("[formcontrolname='videoUrl']").type('https://www.youtube.com/watch?v=example');
      cy.get("[formcontrolname='contactEmail']").type('invalid email')
      cy.contains("Submit").click();
  
      // Check for URL validation error
      cy.contains("Error occurred, check the network tab on your browser's developer tools for more details").should('be.visible');
    });

  });
  