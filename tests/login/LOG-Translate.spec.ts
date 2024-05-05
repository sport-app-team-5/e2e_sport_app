import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByRole('button', { name: 'Español' }).click();
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  setTimeout(() => {  }, 1000);

  let errorSpan = await page.waitForSelector('.error');
  let errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo es requerido');
  await page.getByRole('button', { name: 'Portugués' }).click();
  await page.getByRole('button', { name: 'Iniciar sessão' }).click();
  setTimeout(() => {  }, 1000);

  errorSpan = await page.waitForSelector('.error');
  errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo é obrigatório');
});