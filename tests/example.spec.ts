import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) - Azul - Distribuidor autorizado' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});