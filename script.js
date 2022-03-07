const btn = document.getElementById("boton");

btn.addEventListener("click", function () {
  let costo = 820000;
  const cantidad = document.getElementById("valor").value;
  const compra = costo * cantidad;
  let descuento_15 = compra * 0.15;
  let descuento_25 = compra * 0.25;
  let descuento_35 = compra * 0.35;

  if (compra >= 1640000 && compra <= 3280000) {
    const desc = document.createElement("h1");
    const total = document.createElement("h1");
    desc.innerHTML = `Para la compra de: $ ${compra}, tiene descuento del 15%:  $ ${descuento_15}`;
    desc.setAttribute("style", "background-color:green;");
    document.getElementById("descuento").appendChild(desc);
    total.innerHTML = `Valor de la compra con descuento es: $ ${
      compra - descuento_15
    }`;
    total.setAttribute("style", "background-color:green;");
    document.getElementById("total").appendChild(total);
  } else if (compra >= 3280000 && compra <= 6560000) {
    const desc = document.createElement("h1");
    const total = document.createElement("h1");
    desc.innerHTML = `Para la compra de: $ ${compra}, tiene descuento del 25%:  $ ${descuento_25}`;
    desc.setAttribute("style", "background-color:green;");
    document.getElementById("descuento").appendChild(desc);
    total.innerHTML = `Valor de la compra con descuento es: $ ${
      compra - descuento_25
    }`;
    total.setAttribute("style", "background-color:green;");
    document.getElementById("total").appendChild(total);
  } else if (compra > 6560000 && compra <= 9840000) {
    const desc = document.createElement("h1");
    const total = document.createElement("h1");
    desc.innerHTML = `Para la compra de: $ ${compra}, tiene descuento del 35%:  $ ${descuento_35}`;
    desc.setAttribute("style", "background-color:green;");
    document.getElementById("descuento").appendChild(desc);
    total.innerHTML = `Valor de la compra con descuento es: $ 
    ${compra - descuento_35}`;
    total.setAttribute("style", "background-color:green;");
    document.getElementById("total").appendChild(total);
  } else {
    const result = document.createElement("h1");
    result.innerHTML = `El valor de tu compra no tiene descuento`;
    result.setAttribute("style", "background-color:purple;");
    document.getElementById("descuento").appendChild(result);
  }
});
