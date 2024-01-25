import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

describe("User can login to GoIT page.", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("Successfully login to the GoIT page", () => {
    loginPage.fillEmail("testowyqa@qa.team");
    loginPage.fillPassword("QA!automation-1");
    loginPage.submitLoginForm();

    cy.wait(5000);

    homePage.openMobileMenu();
    cy.wait(2000);
    homePage.selectMenuItem();
  });
});
