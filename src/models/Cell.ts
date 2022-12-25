import { Formatter } from "../utils/Formatter";

class Cell {
  public readonly address: string;
  private readonly _value: string;

  constructor(address: string, value: string) {
    this.address = address;
    this._value = value;
  }

  hasValue(): boolean {
    return this._value !== null && this._value.length > 0;
  }

  public get value(): string {
    return this._value;
  }

  public get numeric(): number {
    return parseFloat(this._value);
  }

  public formattedNumerical(): string {
    return Formatter.formatCurrency(parseFloat(this.value));
  }
}

export { Cell };
