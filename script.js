const btn = document.getElementById("boton");

btn.addEventListener("click", function () {
  const compra = document.getElementById("valor").value;
  let descuento_10 = compra * 0.1;
  let valor_con_descuento = 150000;
  let compra_total = compra - descuento_10;

  if (compra >= valor_con_descuento) {
    const desc = document.createElement("h1");
    const total = document.createElement("h1");
    desc.innerHTML = `Para la compra de: $ ${compra}, tiene descuento del 10%:  $ ${descuento_10}`;
    desc.setAttribute("style", "background-color:green;");
    document.getElementById("descuento").appendChild(desc);

    total.innerHTML = `Valor de la compra con descuento es: $ ${compra_total}`;
    total.setAttribute("style", "background-color:green;");
    document.getElementById("total").appendChild(total);
  } else {
    const result = document.createElement("h1");
    result.innerHTML = `El valor de tu compra no tiene descuento`;
    result.setAttribute("style", "background-color:purple;");
    document.getElementById("descuento").appendChild(result);
  }
});
