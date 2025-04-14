import { newSpecPage } from '@stencil/core/testing';
import { ScopedChild } from '../scoped-child';

describe('scoped-child', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScopedChild],
      html: `<scoped-child></scoped-child>`,
    });
    expect(page.root).toEqualHtml(`
      <scoped-child>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scoped-child>
    `);
  });
});
