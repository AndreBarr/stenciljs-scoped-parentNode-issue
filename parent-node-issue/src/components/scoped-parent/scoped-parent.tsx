import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'scoped-parent',
  styleUrl: 'scoped-parent.css',
  scoped: true,
})
export class ScopedParent {
  render() {
    return (
      <Host style={{ backgroundColor: 'red' }}>
        <h2>Scoped Parent</h2>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
