import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('s1@gmail.com');
  await page.getByPlaceholder('Ingrese su contraseña').click();
  await page.getByPlaceholder('Ingrese su contraseña').fill('test12');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Agregar información' }).click();
  await page.getByRole('button', { name: 'Vegano' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.locator('span').nth(3).click();
  await page.getByText('Lactose').click();
  await page.locator('.dropdown-multiselect__caret').click();
  await page.getByRole('button', { name: 'Registrar' }).click();
  setTimeout(() => {  }, 1000);
  const toaster = await page.waitForSelector('.toast-message');
  const toasterText = await toaster.textContent();
  expect(toasterText).toContain('éxitosamente');
});