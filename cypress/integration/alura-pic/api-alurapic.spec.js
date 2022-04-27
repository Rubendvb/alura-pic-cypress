/// <reference types="cypress" />

describe("Buscar fotos e dados", () => {
  it("Buscar fotos do Flavio", () => {
    cy.request({
      method: "GET",
      url: "https://apialurapic.herokuapp.com/flavio/photos",
    }).then((res) => {
      expect(res.status).to.eq(200); // espera que o status da requisição seja 200
      expect(res.body).is.not.empty; // verifica se o body não está vazio
      expect(res.body[0]).to.have.property("description"); // verifica se o body tem a propriedade description
      expect(res.body[0].description).to.be.eq("Farol iluminado"); // verifica se o body tem a propriedade description com o valor Farol iluminado (descrição da foto)
    });
  });

  it("Fazer login do Flavio", () => {
    cy.request({
      method: "POST",
      url: "https://apialurapic.herokuapp.com/user/login",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.eq(200); // espera que o status da requisição seja 200
      expect(res.body).is.not.empty; // verifica se o body não está vazio
      expect(res.body).to.have.property("id"); // verifica se o body tem a propriedade id
      expect(res.body.id).to.be.eq(1); // verifica se o body tem a propriedade id com o valor 1
      expect(res.body).to.have.property("email"); // verifica se o body tem a propriedade email
      expect(res.body.email).to.be.eq("flavio@alurapic.com.br"); // verifica se o body tem a propriedade email com o valor
    });
  });
});
