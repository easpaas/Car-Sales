export const addFeature = () => {
  console.log("function running");
  return { type: "ADD_FEATURE" };
};

export const removeFeature = () => {
  return { type: "REMOVE_FEATURE" };
};
