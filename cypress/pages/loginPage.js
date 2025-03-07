class loginPage {

    visit() {
        cy.visit('/')
    }

    getEmailField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('[data-pc-name="pcinputtext"]')
    }

    getSignInButton() {
        return cy.get('.login-button')
    }

    getHelpLink() {
        return cy.contains('Need help signing in or forgot password?')
    }

    getFieldErrorText() {
        return cy.contains('Please fill out all fields')
    }

    getEmailErrorText() {
        return cy.contains('Please login using your E-mail address')
    }

    getAuthErrorText() {
        return cy.contains('Authentication Failed')
    }
}

export default loginPage;