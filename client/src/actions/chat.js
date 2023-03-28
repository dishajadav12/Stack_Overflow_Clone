import * as api  from '../api'

export const chatBot = (prompt) => async (dispatch) =>{
    try {
        const response = await api.chatBot(prompt);
        dispatch({ type: 'CHAT_ASK', payload: response.data });
    } catch (error) {
        console.error(error.message);

    }

}