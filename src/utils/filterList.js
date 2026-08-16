export const filterList = (list, searchTerm) => {
  if (!searchTerm) {
    return list;
  }
  return list.filter((item) => {
    const values = Object.values(item).map((value) =>
      value.toString().toLowerCase(),
    );
    return values.some((value) => value.includes(searchTerm.toLowerCase()));
  });
};
