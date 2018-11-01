import { getlogin,getzhuce } from "@/api/login"
const login = {
    state: {
        data: {},
        zhuce:{}
    },
    mutations: {
        updata: (state, data) => {
            for (var key in data) {
                state[key] = data[key]
            }
        },

    },
    actions: {
        loginA({ commit }, ajaxData) {
            return new Promise((resolve, reject) => {
                getlogin(ajaxData).then(response => {
                    console.log("response", response);
                    commit("updata", { data: response })
                    resolve(response)
                }).catch(error => {
                    console.log("进入catch")
                    commit("updata", { listLoading: false })
                    reject(error)
                })
            })
        },
        loginB({ commit }, ajaxData) {
            return new Promise((resolve, reject) => {
                getzhuce(ajaxData).then(response => {
                    console.log("response", response);
                    commit("updata", { zhuce: response })
                    resolve(response);
                }).catch(error => {
                    console.log("进入catch")
                    commit("updata", { listLoading: false })
                    reject(error);
                })
            })
        }

    }
}
export default login