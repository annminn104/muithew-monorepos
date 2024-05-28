export class ScrollingUtils {
  static session = (queryStringElement: string, rect: number) => {
    const element = document.querySelector(`#${queryStringElement}`);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: element.getBoundingClientRect()?.top + window.scrollY - rect, left: 0, behavior: 'smooth' });
    }
  };
}
