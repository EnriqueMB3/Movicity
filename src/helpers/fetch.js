const baseUrl = process.env.REACT_APP_API_URL;
const tokenUrl = process.env.REACT_APP_API_TOKEN;

const fetchConToken = async(endpoint, method = 'GET', language='en-US', page='1' ) => {
    const req = await fetch(`${baseUrl}${endpoint}?api_key=${tokenUrl}&page=${page}`,
        {
            method,
            headers: {
                'Content-type': 'application/json',
            }
        });
    const json = await req.json();
    return json;
}

export {
    fetchConToken
}