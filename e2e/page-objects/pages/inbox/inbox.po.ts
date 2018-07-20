import {By, element} from 'protractor';

export class InboxPage {
    static get compose() {
        return element(By.xpath('//*[@role="button" and (.)="COMPOSE"]'));
    }

    static get recipient() {
        return element(By.css('[name="to"]'));
    }

    static get subject() {
        return element(By.css('[name="subjectbox"]'));
    }

    static get messageBoby() {
        return element(By.xpath('//tr[child::*//span[contains(text(),"To")]]//div[@role="textbox"]'));
    }

    static get attachment() {
        return element(By.css('input[type="file"]'));

    }
    static get refreshButton() {
        return element(By.xpath('//*[@class="TO nZ aiq"]/div/div[2]/span/a'));
    }

    static get pathForAttachment() {
        const path = require('path');

        const fileToUpload = '../../../../sampath.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
        return absolutePath;
    }

    static get sendButton() {
        return element(By.xpath('//*[@role="button" and text()="Send"]'));
    }

}
