import axios from 'axios';
import qs from 'qs';

/**
 * 切换环境
 * 切换API baseURL
 */
const baseUrl = 'http://localhost:8080';


// 创建axios实例
const instance = axios;
instance.defaults.timeout = 1000 * 20;

// 允许跨域
// instance.defaults.withCredentials = true;

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    req => {
        return req;
    },
    err => Promise.reject(err));

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
    // 请求成功
    res => {
        const resCode = String(res.status);
        if (resCode.substr(0, 1) === '2') {
            return Promise.resolve(res)
        } else {
            return Promise.reject(res)
        }
    },
    // 请求失败
    error => {
        let errorMsg = ['异常错误，请刷新后重试。'];
        return Promise.reject(errorMsg);

    }
);

// handle
const handleAxios = (method, url, data, success, failure) => {
    let res;
    instance.defaults.baseURL = baseUrl;
    if (method === 'GET') {
        res = instance.get(url, { params: data });
    } else if (method === 'POST') {
        res = instance.post(url, data);
    }
    res.then((val) => {
        if (success) {
            success(val.data)
        }
        else {
            failure(val.data)
        }
    })
        .catch((err) => {
            console.log('+++' + err)
        })
}


// 异步请求（审批大厅）
const http = async (method, url, data) => {
    let res;
    if (url.indexOf('http') !== -1) {
        instance.defaults.baseURL = '';
    }
    else {
        instance.defaults.baseURL = baseUrl;
    }
    if (method === 'GET') {
        // 参数序列化
        res = await instance.get(url, { params: data, paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
          } });
    } else if (method === 'POST') {
        res = await instance.post(url, data);
    } else if (method === 'DELETE') {
        res = await instance.delete(url, { params: data });
    } else if (method === 'PUT') {
        res = await instance.put(url, data);
    }
    return new Promise((resolve) => {
        if (res === 'Error: Network Error') {
            resolve({
                'AllMessages': '网络连接失败！',
                'Data': null,
                'HasErrors': true,
                'Messages': ['网络连接失败！'],
                'Success': false,
            });
        } else {
            res = res.data;
            resolve(res);
        }
    });
};




/**
 * @param {String} url     请求的url
 * @param {Object} data    请求的参数
 */
export default {
    async httpGet(url, data) {
        return http('GET', url, data);
    },
    async httpPost(url, data) {
        return http('POST', url, data);
    },
    async httpDelete(url, data) {
        return http('DELETE', url, data);
    },
    async httpPut(url, data) {
        return http('PUT', url, data);
    },

};
