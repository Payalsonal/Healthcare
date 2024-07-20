export const formatDate = (date, config) => {
  const defualtOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defualtOptions;

  return new Date(date).toLocaleDateString("en-IN", options);
};
