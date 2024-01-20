import { sortBy } from 'lodash';

export class IconUtils {
  /**
   * The function sorts an object's values based on a given array of names.
   * @param {object} obj - An object containing icons. Each icon has a "type" property which has a
   * "name" property.
   * @param {string[]} names - The `names` parameter is an array of strings that represents the desired
   * order in which the objects should be sorted.
   * @returns an array of sorted values.
   */
  static sortByName(obj: object, names: string[]) {
    const values = Object.values(obj);

    const sortedValues = sortBy(values, (icon) => {
      const name = icon.type.name;
      const index = names.indexOf(name);
      return index !== -1 ? index : names.length;
    });
    return sortedValues;
  }
}
