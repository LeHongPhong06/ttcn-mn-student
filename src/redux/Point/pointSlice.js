const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  pointList: [],
  studentId: null,
  classId: null,
  termId: null,
  total: 0,
  pageCurrent: 1,
  pageSize: 10,
  filter: {},
  sort: {
    sortColumn: null,
    sortType: null,
  },
};

const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    setStudentId: (state, action) => {
      state.studentId = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setDataPointList: (state, action) => {
      state.pointList = action.payload;
    },
    addPoint: (state, action) => {
      state.pointList.push(action.payload);
    },
    updatePoint: (state, action) => {
      state.pointList.some((item, index) => {
        if (item.id === action.payload.id) {
          state.pointList[index] = action.payload;
          return true;
        }
        return false;
      });
    },
    deletePoint: (state, action) => {
      const studentIndex = state.pointList.findIndex((item) => item.id === action.payload.id);
      if (studentIndex !== -1) {
        state.pointList.splice(studentIndex, 1);
      }
    },
    setClassId: (state, action) => {
      state.classId = action.payload;
    },
    setTermId: (state, action) => {
      state.termId = action.payload;
    },
    setSortColumn: (state, action) => {
      state.sort.sortColumn = action.payload;
    },
    setSortType: (state, action) => {
      state.sort.sortType = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setPageCurrent: (state, action) => {
      state.pageCurrent = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const {
  addPoint,
  updatePoint,
  deletePoint,
  setSortColumn,
  setSortType,
  setClassId,
  setTermId,
  setTotal,
  setPageCurrent,
  setPageSize,
  setDataPointList,
  setStudentId,
  setFilter,
} = pointSlice.actions;
const pointReducer = pointSlice.reducer;
export default pointReducer;
