class PaymentStepPage {
  private payBank: string;
  private order: string;
  private messageOrder: string;

  constructor() {
    this.payBank = ".bankwire";
    this.order = ".cart_navigation";
    this.messageOrder = ".dark";
  }

  public goToPaymentStep(): void {
    cy.get(this.payBank).click();
  }

  public confirmOrder(): void {
    cy.get(this.order).contains("I confirm my order").click();
  }

  public getConfirmMessageOrder() {
    return cy.get("strong").get(this.messageOrder).contains("Your order on My Store is complete.");
  }
}
export {PaymentStepPage};
