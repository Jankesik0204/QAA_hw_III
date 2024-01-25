import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

describe("User can login to GoIT page.", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("Successfully login to the GoIT page", () => {
    loginPage.fillEmail("user888@gmail.com");
    loginPage.fillPassword("1234567890");
    loginPage.submitLoginForm();

    cy.wait(5000);

    homePage.openMobileMenu();
    cy.wait(2000);
    homePage.selectMenuItem();
  });
});
