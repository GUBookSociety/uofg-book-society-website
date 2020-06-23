import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {

  var fs = require('fs');
  let page: AppPage;

    // abstract writing screen shot to a file
  function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(Buffer.from(data, 'base64'));
    stream.end();
  }


  beforeEach(() => {
    page = new AppPage();
  });

  // var EC = protractor.ExpectedConditions
  // browser.wait(EC.urlContains(browser.baseUrl + "/account/login"), 10000);
  // browser.waitForAngularEnabled(false);
  // browser.wait(EC.urlContains(browser.baseUrl + "/home");
  
  it('should display welcome message', () => {
    page.navigateTo();
    browser.waitForAngular();
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'e2e/screenshots/homepage.png');
    });
    expect(page.getTitleText()).toContain('Glasgow University Book Society');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
