import * as api from '../api'

export const fetchChat = (data) => async (dispatch) => {
    try {
      const response = await api.chatAPI(data);
      dispatch({ type: "FETCH_CHAT_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_CHAT_ERROR", payload: error.message });
    }
  };