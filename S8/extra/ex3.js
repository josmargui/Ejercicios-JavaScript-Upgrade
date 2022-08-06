fetch("http://localhost:3000/orders")
  .then((response) => response.json())
  .then((data) => {
    impresionPedidosOrdenados(data);
    console.log(data);
});
  
const impresionPedidosOrdenados = (pedidos) => {
  pedidos.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });

for (const pedido of pedidos) {
    const div$$=document.createElement('div');
    const h3$$ = document.createElement("h3");
    const h2$$ = document.createElement("h2");
    h2$$.textContent = pedido.id;
    h3$$.textContent = pedido.date;
    div$$.appendChild(h2$$);
    div$$.appendChild(h3$$);
    document.body.appendChild(div$$);
    const arrayProductos = pedido.products;

    for (const producto of arrayProductos) {
        const p$$=document.createElement("p");

        fetch("http://localhost:3000/products/"+ producto.productId)
        .then((response) => response.json())
        .then((data) => {
            p$$.textContent =data.name;
            div$$.appendChild(p$$);
});
        
        /* p$$.textContent =nombreProducto;
        div$$.appendChild(p$$); */
        console.log(p$$);
        console.log(producto);

    }
    
}
};

/*  const productos = (producto) => {

}*/

/* fetch('http://localhost:3000/orders')
  .then(response => response.json())
  .then(data => console.log(data));

 */
