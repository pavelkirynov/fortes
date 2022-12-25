enum DesignStyle {
  Cozy = "cozy",
  Japandi = "japandi",
  Modern = "modern",
  Fusion = "fusion",
  NeoClassic = "neoclassic",
}

namespace DesignStyle {
  export function name(style: DesignStyle): string {
    return DesignStyle[style];
  }
}
