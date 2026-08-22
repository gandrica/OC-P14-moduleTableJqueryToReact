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

export const sortList = (list, sortConfig) => {
  if (!sortConfig?.key) {
    return list;
  }

  return [...list].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
};

export const sliceList = (list, currentPage, entriesPerPage) => {
  if (!Array.isArray(list)) {
    return [];
  }
  const startIndex = Math.max(0, (currentPage - 1) * entriesPerPage);
  const endIndex = startIndex + entriesPerPage;
  console.log(startIndex, endIndex);

  return list.slice(startIndex, endIndex);
};
