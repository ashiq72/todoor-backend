import { z } from "zod";

const createItemValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Item must be string" }),
  }),
});

const updateItemValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Item must be string" }),
  }),
});

export const ItemValidation = {
  createItemValidationSchema,
  updateItemValidationSchema,
};
