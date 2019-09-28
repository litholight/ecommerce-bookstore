export const addDiffCategory = (categories, categoryToAdd) => {
  const existingCategory = categories.find(
    category => category === categoryToAdd
  );

  if (existingCategory) {
    return categories;
  }

  return [...categories, { ...categoryToAdd }];
};
