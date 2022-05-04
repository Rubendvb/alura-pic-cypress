/// <reference types="cypress" />

describe("Cadastro de usuários alurapic", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verifica mensagem de email inválido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=email]").type("ruben");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
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

  it("Verifica mensagem de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=password]").type("1234567");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("Verifica mensagem de nome de usuário deve ser com letra minúscula", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=userName]").type("Ruben");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  const usuarios = require("../../fixtures/usuarios.json");

  usuarios.forEach((usuario) => {
    it.only(`Registro de novo usuário ${usuario.userName}`, () => {
      cy.registro(
        usuario.email,
        usuario.name,
        usuario.userName,
        usuario.password
      );
    });
  });
});
