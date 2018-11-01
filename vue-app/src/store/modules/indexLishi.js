import { getindexLishi } from "@/api/indexLishi"
const indexLishi = {
    state: {
        Lishi:[]
    },
    mutations: {
        updata: (state, data) => {
            for (var key in data) {
                state[key] = data[key]
            }
        },
    },
    actions: {
        indexLishi({ commit }, ajaxData) {
            return new Promise((resolve, reject) => {
                getindexLishi(ajaxData).then(response => {
                    console.log("response999999999", response.data.data);
                    commit("updata", { Lishi: response.data.data })
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
export default indexLishi