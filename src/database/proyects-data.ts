

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
            image: 'https://i.ibb.co/JWZqCNm/MovieApp.png',
            link: 'https://movie-app-2022-cm.vercel.app/',
            github: 'https://github.com/Armandocm19/movie-app',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML', 'NextUI'],
        },
        {
            title: 'PokemonAppStatic',
            description: 'Página estática que muestra un listado de pokemones, con algunas funcionalidades más.',
            image: 'https://i.ibb.co/P6NXnj0/PokeApp.png',
            link: 'https://pokemonappstatic.vercel.app/',
            github: 'https://github.com/Armandocm19/PokemoApi',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML']
        },
        {
            title: 'Galería Web',
            description: 'Web donde muestra los Parques Nacionales de unos de mis países favoritos.',
            image: 'https://i.ibb.co/b2vQW7j/Galeria-Web.png',
            link: 'https://galeria-web.vercel.app/',
            github: 'https://github.com/Armandocm19/GaleriaWeb',
            technologys: ['JavaScript', 'CSS', 'HTML']
        },
        {
            title: 'Teslo-Shop (Clon)',
            description: 'Esta es un clon de la tienda Teslo-Shop, la cuál contiene su propia base de datos, y área administrativa.',
            image: 'https://i.ibb.co/2nsTrGW/Teslo-Shop.png',
            link: 'https://next-teslo-shop-2023.vercel.app/',
            github: 'https://github.com/Armandocm19/next-teslo-shop',
            technologys: ['NextJS','TypeScript', 'CSS', 'HTML', 'MongoDB']
        },
        {
            title: 'Helados Artesanales',
            description: 'Esta es una web para el emprendimiento de un cliente, donde se pueden hacer órdenes,y además permite tener un control del inventario.',
            image: 'https://i.ibb.co/80WcNRw/Helados-Artesanales.png',
            link: 'https://helados-artesanales.up.railway.app/',
            github: 'https://github.com/Armandocm19/helados-artesanales',
            technologys: ['NextJS', 'TypeScript', 'CSS', 'HTML', 'MongoDB']
        }
    ]

}