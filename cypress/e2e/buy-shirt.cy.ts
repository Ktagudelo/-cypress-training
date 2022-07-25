import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingSteptPage,
  ShopingCartPage,
} from "../page/index";

const email = "aperdomobo@gmail.com";
const password = "WorkshopProtractor";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const paymentStepPage = new PaymentStepPage();
const addressStepPage = new AddressStepPage();
const shippingSteptPage = new ShippingSteptPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.goToAddToCart();
    productListPage.goToCheckout();
    shopingCartPage.goToCheckout();
    loginPage.loginUser(email, password);
    addressStepPage.goToCheckout();
    shippingSteptPage.acceptTermsOfService();
    shippingSteptPage.goToCheckout();
    paymentStepPage.goToPaymentStep();
    paymentStepPage.confirmOrder();
    paymentStepPage.getConfirmMessageOrder().should(
        "have.text",
        "Your order on My Store is complete.");
  });
});


