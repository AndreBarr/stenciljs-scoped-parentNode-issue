import { Component, Host, h, Method, Element } from '@stencil/core';

@Component({
  tag: 'shadow-child',
  styleUrl: 'shadow-child.css',
  shadow: true,
})
export class ShadowChild {
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
      <Host style={{ backgroundColor: 'blue' }}>
        <h3>Shadow Child</h3>
        <slot></slot>
      </Host>
    );
  }
}
