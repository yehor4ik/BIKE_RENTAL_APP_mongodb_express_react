let endpoint = 'http://localhost:8080/api';
const headers = {
    'content-type': 'application/json'
}

export const get = async (resource) => {
    return fetch([endpoint, resource].join('/')).then((res) => res.json())
        .then(res => {
            return res
        })
};

export const create = async (resource, item) => {
        return fetch([endpoint, resource].join('/'), { headers, body: JSON.stringify(item), method: 'POST' })
            .then((res) => res.json()).then(res => {
                return res
            })
};

export const remove = async (resource, id) => {
    return fetch([endpoint, resource, id].join('/'), { headers, method: 'DELETE' })
        .then((res) => res.json()).then(res => {
            return res
        })
};