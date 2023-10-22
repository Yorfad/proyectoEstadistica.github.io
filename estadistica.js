function procesarDatos() {
    // Obtener los datos del textarea y dividirlos en un array
    const textArea = document.getElementById('textArea').value;
    const data = textArea.split(',').map(item => parseFloat(item.trim()));

    console.log(data)

    // Ordenar los datos de menor a mayor
    data.sort((a, b) => a - b);

    // Encontrar valores únicos y contar su frecuencia
    const uniqueData = [...new Set(data)];
    const frequency = {};
    uniqueData.forEach(value => {
        frequency[value] = data.filter(item => item === value).length;
    });

    // Calcular el rango y los valores de clase
    const range = data[data.length - 1] - data[0];
    const limitesRealesDeClase = range / 6;
    const valorDeClase = Math.round(limitesRealesDeClase);

    // Mostrar los resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Datos únicos:</strong> ${uniqueData.join(', ')}</p>
        <p><strong>Frecuencia de datos:</strong> ${JSON.stringify(frequency)}</p>
        <p><strong>Rango:</strong> ${range}</p>
        <p><strong>Limites Reales de Clase:</strong> ${limitesRealesDeClase}</p>
        <p><strong>Valor de Clase:</strong> ${valorDeClase}</p>
    `;

    const columna1 =  document.querySelectorAll(".columna1")

    let i = 0;
    let ii = 0;
    let sumar = 0;
    let sumar1 = 0;
    let iii = 0;
    let sumar2 = 0;

    columna1.forEach((e) => {
        i +=1;

        if(i === 1){
            let primerValor =data[0];
            let segundoValor = primerValor +  (valorDeClase - 1);
            e.innerHTML = primerValor + "-" + segundoValor;
        }
        else{
            sumar += valorDeClase;
            let primerValor = data[0] + sumar;
            let segundoValor = (primerValor - 1) + valorDeClase;
            e.innerHTML = primerValor + "-" + segundoValor;
        }

    });

    const columna2 =  document.querySelectorAll(".columna2")

    

    columna2.forEach((e) => {
        iii +=1;

        if(iii === 1){
            primerValor1 = data[0] - (valorDeClase - limitesRealesDeClase );
            console.log(primerValor1)
            segundoValor1 = data[0] +  limitesRealesDeClase;
            e.innerHTML = primerValor1 + "-" + segundoValor1;
        }
        else{
            sumar1 += valorDeClase;
            
            primerValor1 = (data[0] - (valorDeClase - limitesRealesDeClase )) + sumar1;
            
            segundoValor1 = primerValor1 + valorDeClase;
            console.log(valorDeClase - limitesRealesDeClase)
            e.innerHTML = primerValor1 + "-" + segundoValor1;
        }

    });

    const columna3 =  document.querySelectorAll(".columna3")

    

    columna3.forEach((e) => {
        ii +=1;

        if(ii === 1){
            primerValor1 = data[0] - (valorDeClase - limitesRealesDeClase );
            console.log(primerValor1)
            segundoValor1 = data[0] +  limitesRealesDeClase;
            e.innerHTML = (primerValor1 +  segundoValor1)/2;
        }
        else{
            columnaAUsar = columna3[(ii-1)].value
            e.innerHTML = columnaAUsar + valorDeClase;
        }

    });
}

