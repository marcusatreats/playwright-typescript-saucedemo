import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import users from '../testData/users';

test.describe('Cart functionality', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );
        await expect(page).toHaveURL(/inventory/);
    });

    test('add backpack to cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addBackpackToCart();
        await inventoryPage.verifyCartCount('1');
        await inventoryPage.openCart();
        await cartPage.verifyProduct('Sauce Labs Backpack');
    });

    test('remove backpack from cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addBackpackToCart();
        await inventoryPage.openCart();
        await cartPage.removeBackpack();
        await cartPage.verifyProductNotPresent('Sauce Labs Backpack');
        expect(await cartPage.getCartItemCount()).toBe(0);
    });

});

test.describe('Login functionality', () => {

    test('locked out user cannot login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('locked out');
    });

    test('invalid credentials show error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('invalid_user', 'wrong_password');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Username and password do not match');
    });

});
