export const fetchGet = async (routeServer) => {
    // const modeDev = 'http://localhost:3001/' + routeServer;
    // const modeProd = 'https://hm-server-provider.onrender.com/' + routeServer;
    const modeProd = 'https://back-h-m-dev-xdta.3.us-1.fl0.io/' + routeServer;
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
