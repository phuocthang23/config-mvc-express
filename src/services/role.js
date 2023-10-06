import db from "../models";

export const createRoleServices = ({ code }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findOrCreate({
        where: { code },
        defaults: { code },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create role successfully"
            : "Role is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllRoleServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const roles = response.map((role) => role.toJSON());
      resolve({
        success: true,
        data: roles,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(id);
      const response = await db.Role.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      resolve({
        success: true,
        data: response.dataValues,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateRoleServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    const roleCredentials = {
      ...(body.code && { code: body.code }),
    };
    try {
      await db.Role.update(roleCredentials, {
        where: { id },
      });
      resolve({
        success: true,
        message: `Role updated successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.destroy({
        where: { id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Delete role successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
