export enum StyleBaseEnum {
  fontSizeDefault = 16,
}

export enum StyleBreakPointEnum {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
  xxxl = 1600,
}

export enum StyleBreakPointDeviceEnum {
  mobile = StyleBreakPointEnum.xs,
  tablet = StyleBreakPointEnum.md,
  desktop = StyleBreakPointEnum.xl,
  small = StyleBreakPointEnum.sm,
  medium = StyleBreakPointEnum.lg,
  large = StyleBreakPointEnum.xl,
}
