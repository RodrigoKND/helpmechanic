export const fetchGet = (routeServer) => {
    const modeDev = 'http://localhost:3001/' + routeServer;
    // const modeProd = 'https://hm-server-provider.onrender.com/' + routeServer;
    return new Promise((resolve) => {
        fetch(modeDev, {
            method: 'GET',
            cache: 'no-store'
        })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(() => console.error('Error'))
    })
}
