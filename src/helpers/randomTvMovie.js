export const tvMovie = () => {
    const list = ['tv', 'movie'];
    const item = list[Math.floor(Math.random() * list.length)];
    return item;
}