enum DesignStyle {
  Cozy = "cozy",
  Japandi = "japandi",
  Modern = "modern",
  Fusion = "fusion",
  NeoClassic = "neoclassic",
}

namespace DesignStyle {
  export function fromString(name: string): DesignStyle {
    if (name === "cozy") {
      return DesignStyle.Cozy;
    } else if (name === "japandi") {
      return DesignStyle.Japandi;
    } else if (name === "neoclassic") {
      return DesignStyle.NeoClassic;
    } else if (name === "modern") {
      return DesignStyle.Modern;
    } else if (name === "fusion") {
      return DesignStyle.Fusion;
    } else {
      return DesignStyle.Cozy;
    }
  }

  export function fromNumber(number: number): DesignStyle {
    return number === 0
      ? DesignStyle.Cozy
      : number === 1
      ? DesignStyle.Japandi
      : number === 2
      ? DesignStyle.Fusion
      : number === 3
      ? DesignStyle.Modern
      : DesignStyle.NeoClassic;
  }
}
