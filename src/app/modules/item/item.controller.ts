import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import { ItemServices } from "./item.service";
import sendResponse from "../../../utils/sendResponse";

const createItemFaculty = catchAsync(async (req, res) => {
  const result = await ItemServices.createItemIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Item is created succesfully",
    data: result,
  });
});
export const ItemControllers = {
  createItemFaculty,
};
