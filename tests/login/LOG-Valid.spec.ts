import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('test2@gmail.com');
  await page.getByPlaceholder('Ingrese su contraseña').click();
  await page.getByPlaceholder('Ingrese su contraseña').fill('test12');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  setTimeout(() => {  }, 1000);
  const toaster = await page.waitForSelector('.toast-message');
  const toasterText = await toaster.textContent();
  expect(toasterText).toContain('Inicio de sesión éxitoso');
});
