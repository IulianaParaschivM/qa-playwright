# qa-playwright

# Automation Framework for Dashboard app 

# Bugs reported from Exploratory testing 
    Requirement Area                  Action                                  Expected result                                    Actual result                            
1. User Creation -Add users           Add user without data                   Name, Username and Email fields are required       The user can be added without any data
2. User Creation -Add users           Add duplicated user                     The duplicated user is not created                 The user can be duplicated
3. User Profile                       Remove user from the profile page       No profile page                                    Profile page is missing from the menu
4. List Users                         Edit user data                          Email cannot be edited                             The email address can be edited
5. List users                         Filter users by name, username,         The user list can be filtered only by Name,        The user list have filter on 'Actions' column
                                      email or phone                          Username, Email or Phone



# This framework is playwright based

# Installation
npm install
or
yarn install

# Install playwright browsers
npx playwright install


# Running Tests Locally

# Run all tests
npx playwright test

# Run specific test
npx playwright test create new user/end-to-end.spec.ts
