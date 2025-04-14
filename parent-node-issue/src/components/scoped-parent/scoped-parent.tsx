import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'scoped-parent',
  styleUrl: 'scoped-parent.css',
  scoped: true,
})
export class ScopedParent {
  getScopedChild() {
    return (
      <span>
        <scoped-child></scoped-child>
      </span>
    );
  }

  render() {
    return (
      <Host style={{ backgroundColor: 'red' }}>
        <h2>Scoped Parent</h2>
        {this.getScopedChild()}
        <slot></slot>
      </Host>
    );
  }
}
