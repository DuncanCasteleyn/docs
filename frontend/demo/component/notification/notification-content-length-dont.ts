import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/notification';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { html, LitElement } from 'lit';
import { applyTheme } from 'Frontend/generated/theme';

export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-notification-card slot="middle">
        <div>
          <div>New message from Aria Bailey</div>
          <div style="font-size: var(--lumo-font-size-s); color: var(--lumo-secondary-text-color);">
            Yeah, I know. But could you help me with this. I’m not sure where the bug is in my CSS?
            The checkmark doesn’t get the right color. I’m trying to use the CSS custom properties
            from our design system, but for some reason it’s not working.
          </div>
        </div>
        <vaadin-button theme="tertiary-inline">
          <vaadin-icon icon="lumo:cross"></vaadin-icon>
        </vaadin-button>
      </vaadin-notification-card>
    `;
  }
}
