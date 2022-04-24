/// <reference types="cypress" />

describe("Login e registro de usuários alurapic", () => {
  beforeEach(() => {
    cy.visit("http://alura-fotos.herokuapp.com/#/home");
  });

  it("Verifica mensagem validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });
});
