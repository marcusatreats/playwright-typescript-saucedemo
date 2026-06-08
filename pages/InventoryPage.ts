import { Page, Locator, expect } from '@playwright/test';

export default class InventoryPage {
    private page: Page;
    private cartBadge: Locator;
    private cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart(): Promise<void> {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async addItemToCart(itemId: string): Promise<void> {
        await this.page.locator(`[data-test="add-to-cart-${itemId}"]`).click();
    }

    async verifyCartCount(expectedCount: string): Promise<void> {
        await expect(this.cartBadge).toHaveText(expectedCount);
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }

    async getProductNames(): Promise<string[]> {
        const products = this.page.locator('.inventory_item_name');
        return await products.allTextContents();
    }
}
