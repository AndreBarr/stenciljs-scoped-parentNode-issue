import { newSpecPage } from '@stencil/core/testing';
import { ShadowParent } from '../shadow-parent';

describe('shadow-parent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShadowParent],
      html: `<shadow-parent></shadow-parent>`,
    });
    expect(page.root).toEqualHtml(`
      <shadow-parent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shadow-parent>
    `);
  });
});
