
export default function createReducers() {
    return {
        login: (state) => {            
            return({
                ...state,
                isLogin: true
            })         
        }
    }
}