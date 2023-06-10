import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const halloNameCss = ":host{display:block}";

const HalloName$1 = /*@__PURE__*/ proxyCustomElement(class HalloName extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.vorname = "Max";
    this.nachname = "Mustermann";
  }
  /**
   * Ganzer Name der zu begrüßenden Person.
   *
   * @returns Vorname + Nachname mit Leerzeichen dazwischen
   */
  getVollerName() {
    return this.vorname + " " + this.nachname;
  }
  /**
   * Methode definiert UI der Komponente mit JSX
   */
  render() {
    return h("div", null, "Hallo ", h("i", null, this.getVollerName()), "!");
  }
  static get style() { return halloNameCss; }
}, [1, "hallo-name", {
    "vorname": [1],
    "nachname": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["hallo-name"];
  components.forEach(tagName => { switch (tagName) {
    case "hallo-name":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HalloName$1);
      }
      break;
  } });
}

const HalloName = HalloName$1;
const defineCustomElement = defineCustomElement$1;

export { HalloName, defineCustomElement };

//# sourceMappingURL=hallo-name.js.map