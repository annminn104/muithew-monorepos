export class AnimateUtils {
  static whileInViewport = () => {
    return {
      viewport: { once: false, amount: 0.8 }
    };
  };
  static fadeIn = (duration = 0.5, delay = 0) => {
    return {
      ...this.whileInViewport,
      initial: { opacity: 0, scale: 0.5 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration, delay }
    };
  };

  static fadeDirection = (direction = 'left', duration = 0.5, xDirection = 100, delay = 0) => {
    return {
      ...this.whileInViewport,
      initial: { opacity: 0, x: direction === 'left' ? -xDirection : xDirection },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration, delay }
    };
  };
}
