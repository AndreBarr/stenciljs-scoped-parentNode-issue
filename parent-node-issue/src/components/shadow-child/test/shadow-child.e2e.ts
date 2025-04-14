import { newE2EPage } from '@stencil/core/testing';

describe('shadow-child', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shadow-child></shadow-child>');

    const element = await page.find('shadow-child');
    expect(element).toHaveClass('hydrated');
  });
});
