export const isNumeric = (text: string | number | undefined | null) => {
  if (!text) return false;

  if (typeof text != "string") {
    text = text?.toString();
  }
  return !isNaN(parseInt(text));
};
