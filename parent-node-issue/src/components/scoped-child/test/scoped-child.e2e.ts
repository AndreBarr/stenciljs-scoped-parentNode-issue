import { newE2EPage } from '@stencil/core/testing';

describe('scoped-child', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scoped-child></scoped-child>');

    const element = await page.find('scoped-child');
    expect(element).toHaveClass('hydrated');
  });
});
