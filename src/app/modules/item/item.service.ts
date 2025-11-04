import { TItem } from "./item.interface";
import { Item } from "./item.model";

const createItemIntoDB = async (payload: TItem) => {
  const result = await Item.create(payload);
  return result;
};
const getAllItemFromDB = async () => {
  const result = await Item.find();
  return result;
};
export const ItemServices = {
  createItemIntoDB,
  getAllItemFromDB,
};
