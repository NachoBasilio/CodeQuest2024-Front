const urlWithCurrentUsers='https://rickandmortyapi.com/api/character/1' //url del back con particiapntes actuales
async function getAllUsers(){
    try {
        const response = await fetch(`${urlWithCurrentUsers}`);
        if (!response.ok) {
          throw new Error('Error al consultar la URL');
        }
        const allCurrentUsers = await response.json(); //meter en en localstorage
        if(allCurrentUsers){
            localStorage.setItem('current_participants',allCurrentUsers)
            return allCurrentUsers;
        }
        return [];
      } catch (error) {
        console.error('Error:', error.message);
      }
}

export default{getAllUsers};