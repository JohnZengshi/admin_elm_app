import axios from 'axios';
import qs from 'qs';
const request = async (method, data, url) => {
    if (method == "GET") {
        const res = await axios.get(url, {
                params: data
            })
            .then((res) => {
                return res
                // console.log(res);
            })
            .catch((error) => {
                // console.log(error);
            });
        return res;
    } else {
        const res = await axios.post(url, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((res) => {
                return res
                // console.log(res);
            })
            .catch((error) => {
                // console.log(error);
            });
        return res;
    }
}

export default request;
