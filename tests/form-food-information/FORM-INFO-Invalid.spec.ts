import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('s1@gmail.com');
  await page.getByPlaceholder('Ingrese su email').press('Tab');
  await page.getByPlaceholder('Ingrese su contraseña').fill('test12');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Agregar información' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Vegetariano' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Registrar' }).click();
  setTimeout(() => {  }, 1000);

  const errorSpan = await page.waitForSelector('.error');
  const errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo es requerido');
});