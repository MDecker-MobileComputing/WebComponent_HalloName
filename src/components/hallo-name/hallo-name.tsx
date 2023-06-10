import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hallo-name',
  styleUrl: 'hallo-name.css',
  shadow: true,
})
export class HalloName {

  /** Vorname der zu begrüßenden Person. */
  @Prop() vorname: string = "Max";

  /** Nachname der zu begrüßenden Person. */
  @Prop() nachname: string = "Mustermann"

  /**
   * Ganzer Name der zu begrüßenden Person.
   *
   * @returns Vorname + Nachname mit Leerzeichen dazwischen
   */
  private getVollerName(): string {

    return this.vorname + " " + this.nachname;
  }

  /**
   * Methode definiert UI der Komponente mit JSX
   */
  render() {

    return <div>Hallo {this.getVollerName()}!</div>;
  }

}
