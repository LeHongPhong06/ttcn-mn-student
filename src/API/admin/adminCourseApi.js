import instane from "../instane";

export const adminCourseApi = {
  getAllCourse: async (values) => {
    const url = `/admin/course/list`;
    try {
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createCourse: async (values) => {
    const url = `/admin/course/create`;
    try {
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateCourse: async (values) => {
    const url = `/admin/course/update`;
    try {
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteCourse: async (id) => {
    const url = `/admin/course/delete/${id}`;
    try {
      const res = await instane.post(url);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getDataPieCourse: async (values) => {
    const url = `/admin/course-classified/statistic`;
    try {
      const res = await instane.post(url, values);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
