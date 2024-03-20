export class ScrollingUtils {
  static session = (queryStringElement: string) => {
    const element = document.querySelector(queryStringElement);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 50, left: 0, behavior: 'smooth' });
    }
  };
}
