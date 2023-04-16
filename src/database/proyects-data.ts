
export interface seedProyects {
    projectPosition?: number,
    title: string,
    description: string,
    image: string,
    link: string,
    github: string,
    technologys: ValidTechnologys[],
}

type ValidTechnologys = 'JavaScript'|'NodeJS'|'React'|'NextJS'|'CSS'|'Sass'|'MongoDB'|'HTML'|'TypeScript'|'MaterialUI'|'NextUI';

interface SeedData {
    proyects: seedProyects[]
}

export const proyectsData: SeedData = {

    proyects: [
        {
            title: 'MovieAPP',
            description: 'Listado de películas, donde puedes buscar y ver detalles de las mismas.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300262/portfolio-projects/l0vcavflx2rs0tyhfe62.png',
            link: 'https://movie-app-2022-cm.vercel.app/',
            github: 'https://github.com/Armandocm19/movie-app',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML', 'NextUI'],
        },
        {
            title: 'PokemonAppStatic',
            description: 'Página estática que muestra un listado de pokemones, con algunas funcionalidades más.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300258/portfolio-projects/wmog7dmfdccjf3g6taoi.png',
            link: 'https://pokemonappstatic.vercel.app/',
            github: 'https://github.com/Armandocm19/PokemoApi',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML']
        },
        {
            title: 'Galería Web',
            description: 'Este proyecto es una galería de imágenes de los Parques Nacionales en unos de mis países favoritos.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300264/portfolio-projects/z7sxcoi8ugdmhh9uj6dl.png',
            link: 'https://galeria-web.vercel.app/',
            github: 'https://github.com/Armandocm19/GaleriaWeb',
            technologys: ['JavaScript', 'CSS', 'HTML']
        },
        {
            title: 'Teslo-Shop (Clon)',
            description: 'Esta es un clon de la tienda Teslo-Shop, la cuál contiene su propia base de datos, y área administrativa. NOTA: Si ingresas a la página habrán ciertas rutas que darán error 504. No tengo presupuesto para pagar un dominio, y los dominios gratis no tienen la funcionalidad de correr Serverless function, por lo que los componentes que hagan uso de estas, darán error 504. Si el proyecto se corre localmente todo irá perfectamente. 👨‍💻',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300257/portfolio-projects/gjbzhiyysftcamkhyju7.png',
            link: 'https://next-teslo-shop-2023.vercel.app/',
            github: 'https://github.com/Armandocm19/next-teslo-shop',
            technologys: ['NextJS','TypeScript', 'CSS', 'HTML', 'MongoDB']
        },
        {
            title: 'Helados Artesanales',
            description: 'Esta es una web para el emprendimiento de un cliente, donde se pueden hacer órdenes, y además permite tener un control del inventario. NOTA: Si ingresas a la página habrán ciertas rutas que darán error 504. No tengo presupuesto para pagar un dominio, y los dominios gratis no tienen la funcionalidad de correr Serverless function, por lo que los componentes que hagan uso de estas, darán error 504. Si el proyecto se corre localmente todo irá perfectamente. 👨‍💻',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300263/portfolio-projects/bvuta2hbfdbu9zo7fw92.png',
            link: 'https://helados-artesanales-sm.vercel.app/',
            github: 'https://github.com/Armandocm19/helados-artesanales',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML', 'MongoDB']
        },
        {
            title: 'TRES EN RAYA',
            description: 'En este proyecto construyo el famoso juego "Tres en Raya", el cual tiene una interfaz sencilla, pero tiene una lógica interesante. Esto por el manejo del estado que tiene para detectar cuando el jugador ganó, perdió, o empató. Además de que está programado para que el usuario no gane fácilmente. 👀',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675565063/portfolio-projects/rjve54majth1g8oyugos.png',
            link: 'https://juego-tres-en-raya.vercel.app/',
            github: 'https://github.com/Armandocm19/juego-tres-en-raya',
            technologys: ['React', 'TypeScript', 'CSS', 'HTML']
        },
    ]

}