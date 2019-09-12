import axios from 'axios'

export const GLOBAL_URL = {
    url:'http://localhost:3333'
}
function request(method,url,body,headers) {
    console.log(body);
    method = method.toUpperCase();
    if(method === 'GET'){
        body = undefined;
    }
    return axios({
        method:method,
        url:`${GLOBAL_URL.url+url}`,
        data:body,
        headers:headers || {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    })
    .then((res) => {
        return res
    })
    .catch(error => {
        return error
    })
}
export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);