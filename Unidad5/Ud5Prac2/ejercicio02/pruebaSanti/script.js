// Santiago Calderon Castaño
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbItems = document.querySelectorAll(".breadcrumb-item");
    const sections = document.querySelectorAll("main > section");

    // Oculta los breadcrumbs inicialmente
    //breadcrumbItems.forEach(item => item.style.opacity = "0");

    const observer = new IntersectionObserver(entries => { // creamos un observable que detecte cuando la sección entre en la vista del usuario
        // //         // entries es un array de secciones detectadas, que inicialmente seria el sections de arriba
        entries.forEach(entry => {
            let sectionId = entry.target.id;  // obetenemos el id de la seccion visible 
            // Encuentra el breadcrumb correspondiente basado en el enlace dentro de cada item

            let breadcrumbItem = Array.from(breadcrumbItems).find(item =>
                item.querySelector("a")?.getAttribute("href") === `#${sectionId}`
            );

            if (breadcrumbItem) {  // si se encontró la miga de pan pues ya solo queda mostrarla
                //breadcrumbItem.style.transition = "opacity 0.5s ease-in-out";
                breadcrumbItem.style.transition = "font-weight 0.5s ease-in-out";

                if (entry.isIntersecting) { // la condición es true cuando entra en la vista dl usuario
                    // breadcrumbItem.style.opacity = "1"; // Mostrar cuando la sección es visible
                    breadcrumbItem.style.fontWeight = "Bold"; // Mostrar cuando la sección es visible

                } else {
                    breadcrumbItem.style.fontWeight = "normal"; // Mostrar cuando la sección es visible
                    //breadcrumbItem.style.opacity = "0"; // Ocultar cuando la sección no es visible
                }
            }
        });
    }, { threshold: 0.5 });  // treshold es la condición del observador que hace que se active cuando un 50% de la seccion sea visibleconsole.log("DOMContentLoaded event triggered");

    sections.forEach(section => observer.observe(section));
});