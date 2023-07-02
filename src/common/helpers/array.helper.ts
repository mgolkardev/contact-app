export const unique = (array: any[], field: string) => {
  return [...new Map(array.map((item) => [item[field], item])).values()];
};
