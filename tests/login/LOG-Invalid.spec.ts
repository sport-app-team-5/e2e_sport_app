import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('tes@gmail.com');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su contraseña').click();
  await page.getByPlaceholder('Ingrese su contraseña').fill('1234556');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').dblclick();
  await page.getByPlaceholder('Ingrese su email').fill('');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('test2@gmail.com');
  await page.getByPlaceholder('Ingrese su contraseña').click();
  await page.getByPlaceholder('Ingrese su contraseña').fill('123455643');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  setTimeout(() => {  }, 1000);
  const toaster = await page.waitForSelector('.toast-message');
  const toasterText = await toaster.textContent();
  expect(toasterText).toContain('Usuario o contraseña incorrecto');
});