const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Cambiar a notación de clase
const $b = document.querySelector('.blog'); //Cambiar a notación de clase
const $l = document.querySelector('.location');

//Definir función asincrona con palabra reservada async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Manejamos la resolución de la promesa con try, catch
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); //'https://api.github.com/users/stolinski'
    const data = await response.json(); //convertir a formato json
  
  console.log(data); //llamamos un console.log para verificar que existan las claves de name, blog y location
 $n.textContent = `${data.name}`;
 $b.textContent = `${data.blog}`; //Corregimos a template strings en lugar de comillas.
 $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err); //llamamos a la función de handleError cuando la promesa no se resuelve y genera un error.
  }

}

function handleError(err) {
  //console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError); //pasa el nombre de usuario como parámetro

//