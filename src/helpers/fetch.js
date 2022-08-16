const baseUrl = process.env.REACT_APP_API_URL;
const tokenUrl = process.env.REACT_APP_API_TOKEN;

// {{URL}}/movie/{{movie_id}}?api_key={{api_key}}&language=en-US&page=1
const fetchConToken = async(endpoint, method = 'GET', language='en-US', page='1' ) => {
    // const req = await fetch(`${baseUrl}/${endpoint}/?api_key=${tokenUrl}&language=${language}&page=${page}`);
    const req = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=0e9bff3404eb0c057e5d9b33253c686c&page=${page}`);
    const json = await req.json();
    return json;

}

export {
    fetchConToken
}