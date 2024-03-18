async function addParticipant(newParticipant) {
  try {
      const raffleData = {
          "_id": "65f781eee6c872aa04ea2838",
          "participants": [
              "nuevoParticipante",
              "nuevoParticipante",
              "nuevo" 
          ],
          "dateStart": "Mañana",
          "dateFinish": "Martes",
          "description": "Un re premio loco",
          "award": "Nintendo Switch",
          "idRaffle": "1",
          "__v": 2
      };

      const putResponse = await fetch('http://localhost:3001/api/raffles/1', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(raffleData)
      });

      if (!putResponse.ok) {
          throw new Error('Error al actualizar los participantes');
      }

      const updatedData = await putResponse.json();
      console.log('Datos actualizados:', updatedData);
      return updatedData;
  } catch (error) {
      console.error('Error:', error.message);
  }
}

export default { addParticipant };
