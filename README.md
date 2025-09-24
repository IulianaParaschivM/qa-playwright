# Dashboard app

A very basic dashboard app with the following functionalities:

    Add User
    Update User
    Delete User
    View Users

# Project setup

## Requirements

- [npm](https://www.npmjs.com/package/npm)

## Install needed packages

In the project directory, you can run:

    npm install
     or
    yarn install

# Run project

The app can be compiled and hot-reloaded for development on your local machine by running in the project directory:

    npm run dev
     or
    yarn run dev

The app will open in your browser. In case it doesn't, open your browser and go to http://localhost:3000 to view it in the browser.

NOTE: The page will reload if you make edits to the app codebase.


# Assignment

============================================================================

IMPORTANT: Please create a new repository containing the automation framework and the tests !!!

============================================================================


The assignment has been devised with manual and automation testers in mind in order to assess your testing knowledge, attention to details and how you architecture the code.

Please carefully read what you need to do and what not to do. The assignment consists of two parts, backend automation and frontend automation.

## Frontend and Backend tasks

- [ ] Perform some Exploratory Testing sessions against the application to familiarize with it and report any bugs or mismatching behavior between the app and its specifications. You don't need to report every issue you find, and neither browser nor mobile compatibility issues. Please only report the ones you find most important, but at most 5 issues;
- [ ] Update the README.md file and explain how the tests can be ran locally;

## Frontend only tasks

- [ ] Cover 2 [requirements](docs/requirements.md) from the specifications with **End-to-End tests**. Choose the ones you find most important. Pick a testing framework you feel most comfortable with;

## Backend only tasks

- [ ] Cover 2 [requirements](docs/requirements.md) from the specifications with **API tests**. Choose the ones you find most important. Pick a testing framework you feel most comfortable with;



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

# Playwright Documentation

https://playwright.dev/docs/next/test-cli#run-tests


# Running Tests Locally

# Run all tests
npx playwright test

# Run single test
npx playwright test -g "create new user"