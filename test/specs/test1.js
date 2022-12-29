describe('Demo Test Suite', async () => {

    it('Verify the Page Title', async () => {

        await browser.url("https://www.devstringx.com/")

        await browser.maximizeWindow()

        const contactBTn = await $("//span[text()='Contact Us']")

        await contactBTn.click()

        //verify the page title

        await expect(browser).toHaveTitleContaining("Contact Us to Developed")

        //print the title on console

        const title = await browser.getTitle()

        console.log(title)

    })

})