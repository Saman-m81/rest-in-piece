export const HandleDescription = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return (
    str && str.substring(0, str.substring(0, num).lastIndexOf(" ")) + " ..."
  );
  // return str.split(" ").slice(0, num).join(" ") + " ...";
};
