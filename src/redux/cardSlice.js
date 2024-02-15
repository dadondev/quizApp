const cardSlice = {
  name: "cardSlice",
  initialState: {
    activeCard: null,
  },
  reducers: {
    setActive: (state, { payload }) => {
      if (payload.length === 6) state.activeCard = payload;
    },
  },
};
export default cardSlice;
