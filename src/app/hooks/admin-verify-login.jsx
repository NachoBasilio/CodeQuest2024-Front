
const urlToRequestAccess = '/api'; // Modifica la URL según tus necesidades
async function verifyIfIsAdmin () {
    try {
        const response = await fetch(urlToRequestAccess);

        
        const dataAdmin = await response.json();
        if(Object.values(dataAdmin)[0] === ''){
           return console.log('debe ingresar el admin')
        }
        
        return dataAdmin
    } catch (error) {
        console.log(error)
        console.error('Error de red:', error.message);
        
    }
}
export default{verifyIfIsAdmin}
