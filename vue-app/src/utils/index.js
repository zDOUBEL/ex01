import axios from 'axios'
function myaxios(data) {
    console.log('dataaxios',data)
    return axios({
        url: data.url,
        method: data.method,
        data: data.data,
    })
   
}

export default myaxios