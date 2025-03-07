import loginPage from '../pages/loginPage'

const login = new (loginPage);


beforeEach(() => {
    login.visit('/');
})

describe('Validates the login page elements exist', () => {
    it('Visits page and validates elements load', () => {
        //This is generally more efficiently tested with monitoring
        login.getEmailField()
            .should('be.visible');
        login.getPasswordField()
            .should('be.visible');
        login.getSignInButton()
            .should('be.visible');
        login.getHelpLink()
            .should('be.visible');
    })
})

describe('Validates the login page authentication', () => {

    it('Tests no input', () => {
        login.getSignInButton().click();
        login.getEmailField()
            .should('have.class', 'is-invalid');
        login.getPasswordField()
            .should('have.class', 'p-invalid');
        login.getFieldErrorText()
            .should('be.visible');
    })
    
    it('Tests an email with invalid format', () => {
        //Any invalid email format works here
        login.getEmailField().type('invalidemail');
        //Password does not need to be valid, just present
        login.getPasswordField().type('anypassword');
        login.getSignInButton().click();
        login.getEmailErrorText()
            .should('be.visible');
    })

    it('Tests an invalid password', () => {
        //The valid credentials are stored locally in cypress.env.json
        login.getEmailField().type(Cypress.env('EMAIL'));
        login.getPasswordField().type('wrongpassword');
        login.getSignInButton().click();
        login.getAuthErrorText()
            .should('be.visible');
    })

    it('Tests a missing password', () => {
        //The valid credentials are stored locally in cypress.env.json
        login.getEmailField().type(Cypress.env('EMAIL'));
        login.getSignInButton().click();
        login.getPasswordField()
            .should('have.class', 'p-invalid');
        login.getFieldErrorText()
            .should('be.visible');
    })

    it('Tests a missing username', () => {
        login.getPasswordField().type('anypassword');
        login.getSignInButton().click();
        login.getEmailField()
            .should('have.class', 'is-invalid');
        login.getFieldErrorText()
            .should('be.visible');
        login.getEmailErrorText()
            .should('be.visible');
    } )

    it('Tests a full valid login', () => {
        //The valid credentials are stored locally in cypress.env.json
        login.getEmailField().type(Cypress.env('EMAIL'));
        login.getPasswordField().type(Cypress.env('PASSWORD'));
        login.getSignInButton().click();

        //This step is expected to fail since there are not valid credentials provided
        login.getAuthErrorText()
            .should('not.be.visible');

        //Would add additional validation of the success page here     
    })
})