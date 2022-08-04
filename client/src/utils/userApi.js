import axios from "axios";
// axios.defaults.baseURL="http://localhost:3001"

export async function getApi(url){
    try {
        const response = await axios({
            url,
            method: 'GET'
        })
        if(response && response.data.error){
            return {
                data:null,
                error:response.data.error
            }
        }
        return {
            data:response.data,
            error:null
        }
    } catch (error) {
        return {
            data:null,
            error:error.message
        }
    }
}
export async function postApi(url,data) {
    try {
        const response = await axios({
            url,
            method: 'POST',
            data
        })
        if (response && response.data.error) {
            return {
                data: null,
                error: response.data.error
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error: error.message
        }
    }
}
export async function patchApi(url,data) {
    console.log(data)
    try {
        const response = await axios({
            url,
            method: 'PATCH',
            data
        })
        if (response && response.data.error) {
            return {
                data: null,
                error: response.data.error
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error: error.message
        }
    }
}
export async function deleteApi(url,data) {
    try {
        const response = await axios({
            url,
            method: 'DELETE',
            data
        })
        if (response && response.data.error) {
            return {
                data: null,
                error: response.data.error
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error: error.message
        }
    }
}