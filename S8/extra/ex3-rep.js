const baseUrl = "http://localhost:3000/";
const divFather$$ = document.createElement("div");

document.body.appendChild(divFather$$);

function llamada() {
  fetch(baseUrl + "orders")
    .then((response) => response.json())
    .then((data) => {
      printOrdersOrdered(data);
      printOrders(data);
      console.log(data);
    });
}

/* function llamadaProductos(id) {
  fetch(baseUrl + "products/" + id)
    .then((response) => response.json())
    .then((data) => {
      printProducts(data);
      console.log(data);
    });
} */

function printOrdersOrdered(orders) {
  orders.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });
}

function printOrders(orders) {
  for (const order of orders) {
    const div$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const p$$ = document.createElement("p");

    h3$$.textContent = "Fecha: " + order.date;
    p$$.textContent = "ID del pedido: " + order.id;

    div$$.appendChild(h3$$);
    div$$.appendChild(p$$);

    const products = order.products;
    console.log(products);
    
    for (const product of products) {
        const p2$$ = document.createElement("p");
        fetch(baseUrl + "products/" + product.productId)
        .then((response) => response.json())
        .then((data) => {
            p2$$.textContent = data.name;
            div$$.appendChild(p2$$);
        });
      //const p2$$ = document.createElement("p");
      //const p3$$ = document.createElement("p");
      //llamadaProductos(producto.id);

      //p2$$.textContent = product.name;
      //p3$$.textContent = producto.quantity;
    }
    

    divFather$$.appendChild(div$$);
  }
}

function printProducts(products) {
  for (const product of products) {
    const p3$$ = document.createElement("p");
    p3$$.textContent = product.name;

    divFather$$.appendChild(p3$$);
  }
}

llamada();
