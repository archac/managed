import { NamesPage } from './names.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: NamesPage;

  beforeEach(() => {
    page = new NamesPage();
  });

  // enter some data into the textbox and then check that the names list
  // has data, accounting for the debounce time
  it('should search and return names', () => {
    page.navigateTo();
    page.getSearchBox().sendKeys('');
    // debounce time is 500ms, 1000ms for safety
    browser.sleep(1000);
    expect(page.getNamesList().count()).toBeGreaterThan(0);
  });
});
