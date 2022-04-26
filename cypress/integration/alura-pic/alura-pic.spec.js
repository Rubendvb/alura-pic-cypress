/// <reference types="cypress" />

describe("Login e registro de usuários alurapic", () => {
  beforeEach(() => {
    cy.visit("http://alura-fotos.herokuapp.com/#/home");
  });

  // 1ro Caso de teste
  it("Verifica mensagem validação", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  // 2do Caso de teste
  it("Verifica mensagem de email inválido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=email]").type("ruben ");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  // 3ro Caso de teste
  it("Verifica mensagem de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=password]").type("1234567");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  // 4to Caso de teste
  it("Verifica mensagem de nome de usuário deve ser com letra minúscula", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=userName]").type("Ruben");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  // 5to Caso de teste
  it.only("Fazer login de usuário válido", () => {
    cy.get('input[formcontrolname="userName"]').type("flavio");
    cy.get('input[formcontrolname="password"]').type("123");
    cy.get("button[type='submit']").click();
    cy.contains("a", "(Logout)").should("be.visible");
  });

  // 6to Caso de teste
  it.only("Fazer login de usuário inválido", () => {
    cy.get('input[formcontrolname="userName"]').type("jacqueline");
    cy.get('input[formcontrolname="password"]').type("1234");
    cy.get("button[type='submit']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
