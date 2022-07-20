import {AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage} from "../page/index";
import {ProductsListPage, ShippingSteptPage, ShopingCartPage} from "../page/index";
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
    shopingCartPage.addShoping();
    loginPage.userEmailAddress();
    loginPage.userPassword();
    loginPage.submitLogin();
    addressStepPage.submitAddress();
    shippingSteptPage.submitShipping();
    paymentStepPage.paymentStep();
    paymentStepPage.confirmOrder();
  });
});
