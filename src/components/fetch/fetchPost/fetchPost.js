export const fetchPost = (routeServer, objectToSendToServer) => {
    // const modeDev = 'http://localhost:3001/' + routeServer;
    // const modeProd = 'https://hm-server-provider.onrender.com/' + routeServer;
    const modeProd = 'https://back-h-m-dev-xdta.3.us-1.fl0.io/' + routeServer;
    return new Promise(async(resolve) => {
        await fetch(modeProd, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(objectToSendToServer)
        })
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(() => console.error('Ocurrió un error'))
    })
}
