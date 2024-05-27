## Unit Testing

-

## Integration Testing

-

## Testing flow

1. Start react and express apps
2. Run 'npm run test'
3. Start jest test suite
4. Boot up a 'headless' version of chromium
5. programatically instruct chromium to visit 'localhost:3000'
6. programatically instruct chromium to click elements on the screen
7. make assertion about content on virtual screen

### Issues in test

1. Need to somehow launch chromium programatically and interact with in from a test suite
2. How do we make assertions in jest about stuff thats happening in a chrome window
3. How do we 'simiulate' logging in as a user ? were going through Google OAuth

### How puppeteer works

Puppeteer -->(Starts up chromium)-->Browser-->(represents an open browser window)-->Page-->(represents one individual tab)

### Flow overall

1. Launch chromium
2. Navigate to app
3. Click on stuff on screen
4. Use a DOM selector to retrieve the content of an element
5. Write assertion to make sure content is correct
6. repeat point 1

## Issues while

## OAuth flow of our app

- we will simulate two steps
- server sets cookie on users browser that identifies them
- all future requests include cookie data that indentifies this user
