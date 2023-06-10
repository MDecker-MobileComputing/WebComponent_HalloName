'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-28c75dc7.js');

const halloNameCss = ":host{display:block}";

const HalloName = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("div", null, "Hallo ", index.h("i", null, this.getVollerName()), "!");
  }
};
HalloName.style = halloNameCss;

exports.hallo_name = HalloName;

//# sourceMappingURL=hallo-name.cjs.entry.js.map