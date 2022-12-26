interface actionType {
  type: string;
  payload?: any;
}

const cockcipeReducer = (state: any, action: actionType) => {
  switch (action.type) {
    case 'INPUTVALUE':
      console.log(state, action);
      return { ...state, [action.payload.name]: action.payload.value };
  }
};

export default cockcipeReducer;
