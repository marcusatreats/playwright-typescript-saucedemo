import { Page, Locator, expect } from '@playwright/test';

export default class CartPage {
    private page: Page;
    private cartItems: Locator;
    private checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async verifyProduct(productName: string): Promise<void> {
        await expect(this.page.getByText(productName)).toBeVisible();
    }

    async verifyProductNotPresent(productName: string): Promise<void> {
        await expect(this.page.getByText(productName)).not.toBeVisible();
    }

    async removeBackpack(): Promise<void> {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}
