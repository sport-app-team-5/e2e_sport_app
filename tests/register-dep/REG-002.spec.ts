import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByRole('button', { name: 'Deportista' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('testd6@gmail.com');
  setTimeout(() => {  }, 1000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  setTimeout(() => {  }, 1000);

  const errorSpan = await page.waitForSelector('.error');
  const errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo es requerido');
});