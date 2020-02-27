const initialState = {
  details: {}
};

function rootReducer(state = initialState, action) {
  console.log({ action });
  // debugger;
  switch (action.type) {
    case "aboutCompany":
      return (state = { ...state.aboutCompany, ...action.aboutCompany });

    default:
      return state;
  }
}

export default rootReducer;
