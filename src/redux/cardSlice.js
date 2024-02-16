const cardSlice = {
  name: "cardSlice",
  initialState: {
    activeCard: null,
    sections: [],
  },
  reducers: {
    setActive: (state, { payload }) => {
      if (payload.length === 6) state.activeCard = payload;
    },
    setSections: (state, { payload }) => {
      state.sections = payload;
    },
  },
};
export default cardSlice;
