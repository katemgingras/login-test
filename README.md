# Testing Login
## Setup Notes
* After installation, add valid login credentials to cypress.env.json
* Add cypress.env.json to the .gitignore file so the true credentials are not committed
## Test Strategy
### In This Suite
The focus in this suite is interacting directly with the UI to produce visible error states. A page object model was used to allow for easier reference and maintenance of common UI components in future testing.
#### Included Scenarios
* Validate major page elements load on the base page
* Test invalid input scenarios for visible UI errors (no username or password; invalid username format; invalid password; missing username; missing password)
* Test valid input scenario for successful login and no errors 

#### Future Scenarios
* More complete testing of successful login
* Testing of UI limitations on input that could produce visible errors (e.g. character limits)
* Testing of password reset functionality

### Additional Testing
* Complete input validity testing (done at the API or unit level, e.g. testing more thoroughly for valid email formatting)
* Accessibility assessment on keyboard navigation and screenreader operability
* Testing on multiple devices and screen sizes
* Testing for security measures (e.g. handling repeated incorrect passwords/rate-limiting, bypassing login screen with direct requests)