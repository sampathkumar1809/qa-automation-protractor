///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import {LoginPage} from '../page-objects/pages/login/login.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {browser, ExpectedConditions} from 'protractor';
import {InboxPage} from '../page-objects/pages/inbox/inbox.po';
import {ReceivedMailPage} from '../page-objects/pages/mail/receivedMail.po';

describe('Gmail suite', () => {
    let loginPageHelper: LoginPageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
    });

    it('Send email', async () => {
        await loginPageHelper.goToPage();
        await browser.manage().window().maximize();
        await LoginPage.username.sendKeys(browser.params.username);
        await LoginPage.nextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.password), 10000, 'Element not found');
        await browser.wait(ExpectedConditions.elementToBeClickable(LoginPage.password), 10000, 'Element not found');
        await LoginPage.password.sendKeys(browser.params.password);
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.passwordNextButton), 10000, 'Element not found');
        await browser.wait(ExpectedConditions.elementToBeClickable(LoginPage.passwordNextButton), 10000, 'Element not found');
        await LoginPage.passwordNextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(InboxPage.compose), 10000, 'Element not found');

        await InboxPage.compose.click();

        await browser.wait(ExpectedConditions.visibilityOf(InboxPage.recipient), 10000, 'Element not found');
        await InboxPage.recipient.clear();
        await InboxPage.recipient.sendKeys(browser.params.username + '@gmail.com');
        await InboxPage.subject.sendKeys('TestMail with Attachment - Subject');
        await InboxPage.messageBoby.sendKeys('Test Mail with Attachment');
        await InboxPage.attachment.sendKeys(InboxPage.pathForAttachment);
        await browser.sleep(10000);
        await loginPageHelper.click(InboxPage.sendButton);
        await browser.wait(ExpectedConditions.visibilityOf(ReceivedMailPage.receivedLatestMail), 20000, 'Element not found');
        await browser.wait(ExpectedConditions.elementToBeClickable(InboxPage.refreshButton), 20000, 'Element not found');
        await InboxPage.refreshButton.click();
        await browser.sleep(5000);
        await ReceivedMailPage.receivedLatestMail.click();
        await browser.wait(ExpectedConditions.visibilityOf(ReceivedMailPage.receivedMailReply), 15000, 'Element not found');
        await browser.wait(ExpectedConditions.elementToBeClickable(ReceivedMailPage.receivedMailReply), 15000, 'Element not found');
        expect(ReceivedMailPage.receivedMessage).toEqual('Test Mail with Attachment');
        expect(ReceivedMailPage.receivedSubject).toEqual('TestMail with Attachment - Subject');
        expect(ReceivedMailPage.receivedAttachment != null);
        expect(ReceivedMailPage.receivedAttachmentFileName).toEqual('sampath.png');

    });
});
