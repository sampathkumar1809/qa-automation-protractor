# Project Assessment:
The provided repository contains an incomplete automated test for email sending functionality via Gmail.

The test is supposed to:
- Login to Gmail
- Compose an email with unique subject, body, and attachment
- Send the email to the same account which was used to login (from and to addresses would be the same)
- Wait for the email to arrive in the Inbox
- Open the received email
- Verify the subject, body and attachment name of the received email

# Notes
- Login account details should be configurable in params.
- Don't include packages and additional auto-generated files like node_modules.
- You may either use the existing login details from config or use any other google account. We recommend using your own account since Gmail might ask for verification if you use the provided account. You may remove your login details before submitting this assessment.

# Tasks:
1. Complete the automated test to include the missing functionality, please refer to the section titled 'Project Assessment' for requirements.
2. There are a few bugs in the existing code that we'd like you to fix, the test case seems to be failing right now. Even though the project might not be in a great structure, please do not spend your valuable time on structure modifications, just focus on fixing bugs.
3. Refactor the code in existing 'Send Email' test case to use test automation best practices and most commonly used patterns.

PLEASE NOTE THAT ALL THE TASKS LISTED ABOVE ARE MANDATORY. We'll be evaluating your submission on the following parameters:
- Code quality and best practices
- Implementation of new test cases
- Bug fixes

# Prerequisites:
- Node.js (You can download latest stable version from here https://nodejs.org/en/)

# Development Environment:
- Download NodeJs latest stable version from here https://nodejs.org/en/
- You may use the IDE of your choice. Here are some links if you need to download one:
    - WebStorm - https://www.jetbrains.com/webstorm/
    - Visual Studio Code - https://code.visualstudio.com/
- On any terminal move to the root folder and execute the following commands:
    - npm install (To install all the packages)
    - npm run e2e (To run the tests)

# How to deliver:
This is how we are going to access and evaluate your submission, so please make sure you go through the following steps before submitting your answer.

1. Make sure that the tests are passing, there are no errors, and any new dependencies are specified in package.json.
2. Zip your project folder and name it 'cross-mail-protractor_<YourNameHere>.zip'.
3. Store your file in a shared location where Crossover team can access and download it for evaluation. Do not forget to paste the shared link in the answer field of this question.