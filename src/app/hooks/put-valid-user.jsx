async function addParticipant(newParticipant) {
  try {
      const postResponse = await fetch('http://localhost:3001/api/raffles/1/participants', {
          method:'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ participant: newParticipant })
      });

      if (!postResponse.ok) {
          throw new Error('Error al agregar el nuevo participante');
      }

      const addedParticipant = await postResponse.json();
      console.log('Nuevo participante agregado:', addedParticipant);
      return addedParticipant;
  } catch (error) {
      console.error('Error:', error.message);
  }
}

export default { addParticipant };
