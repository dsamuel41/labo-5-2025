const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5,
    }],
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
}


// Verificación
console.log('Precio inicial:', carrito.precioTotal);

// Cambiar unidades
carrito.productos[0].unidades = 6;
console.log('Precio después del cambio:', carrito.precioTotal);
