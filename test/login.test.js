const { remote } = require("webdriverio");

const capabilities = require("../capabilities/android");

describe("API Demo App", () => {

    let driver;

    before(async () => {

        driver = await remote({

            hostname: "127.0.0.1",

            port: 4723,

            path: "/",

            capabilities

        });

    });

    after(async () => {

        if (driver) {
            await driver.deleteSession();
        }

    });

    it("Open Accessibility Screen", async () => {

        const accessibility = await driver.$(
            '//android.widget.TextView[@content-desc="Accessibility"]'
        );

        await accessibility.click();

        await driver.pause(3000);

    });

});