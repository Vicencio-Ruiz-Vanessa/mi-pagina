fetch('menu.json')
 //Que hace esta linea?Esta linea inicia la carga del archivo menu.json, fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de API.
    //Como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es dirrectamene los datos en formato JSON, si no un objjeto de respuesta que incluye varios detalles sobre la resouesta misma.
 
.then(response=> response.json)
//Que hace?esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo.json()para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta  en formato)
//Como funciona? el metodo.json() tambien debuelve una promesa, la cual seresuelve  con el contenido del cuerpo en formato JSON

.then(date=>{
    const menuConstainer=document.getElementById('menu-container');
    // Que hacen?Aqui se procesan los datos json ya convertidos se obtienen una referencia el contenedor del menu en el HTML mediante getElementbyid ('menu-container')
   
    data.items.array.forEach(category => {
        const categoryTitle=document.createElement('h2');
        //Que hace?aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenedor de texto, y luego se anade este titulo
        categoryTitle.textContent=category.category;
        menuConstainer.appendchild(categoryTitle);

        const table= document.createElement('table');
        //Que hace?se crea un elemeno table para una categoria. ademas, se prepara el encabezado (tablehead)con las columnas pertinentes.tablebody se inicializa vacio y s llama con los elementos de la categoria.
        const tableHead=<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;
        let tableBody='';
        //Como funciona?para cada categoria en los datos, se realizan varios pasoso:
        //Crea un titulo para categoria, se establece su contenido de texto al nombre de la categoria(category.category), y luego se agregan al contenedor del menu.
        //Crea una tabla para los elementos de esta categoria: se genera una tabla por cada categoria. primero se define el encabezado de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>).

        category.items.forEach(item =>{
            tableBody += `<tr>
                <td><img src= "${item.image}" alt="{item.name}"></td>
                <td> ${item.name} - ${item.descripcion}</td>
                <td>${item.price}</td>
            </tr>`
        });
        //Que hace? para cada item dentro de category,items, se concatena una nueva fila(<tr>) a tableBody. Esta fila contiene  una celda para  la imagen del elemento (usando el atributo src para la URL de la imagen  y "alt" para el texto alternativo ), otra celda para el nombre y la descripcion del elemento, y una tercera  celda para el precio del elemento.
        table.innerHTML= tableHead + tableBody;
        //Que hace? una vez completadas todas las filas de la table para los elementos de una categoria, se combina el encabezado de la table (tableHead) con el cuerpo de una tabla (tableBody) y se establece como el contenidi HTML de la tabla. Finalmente, esta tabla se añade al contador del menu en la pagina web.
        menuConstainer.appendChild(table);
    });
});
//Probar la tabla con los elementos: para cada item dentro de una categoria, se crea una (<tr></tr>) con tres celdas (<td></td>):una para la imagen (con un elemento<img>), optra para el nombre y descripcion del item, y una ultima para el precio.Esto se hace concatenando la nueva fila una variable tableBody.
//Finalizar y mostrar la tabla: una vez que todas ;las filas han sido agregadas  a tableBody, se establece el contenido interno (innerHTML) de la tabla convinando el encabezado con el cuerpo , luego, esta tabla esta complpeta se agrega al contenedor  del menu en el documento.