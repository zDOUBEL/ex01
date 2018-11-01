import { getindexlist} from "@/api/indexList"
const indexList={
    state:{
       list:{}
    },
    mutations:{
        updata: (state, data) => {
            for (var key in data) {
                state[key] = data[key]
            }
        },
    },
    actions:{
        indexlist({ commit }, ajaxData) {
            return new Promise((resolve, reject) => {
                getindexlist(ajaxData).then(response => {
                    console.log("response111", response);
                    commit("updata", { list: response })
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
export default indexList