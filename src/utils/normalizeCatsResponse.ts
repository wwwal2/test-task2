import { Cat } from "../models/Cat";

export const normalizeCatsResponse = (data: Cat[]): Cat[] => {
    return data.filter(singleCat => singleCat?.name && singleCat?.image && singleCat?.description)
};
