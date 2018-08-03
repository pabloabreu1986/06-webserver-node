const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnno', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
 