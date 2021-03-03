import { config } from "../Domain/config";

const { RESULTS_PER_PAGE } = config;

export const generatePosition = (pageNumber, idx) => (pageNumber - 1) * RESULTS_PER_PAGE + idx;
