const urlGetCurrentUser='' //url del backend que retorna si el usuario esta en la base de datos o no

async function getCurrent() {
    try {
      const response = await fetch(`${urlGetCurrentUser}`);
  
      if (!response.ok) {
        throw new Error('Error al consultar la URL');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }