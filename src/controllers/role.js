import * as services from "../services";

export const createRole = async (req, res) => {
  try {
    const response = await services.createRoleServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllRole = async (req, res) => {
  try {
    const response = await services.getAllRoleServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
