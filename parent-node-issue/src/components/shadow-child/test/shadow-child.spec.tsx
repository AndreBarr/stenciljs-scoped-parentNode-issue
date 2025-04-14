import { newSpecPage } from '@stencil/core/testing';
import { ShadowChild } from '../shadow-child';

describe('shadow-child', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShadowChild],
      html: `<shadow-child></shadow-child>`,
    });
    expect(page.root).toEqualHtml(`
      <shadow-child>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shadow-child>
    `);
  });
});
