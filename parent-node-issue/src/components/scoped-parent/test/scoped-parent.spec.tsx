import { newSpecPage } from '@stencil/core/testing';
import { ScopedParent } from '../scoped-parent';

describe('scoped-parent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScopedParent],
      html: `<scoped-parent></scoped-parent>`,
    });
    expect(page.root).toEqualHtml(`
      <scoped-parent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scoped-parent>
    `);
  });
});
