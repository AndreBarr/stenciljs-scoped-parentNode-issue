import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'shadow-parent',
  styleUrl: 'shadow-parent.css',
  shadow: true,
})
export class ShadowParent {
  render() {
    return (
      <Host style={{ backgroundColor: 'teal' }}>
        <h2>Shadow Parent</h2>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
