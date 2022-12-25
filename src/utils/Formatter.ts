abstract class Formatter {
  public static formatCurrency(num: number, maximumFractionDigits?: number) {
    return Intl.NumberFormat("uk-UA", {
      maximumFractionDigits: maximumFractionDigits ?? 2,
    }).format(num);
  }
}

export { Formatter };
