import {by, By, element} from 'protractor';

export class ReceivedMailPage {
    static get receivedLatestMail() {
        return element(by.xpath('(//div[@class = "yW"]/span[@class = "zF" and @name="me"])[1]'));
    }

    static get receivedMailReply() {

        return element(By.xpath('//*[@role="link" and (.)="Reply"]'));
    }

    static get receivedMessage() {
        return element(By.xpath('//div[@data-message-id]//div[@dir="ltr"]')).getText();
    }

    static get receivedSubject() {
        return element(By.xpath('//*[@class="hP"]')).getText();
    }

    static get receivedAttachment() {
        return element(By.xpath('//*[@class="aZo N5jrZb a5r"]')).isPresent();
    }

    static get receivedAttachmentFileName() {
        return element(By.xpath('//*[@class="aV3 zzV0ie"]')).getAttribute('innerHTML');
    }
}
