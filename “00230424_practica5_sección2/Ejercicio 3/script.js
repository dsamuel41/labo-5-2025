const estanteria = {
    libros: [{
        nombre: 'EL caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    }, {
        nombre: 'El mundo amarrilo',
        autor: 'Albert Espinosa',
        leido: false
    }, {
        nombre: 'Harry potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true
    }, {
        nombre: ' el ingenieso hidalgo don quijote de la mancha',
        autor: 'Miguel de Cervantes',
        leido: false
    }, {
        nombre: 'berserk',
        autor: 'Kentaro Miura',
        leido: true
    }, {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    }],
    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}${prefijo} leido ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado)
    },
    sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
    const elementoRandom = librosNoLeidos[indiceRandom];
    console.log(`Te sugerimos leer ${elementoRandom.nombre} de ${elementoRandom.autor}`);
}
    
}

// Verificación
estanteria.log();
estanteria.sugerencia();


