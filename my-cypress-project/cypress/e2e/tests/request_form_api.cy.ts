/// <reference types="cypress" />

describe('API Tests for RequestForm', () => {
  
    let requestId;
  
    // Test POST request to create a new request form
    it('Should create a new request form (POST)', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:5200/RequestForm',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: {
          "title": "string",
          "applicationArea": 0,
          "description": "string",
          "dateTime": "2024-08-05T17:50:43.607Z",
          "videoUrl": "://player.vimeo.com/3758246592209516",
          "resolved": true,
          "contactEmail": "\"\\mr\\s\\iULC\\7\\oj\\g><\\7\\pJ\\o(\\h\\m\\c\\o/eQ&=B\\e\\c\\w\\i\\e\\s96du\\iD\\k\\c\\l@\\t8_\\p`>\\i\\l\\0@\\0\\i2\\7\\q(\\v\\x\\i\\p+\\mlc\\7\\v\\u\\jCtf\\p2Om.\\jb\\wv@e\\oY\\7\\k4q\"@[172.111.156.1]",
          "tags": ["string"]
        }
      }).then((response) => {
        expect(response.status).to.eq(200); // This is a bug this should be 201 as POST is always 201 Created
        requestId = response.body.id; // Assuming the response body returns an id for the created resource
      });
    });
  
    // Test GET request to retrieve all request forms
    it('Should retrieve all request forms (GET)', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:5200/RequestForm',
        headers: {
          'accept': 'text/plain'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    // Test GET request to retrieve a specific request form by ID
    it('Should retrieve a specific request form by ID (GET)', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:5200/RequestForm/${requestId}`,
        headers: {
          'accept': 'text/plain'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', requestId);
      });
    });
  
    // Test PUT request to update the specific request form by ID
    it('Should update a specific request form by ID (PUT)', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:5200/RequestForm/${requestId}`,
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: {
          "title": "string",
          "applicationArea": 0,
          "description": "string",
          "dateTime": "2024-08-05T17:55:34.845Z",
          "videoUrl": "https://youtube.com/watch?v=",
          "resolved": true,
          "contactEmail": "\"\\g$*fW\\c9m\\s*N\\w^\\o/\\wi4\\q\\p;\\i\\k\\0\\j\\u\\qx\\x\\f1)\\o\\o\\pG_v\\h;),9KlQ\\q4\\t\\u\\k\\x\\tE0\\w\\b&;F**v\\h\\o\\k\\t#\\cE#T;\"@[184.96.102.y4u0or02bhp4c7euhrnk2qpuh6f0-dty99qh7esv387ywseby:\\h\\b\\w\\g\\j\\c\\cT\\n\\h\\l\\sjY\\o\\sE\\k\\e\\rr]d]\\uu\\k\\uf\\k\\q\\p\\l\\t\\c\\q[eIt\\f\\j\\7\\l>F\\f\\r\\m%\\k\\v\\nB\\ho7\\jr\\t\\gp\\f\\xA\\em>\\7Q\\jP\\c\\j\\r\\c,Vt\\7N\\\\wd\\i\\l\\l\\j)M\\nwg]",
          "tags": ["string"]
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', requestId);
      });
    });
  
    // Test DELETE request to delete the specific request form by ID
    it('Should delete a specific request form by ID (DELETE)', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:5200/RequestForm/${requestId}`,
        headers: {
          'accept': '*/*'
        }
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  
  });
  