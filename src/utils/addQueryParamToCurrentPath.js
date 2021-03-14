export const addQueryParamToCurrentPath = (location, name, value) => {
  const queryParams = new URLSearchParams(location.search);

  queryParams.set(name, value);

  return { ...location, search: "?" + queryParams.toString() };
};
