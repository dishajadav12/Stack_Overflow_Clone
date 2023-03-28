const initialState = {
    chatBotResponse: null,
    isLoading: false,
    error: null,
  }
  
const chatBotReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'CHAT_ASK':
        return {
          ...state,
          chatBotResponse: action.payload,
        }
      default:
        return state
    }
  }
  
export default chatBotReducer;
  