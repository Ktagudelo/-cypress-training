class PaymentStepPage {
  private payBank: string;
  private order: string;
  private messageOrder: string;

  constructor() {
    this.payBank = ".bankwire";
    this.order = ".cart_navigation.clearfix > button";
    this.messageOrder = "#center_column > div > p > strong";
  }

  public goToPaymentStep(): void {
    cy.get(this.payBank).click();
  }

  public confirmOrder(): void {
    cy.get(this.order).click();
  }

  public confirmMessageOrder() {
    return cy.get(this.messageOrder);
  }
}
export {PaymentStepPage};
