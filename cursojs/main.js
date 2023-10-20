const usuario = { 
    nombre: 'Juan',
    edad: 20,
    gustos: ['programacion', 'videojuegos', 'cine'],
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Madrid',
        pais: 'España'
    },
    casado: false,  // true o false
    estudios: null, // null o undefined
    imprimirGustos: function() {    
        console.log(this.gustos);
    }
}

const amigos = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Ana', edad: 25},  
    {nombre: 'Pedro', edad: 30},
    {nombre: 'María', edad: 35},
    {nombre: 'José', edad: 40}
];

// // recorre el array de amigos y muestra su nombre y edad
// let salida = '';
// for (let i = 0; i < amigos.length; i++) {

//     salida = salida + `<li> ${amigos[i].nombre} - ${amigos[i].edad} años </li>`;
//     console.log(amigos[i].nombre);
// }
// // dibuja en el html el array de amigos
// document.getElementById('lista').innerHTML = salida

// console.log(usuario);



// stringify convierte un objeto en un string JSON
console.log(JSON.stringify(usuario));
//console.log(JSON.stringify(amigos));


// parse convierte un string en JSOn en un objeto JavaScript
//JSON.parse(JSON.stringify(usuario));
let elementos = '';

        fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                elementos += `
                    <li>
                        <img src="${data.results[i].image}" alt="${data.results[i].name}">
                        <h1>${data.results[i].name}</h1>
                        
                    </li>`;
            }
            document.getElementById('posts').innerHTML = elementos;
        });

