const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 300000,
    suites: {
        default: './e2e/test-suites/*.e2e-spec.ts',
    },
    capabilities: {
        "browserName": "chrome"
    },
    params: {

		username: "sampathkumar1809",
        password: "Work2win$" ,
        email: "sampathkumar1809@gmail.com" ,
        mailSubject: "Test Mail with Attachment - Subject",
        mailBody: "Test Mail with Attachment - Body"
    },
    directConnect: true,
    baseUrl: 'https://mail.google.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false
            }
        }));
    }
};