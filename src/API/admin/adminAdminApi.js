import instane from "../instane";

export const adminAdminApi = {
  getAllAdmin: async (values) => {
    try {
      const url = "/admin/admin/list";
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createAdmin: async (values) => {
    try {
      const url = "/admin/admin/create";
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateAdmin: async (values) => {
    try {
      const url = "/admin/admin/update";
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  editProfile: async (values) => {
    try {
      const url = "/admin/admin/edit";
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteAdmin: async (id) => {
    try {
      const url = `/admin/admin/delete/${id}`;
      const res = await instane.post(url);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  restoreAdmin: async (id) => {
    try {
      const url = `/admin/admin/restore/${id}`;
      const res = await instane.post(url);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  trashAdmin: async (values) => {
    try {
      const url = `/admin/admin/trash`;
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getPermissions: async (id) => {
    try {
      const url = `/admin/role/${id}`;
      const res = await instane.post(url);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  updatePermissions: async (id, values) => {
    try {
      const url = `/admin/role/update/${id}`;
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  changePassword: async (values) => {
    try {
      const url = `/admin/admin/change-password`;
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  uploadAvatar: async (values) => {
    try {
      const url = `/admin/admin/avatar`;
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
