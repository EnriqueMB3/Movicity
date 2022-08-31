export const tvMovie = () => {
    const list = ['tv', 'movies'];
    const item = list[Math.floor(Math.random() * list.length)];
    return item;
}