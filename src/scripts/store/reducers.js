
export default function createReducers() {
    return {
        register: (state) => {
            return({
                ...state,
                isRegister: true
            })
        },

        login: (state) => {            
            return({
                ...state,
                isLogin: true
            })         
        }
    }
}