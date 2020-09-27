export const convertToHex = (str) => {
  if (str && str.indexOf("#") === -1) return "#" + str;

  return str;
};

export const convertToNumber = (str) => {
  if (str && str.indexOf("#") !== -1) return str.slice(1);

  return str;
};
