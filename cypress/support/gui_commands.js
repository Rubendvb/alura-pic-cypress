Cypress.Commands.add("login", (nome, senha) => {
  cy.get('input[formcontrolname="userName"]').type(nome);
  cy.get('input[formcontrolname="password"]').type(senha);
  cy.get("button[type='submit']").click();
});

Cypress.Commands.add("registro", (email, nome, usuario, senha) => {
  cy.contains("a", "Register now").click();
  cy.contains("button", "Register").click();
  cy.get('[formcontrolname="email"]').type(email);
  cy.get('[formcontrolname="fullName"]').type(nome);
  cy.get('[formcontrolname="userName"]').type(usuario);
  cy.get('[formcontrolname="password"]').type(senha);
  cy.contains("button", "Register").click();
});
