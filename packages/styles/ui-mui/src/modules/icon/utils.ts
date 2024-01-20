import { sortBy } from 'lodash';

export class IconUtils {
  /**
   * The function `sortByName` takes an object and an array of names, sorts the values of the object
   * based on the index of their names in the array, and returns an array of objects with the sorted
   * values and their corresponding names.
   * @param {object} obj - An object containing icons as its values. Each icon has a "type" property
   * which has a "name" property representing the name of the icon component.
   * @param {string[]} names - An array of strings representing the desired order of names for sorting.
   * @returns an array of objects with two properties: "component" and "name".
   */
  static sortByName(obj: object, names: string[]) {
    const entries = Object.entries(obj);

    const sortedEntries = sortBy(entries, ([key]) => {
      const currentIndex = names.indexOf(key);
      return currentIndex !== -1 ? currentIndex : names.length;
    });

    const resultArray = sortedEntries.map(([key, value], index) => ({
      component: value,
      name: key || 'Name not defined'
    }));

    return resultArray;
  }
}
