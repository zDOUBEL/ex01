import {getDaka} from "@/api/daka"
const dakaList={
    state:{
       list1:{}
    },
    mutations:{
        updata: (state, data) => {
            for (var key in data) {
                state[key] = data[key]
            }
        },
    },
    actions:{
        dakaList({ commit }, ajaxData) {
            return new Promise((resolve, reject) => {
                getDaka(ajaxData).then(response => {
                    console.log("response77777", response);
                    commit("updata", { list1: response })
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
export default dakaList