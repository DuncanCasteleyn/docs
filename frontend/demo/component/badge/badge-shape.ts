import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/horizontal-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('badge-shape')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <!-- tag::snippet[] -->
        <span theme="badge pill">Pending</span>
        <span theme="badge success pill">Confirmed</span>
        <span theme="badge error pill">Denied</span>
        <span theme="badge contrast pill">On hold</span>
        <!-- end::snippet[] -->
      </vaadin-horizontal-layout>
    `;
  }
}
