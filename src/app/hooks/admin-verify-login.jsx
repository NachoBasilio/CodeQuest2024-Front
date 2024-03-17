
const urlToRequestAccess = '/api'; // Ruta del SSR
async function verifyIfIsAdmin () {
    try {
        const response = await fetch(urlToRequestAccess);
        const dataAdmin = await response.json();
        if(Object.values(dataAdmin)[0] === ''){
           return console.log('debe ingresar el admin')
        }
        if(response.status === 404){
            return console.log(response.status)
        }
        return dataAdmin
    } catch (error) {
        console.error('Error de red:', error.message);
        
    }
}
export default{verifyIfIsAdmin}
