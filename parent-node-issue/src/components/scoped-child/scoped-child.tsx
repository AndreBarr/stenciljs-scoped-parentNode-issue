import { Component, Host, h, Element, Method } from '@stencil/core';

@Component({
  tag: 'scoped-child',
  styleUrl: 'scoped-child.css',
  scoped: true,
})
export class ScopedChild {
  @Element() el!: HTMLElement;

  @Method()
  async getParentNode() {
    return this.el.parentNode;
  }

  @Method()
  async getParentElement() {
    return this.el.parentElement;
  }

  render() {
    return (
      <Host style={{ backgroundColor: 'green' }}>
        <h3>Scoped Child</h3>
        <slot></slot>
      </Host>
    );
  }
}
