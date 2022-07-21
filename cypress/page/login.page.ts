class LoginPage {
  private email: string;
  private password: string;
  private signIn: string;

  constructor() {
    this.email = "#email";
    this.password = "#passwd";
    this.signIn = "#SubmitLogin";
  }

  public loginUser(email: string, password: string): void {
    cy.get(this.email).type(email);
    cy.get(this.password).type(password);
    cy.get(this.signIn).click();
  }
}

export {LoginPage};
