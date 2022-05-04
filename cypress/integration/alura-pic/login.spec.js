/// <reference types="cypress" />

describe("Login de usuários alurapic", () => {
  beforeEach(() => {
    cy.visit("http://alura-fotos.herokuapp.com/#/home");
  });

  it("Fazer login de usuário válido", () => {
    cy.login(Cypress.env("userName"), Cypress.env("password"));
    cy.contains("a", "(Logout)").should("be.visible");
  });

  // 6to Caso de teste
  it("Fazer login de usuário inválido", () => {
    cy.login("jaqueline", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
