const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test('Login incorrecto muestra mensaje de error', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('locked_user', 'clave_incorrecta');

    const errorText = await loginPage.getErrorMessage();

    await expect(errorText).toContain('Epic sadface');

});