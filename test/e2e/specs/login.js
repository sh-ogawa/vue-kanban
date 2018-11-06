module.exports = {
  'ログイン': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .setValue('#email', 'foo@domain.com')
      .setValue('#password', '12345678')
      .waitForElementPresent('form > .form-actions > button', 1000)
      .click('form > .form-actions > button')
      .waitForElementPresent('#app > p', 1000)
      .assert.urlEquals('http://localhost:8080/#/')
      .end()
  }
}
