import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('p3');
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('p3@gmail.com');
  await page.getByPlaceholder('Ingrese su email').press('Tab');
  await page.getByPlaceholder('Ingrese su contraseña').fill('test12');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Agregar producto' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Suplementos' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Escribe aquí').click();
  await page.getByPlaceholder('Escribe aquí').fill('product');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Escribe aquí').click();
  await page.getByPlaceholder('Escribe aquí').fill('12');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Escribe aquí').click();
  await page.getByRole('button', { name: 'Registrar' }).click();
  
  const errorSpan = await page.waitForSelector('.error');
  const errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo es requerido');

});