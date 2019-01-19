import { browser, by, element } from 'protractor';

export class NamesPage {
    navigateTo() {
        return browser.get('/');
    }

    getSearchBox() {
        return element(by.xpath('/html/body/app-root/app-names/div/input'));
    }

    getNamesList() {
        return element.all(by.css('.names-container__list li'));
    }
}
