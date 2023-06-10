import { h } from '@stencil/core';
export class HalloName {
  constructor() {
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
  static get is() { return "hallo-name"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["hallo-name.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["hallo-name.css"]
    };
  }
  static get properties() {
    return {
      "vorname": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Vorname der zu begr\u00FC\u00DFenden Person."
        },
        "attribute": "vorname",
        "reflect": false,
        "defaultValue": "\"Max\""
      },
      "nachname": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Nachname der zu begr\u00FC\u00DFenden Person."
        },
        "attribute": "nachname",
        "reflect": false,
        "defaultValue": "\"Mustermann\""
      }
    };
  }
}
//# sourceMappingURL=hallo-name.js.map
