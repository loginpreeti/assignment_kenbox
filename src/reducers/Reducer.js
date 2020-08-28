const iState = {
    username : "abc",
    password : "123"
   // wishes : ["code", "paint"]
}

const Reducer = (state=iState, action) => {
    if(action.type==='CHANGE_PASSWORD') {
        return {
            ...state,
            password: action.payload
        }
    }
    return state;
}

export default Reducer;