export const fetchGet = async (routeServer) => {
    // const modeDev = 'http://localhost:3001/' + routeServer;
    const modeProd = 'https://hm-server-provider.onrender.com/' + routeServer;
    return new Promise((resolve) => {
        fetch(modeProd, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(() => console.error('Error de conexión'))
    })
}
