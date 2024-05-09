import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByRole('button', { name: 'Deportista' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Ingrese su email').click();
  await page.getByPlaceholder('Ingrese su email').fill('testd6@gmail.com');
  await page.getByPlaceholder('Ingrese su contraseña').click();
  await page.getByPlaceholder('Ingrese su contraseña').fill('testto12');
  await page.getByPlaceholder('Ingrese nuevamente su').click();
  await page.getByPlaceholder('Ingrese nuevamente su').fill('testto12');
  setTimeout(() => {  }, 1000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Ingrese su nombre').click();
  await page.getByPlaceholder('Ingrese su nombre').fill('Test1');
  await page.getByPlaceholder('Ingrese su apellido').click();
  await page.getByPlaceholder('Ingrese su apellido').fill('Test2');
  await page.getByRole('combobox').selectOption('CC');
  await page.getByPlaceholder('Ingrese su número de').click();

  await page.getByPlaceholder('Ingrese su número de').fill('0611111');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Registrar' }).click();
  await page.locator('div').filter({ hasText: 'País de nacimientoSelecciona' }).nth(1).click();

  await page.locator('select[name="residence_country_id"]').selectOption('2');
  await page.locator('select[name="residence_city_id"]').selectOption('2');
  await page.getByRole('button', { name: 'Registrar' }).click();
  setTimeout(() => {  }, 1000);

  const errorSpan = await page.waitForSelector('.error');
  const errorText = await errorSpan.textContent();
  expect(errorText).toContain('Este campo es requerido');

});