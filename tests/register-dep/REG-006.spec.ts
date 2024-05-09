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
  await page.getByPlaceholder('Ingrese nuevamente su').fill('testto121');
  setTimeout(() => {  }, 1000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  setTimeout(() => {  }, 1000);

  const errorSpan = await page.waitForSelector('.error');
  const errorText = await errorSpan.textContent();
  expect(errorText).toContain('Las contraseñas no coinciden');

  // // Verifica que el mensaje de error sea visible
  // await expect(errorSpan).toBeVisible();

  // const toaster = await page.waitForSelector('.toast-message');
  // const toasterText = await toaster.textContent();
  // expect(toasterText).toContain('Usuario guardado éxitosamente');
  // await expect(page.getByRole('button', { name: 'Iniciar sesión' })).toBeVisible();
});