const puppeteer = require("puppeteer");
let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  // headless :false will make sure we see the graphical user interface
  page = await browser.newPage();
  await page.goto("localhost:3000");
});
afterEach(async () => {
  await browser.close();
});
test(" header has the correct text", async () => {
  const text = await page.$eval("a.brand-logo", (el) => el.innerHTML);
  // Okay, so hopefully that gives you a little bit better idea
  // of what's going on behind the scenes
  // when we make use of puppeteer.
  // The real idea here is that all the code that we run
  // is being serialized into text, sent over to Chromium,
  // executed, the result gets serialized back in the text,
  // and then sent back over to our NodeJS runtime.
  expect(text).toEqual("Blogster");
});
test("clicking login starts the oauth flow", async () => {
  await page.click(".right a");
  // https://pptr.dev/api/puppeteer.page.click
  const url = await page.url();
  // Now we never quite know what list
  // of emails are going to appear on the screen here
  // and we also don't necessarily know
  // that this thing is always going to say
  // choose an account or anything like that,
  // but there is one element
  // of this page that I think will always be consistent
  // and that is the URL.
  // Not the whole URL,
  // so if you look at the whole URL
  // you'll notice that there's a couple
  // of IDs and whatnot inside of it.
  // But at the very start, you'll notice
  // that the domain here is accounts.google.com.
  // So I think that one way that we could assert
  // that we properly have been kicked
  // into our Oauth flow is by looking
  // at the URL and writing an assertion that says that,
  // yep, accounts.google.com is present inside the URL.
  // We're gonna take this approach so
  // that we don't ever have to worry
  // about Google changing the text
  // or anything like that on their Oauth flow
  // 'cause if they ever change the text here
  // that would suddenly break our test suite,
  // which we definitely would not want to have happen.

  // https://pptr.dev/api/puppeteer.frame.url
  expect(url).toMatch(/accounts\.google\.com/);
  // https://jestjs.io/docs/expect#tomatchregexp--string
});
test("when signed in shows logout button", async () => {
  const id = "664f84ac7a923449a80e4ec2";

  await page.setCookie({ name: "session", value: sessionString });
  await page.setCookie({ name: "session.sig", value: sig });
  await page.goto("localhost:3000");
  await page.waitFor('a[href="/auth/logout"]');
  const text = await page.$eval('a[href="/auth/logout"]', (el) => el.innerHTML);
  expect(text).toEqual("Logout");
});
