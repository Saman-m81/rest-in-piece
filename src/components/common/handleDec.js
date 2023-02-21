export const HandleDescription = (str, num) => {
  return (
    str && str.substring(0, str.substring(0, num).lastIndexOf(" ")) + " ..."
  );
  // return str.split(" ").slice(0, num).join(" ") + " ...";
};
