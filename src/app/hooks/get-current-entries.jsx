const urlWithCurrentUsers='http://localhost:3001/api/raffles/' //url del back con particiapntes actuales
const idRaffle=1
async function getAllUsers(){
    try {
        const response = await fetch(`${urlWithCurrentUsers}${idRaffle}`);
        if (!response.ok) {
          throw new Error('Error al consultar la URL');
        }
        const raffleData = await response.json(); 
        if(raffleData){
            localStorage.setItem('current_raffle_data',JSON.stringify(raffleData))
            return raffleData;
        }
        return [];
      } catch (error) {
        console.error('Error:', error.message);
      }
}

export default{getAllUsers};