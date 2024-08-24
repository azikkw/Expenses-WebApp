export const findAll = async () => {
    const URL = 'http://localhost:4000/expenses';
    return await fetch(URL, {
        method: 'GET',
    }).then(response => response.json());
}