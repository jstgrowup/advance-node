const Page = require("./helpers/page");
let page;
beforeEach(async () => {
  page = await Page.build();
  await page.goto("localhost:3000");
});
afterEach(async () => {
  await page.close();
});
test("When logged in can see blog create form", async () => {
  await page.login();
  await page.click("a.btn-floating");
  const label = await page.getContentsOf("form label");
  expect(label).toEqual("Blog Title");
});
describe("And using valid inputs", async () => {
  // beforeEach(async () => {
  //   await page.type(".title input", "My Title");
  //   await page.type(".content input", "My content");
  //   await page.click("form button");
  // });
  // test("submiting takes user to review screen", async () => {
  //   const text = await page.getContentsOf("h5");
  //   expect(text).toEqual("Please confirm your entries");
  // });
  // test("Submitting then saving adds blog to index page", async () => {
  //   await page.click("button.green");
  //   await page.waitFor(".card");
  //   const title = await page.getContentsOf(".card-title");
  //   const content = await page.getContentsOf("p");
  //   expect(title).toEqual("My Title");
  //   expect(content).toEqual('"My content');
  // });
});
describe("when logged in", async () => {
  beforeEach(async () => {
    await page.login();
    await page.click("a.btn-floating");
  });
  test("can see blog create form", async () => {
    const label = await page.getContentsOf("form label");
    expect(label).toEqual("Blog Title");
  });
  describe("And using invalid inputs", async () => {
    beforeEach(async () => {
      await page.click("form button");
    });
    test("the form shows and error mesage", async () => {
      const titleError = await page.getContentsOf(".title .red-text");
      const contentError = await page.getContentsOf(".content .red-text");
      expect(titleError).toEqual("You must provide a value");
      expect(contentError).toEqual("You must provide a value");
    });
  });
});
