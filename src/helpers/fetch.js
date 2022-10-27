const fetchConToken = async (endpoint, query, page = '1', method = 'GET') => {

    const req = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=0e9bff3404eb0c057e5d9b33253c686c&page=${page}${query && `&query=${query}`}`,
        {
            method,
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        });
    const json = await req.json();
    return json;
}

export {
    fetchConToken
}