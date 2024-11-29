// Datos de los municipios: Cada municipio tiene un conjunto de propiedades (nombre, población, etc.)
const municipios = {
    Vainí: {
        nombre: "Vainí",
        departamento: "Cundinamarca",
        poblacion: "5,000",
        area: "125 km²",
        economia: "Agricultura, ganadería",
        clima: "Frío",
        altura: "2,600 m.s.n.m",
        fundacion: "1575",
        monumentos: "Iglesia de Vainí, Parque Central",
        descripcion: "Vainí es un municipio agrícola que cuenta con una rica historia colonial.",
        url: "https://es.wikipedia.org/wiki/Vain%C3%AD"
    },
    Sumapaz: {
        nombre: "El Páramo de Sumapaz",
        departamento: "Cundinamarca",
        poblacion: "2,000",
        area: "300 km²",
        economia: "Ganadería, turismo ecológico",
        clima: "Páramo",
        altura: "3,200 m.s.n.m",
        fundacion: "1930",
        monumentos: "Parque Natural Sumapaz",
        descripcion: "El Páramo de Sumapaz es uno de los ecosistemas más importantes del país.",
        url: "https://es.wikipedia.org/wiki/Parque_natural_sumapaz"
    },
    Tota: {
        nombre: "Tota",
        departamento: "Boyacá",
        poblacion: "13,000",
        area: "143 km²",
        economia: "Agricultura, minería",
        clima: "Templado",
        altura: "2,750 m.s.n.m",
        fundacion: "1600",
        monumentos: "Laguna de Tota, Iglesia de Santa Bárbara",
        descripcion: "Tota es conocido por su hermosa Laguna de Tota y sus paisajes montañosos.",
        url: "https://es.wikipedia.org/wiki/Tota"
    },
    Cocuy: {
        nombre: "El Cocuy",
        departamento: "Boyacá",
        poblacion: "40,000",
        area: "1,220 km²",
        economia: "Turismo, agricultura",
        clima: "Frío",
        altura: "2,750 m.s.n.m",
        fundacion: "1812",
        monumentos: "Parque Natural El Cocuy, Iglesia de El Cocuy",
        descripcion: "El Cocuy es famoso por su parque natural y la belleza de sus montañas nevadas.",
        url: "https://es.wikipedia.org/wiki/El_Cocuy"
    }
};

// Función para redirigir a otra página
function redirigir(url) {
    window.location.href = url;
}

// Event listener que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos todos los botones con la clase "verDatos"
    const botones = document.querySelectorAll(".verDatos");

    // Iteramos sobre cada botón y le asignamos un evento 'click'
    botones.forEach(boton => {
        boton.addEventListener("click", (event) => {
            // Obtenemos el municipio asociado a este botón usando el atributo 'data-municipio'
            const municipio = event.target.getAttribute("data-municipio");
            // Guardamos el nombre del municipio en el almacenamiento local
            localStorage.setItem("municipio", municipio);
            // Redirigimos a la página de datos
            redirigir("datos.html");
        });
    });

    // Página de datos: Mostramos la información del municipio
    const contenedorDatos = document.getElementById("datosMunicipio");
    const municipioSeleccionado = localStorage.getItem("municipio");

    // Si tenemos un municipio seleccionado, lo mostramos
    if (municipioSeleccionado && contenedorDatos) {
        const municipio = municipios[municipioSeleccionado];
        contenedorDatos.innerHTML = `
            <h2>${municipio.nombre} (${municipio.departamento})</h2>
            <p><b>Población:</b> ${municipio.poblacion}</p>
            <p><b>Área:</b> ${municipio.area}</p>
            <p><b>Economía:</b> ${municipio.economia}</p>
            <p><b>Clima:</b> ${municipio.clima}</p>
            <p><b>Altura:</b> ${municipio.altura}</p>
            <p><b>Año de Fundación:</b> ${municipio.fundacion}</p>
            <p><b>Monumentos:</b> ${municipio.monumentos}</p>
            <p>${municipio.descripcion}</p>
            <a href="${municipio.url}" target="_blank">Más información</a>
        `;

        // Agregamos un evento al botón "Volver" para regresar a la página principal
        const botonVolver = document.getElementById("volver");
        botonVolver.addEventListener("click", () => {
            redirigir("cocreacion_1.html");
        });
    }
});