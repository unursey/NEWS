const URL = 'https://newsapi.org/v2/';

export const fetchRequest = async (postfix, {
    method = "get",
    callback,
    body,
    headers,
    //xxx,
}) => {
    try {
        const options = {
            method,
        };

        if (body) options.body = JSON.stringify(body);
        if (headers) options.headers = headers;
        

        const response = await fetch(`${URL}${postfix}`, options);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //const xxxx = options.xxx;
            if (callback) return callback(null, data);
            return;
        }
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    } catch (err) {
        return callback(err);
    }
};

