import { newE2EPage } from '@stencil/core/testing';

describe('scoped-parent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scoped-parent></scoped-parent>');

    const element = await page.find('scoped-parent');
    expect(element).toHaveClass('hydrated');
  });
});
