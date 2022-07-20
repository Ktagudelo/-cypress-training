class LoginPage {
  private email: string;
  private password: string;
  private buttonLogin: string;

  constructor() {
    this.email = "#email";
    this.password = "#passwd";
    this.buttonLogin = "#SubmitLogin";
  }

  public userEmailAddress(): void {
    cy.get(this.email).type("aperdomobo@gmail.com");
  }

  public userPassword(): void {
    cy.get(this.password).type("WorkshopProtractor");
  }

  public submitLogin(): void {
    cy.get(this.buttonLogin).click();
  }
}

export {LoginPage};
