import { r as registerInstance, h } from './index-712a2a32.js';

const halloNameCss = ":host{display:block}";

const HalloName = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
HalloName.style = halloNameCss;

export { HalloName as hallo_name };

//# sourceMappingURL=hallo-name.entry.js.map