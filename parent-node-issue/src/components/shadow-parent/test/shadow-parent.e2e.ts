import { newE2EPage } from '@stencil/core/testing';

describe('shadow-parent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shadow-parent></shadow-parent>');

    const element = await page.find('shadow-parent');
    expect(element).toHaveClass('hydrated');
  });
});
