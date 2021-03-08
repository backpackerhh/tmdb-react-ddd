import { useLocation } from "react-router-dom";

export const useQuery = (param, defaultValue = null) => {
  const query = new URLSearchParams(useLocation().search);

  return query.get(param) || defaultValue;
};
