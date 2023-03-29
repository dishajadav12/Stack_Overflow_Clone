const initialState = {
    chatData: "",
    error: "",
  };
  
  export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CHAT_SUCCESS":
        return {
          ...state,
          chatData: action.payload,
          error: "",
        };
      case "FETCH_CHAT_ERROR":
        return {
          ...state,
          chatData: "",
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default chatReducer