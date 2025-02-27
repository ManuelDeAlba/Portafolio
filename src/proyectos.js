const PROJECTS_IMAGES_DIR = "/proyectos";

export default [
    {
        id: 8,
        src: `${PROJECTS_IMAGES_DIR}/bangstaymd.webp`,
        title: "Bangstaymd",
        description: ["Sitio web para la publicación de postres. Incluye una forma para que el cliente se comunique con el vendedor por medio de whatsapp y haga un pedido de forma sencilla, permitiendo seleccionar los productos y rellenando los datos necesarios para automatizar el proceso de comunicación."],
        technologies: ["html", "css", "js", "astro"],
        web: "https://bangstaymd.netlify.app",
        reciente: true
    },
    {
        id: 1,
        src: `${PROJECTS_IMAGES_DIR}/harty.webp`,
        title: "Harty",
        description: ["Sitio web para la publicación y renta de terrazas. Cuenta con un sistema de autenticación, gestión de roles y herramientas para una visualización amigable."],
        technologies: ["html", "css", "js", "react", "firebase"],
        github: "https://github.com/ManuelDeAlba/harty",
        web: "https://is-harty.netlify.app"
    },
    {
        id: 2,
        src: `${PROJECTS_IMAGES_DIR}/skillup.webp`,
        title: "SkillUp",
        description: ["Plataforma web que permite que los estudiantes encuentren oportunidades de trabajo, facilitando su inserción en el mercado laboral."],
        technologies: ["html", "css", "js", "react", "firebase"],
        github: "https://github.com/ManuelDeAlba/skillup",
        web: "https://is-skillup.netlify.app"
    },
    {
        id: 3,
        src: `${PROJECTS_IMAGES_DIR}/photographyorozco.webp`,
        title: "Photographyorozco",
        description: ["Portafolio web Vanesa Orozco Photography - Fotografía profesional para Bodas, XV Años, Familia, Infantil"],
        technologies: ["html", "css", "js", "next"],
        web: "https://photographyorozco.com/",
        testimonials: [
            {
                name: "Vanesa Orozco",
                testimonial: "Encantada con tu trabajo, muchísimas gracias, ¡a mis clientes y a mí nos encantó la página web! Muchísimas gracias, 100% recomendado."
            }
        ]
    },
    {
        id: 4,
        src: `${PROJECTS_IMAGES_DIR}/homestockessentials.webp`,
        title: "Homestockessentials",
        description: ["Sitio web para la búsqueda y filtrado en el catálogo de productos."],
        technologies: ["html", "css", "js", "next", "firebase"],
        web: "https://homestockessentials.vercel.app/"
    },
    {
        id: 5,
        src: `${PROJECTS_IMAGES_DIR}/stockessentials.webp`,
        title: "Stockessentials",
        description: ["Plataforma para gestión del inventario de artículos varios para el hogar. Con sistema de autenticación y herramientas para registrar compras, ventas, productos apartados, ingresos, egresos y registro de movimientos."],
        technologies: ["html", "css", "js", "react", "firebase"]
    },
    // {
    //     id: 6,
    //     src: `${PROJECTS_IMAGES_DIR}/wikirickymorty.webp`,
    //     title: "Wiki Rick and Morty",
    //     description: ["Wiki de Rick & Morty, con información de los personajes, episodios y ubicaciones de la serie utilizando React.js y la API de Rick & Morty."],
    //     technologies: ["html", "css", "js", "react"],
    //     github: "https://github.com/ManuelDeAlba/rickandmortyapi",
    //     web: "https://wikirickymorty.netlify.app/"
    // },
    {
        id: 7,
        src: `${PROJECTS_IMAGES_DIR}/vivero.webp`,
        title: "FullStack App Vivero",
        description: ["Frontend y backend para la administración de los proveedores, productos, compras y ventas de un vivero."],
        technologies: ["html", "css", "js", "react", "node", "sequelize", "postgresql"],
        github: "https://github.com/ManuelDeAlba/FullStack-App-Vivero"
    }
]