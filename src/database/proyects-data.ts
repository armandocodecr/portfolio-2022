

export interface seedProyects {
    projectPosition?: number,
    title: string,
    description: string,
    image: string,
    link: string
    technologys: ValidTechnologys[],
}

type ValidTechnologys = 'JavaScript'|'NodeJS'|'React'|'NextJS'|'CSS'|'Sass'|'MongoDB'|'HTML'|'TypeScript';

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
            technologys: ['React', 'NextJS', 'TypeScript', 'CSS', 'HTML'],
        },
        {
            title: 'PokemonAppStatic',
            description: 'Página estática que muestra un listado de pokemones, con algunas funcionalidades más.',
            image: 'https://i.ibb.co/P6NXnj0/PokeApp.png',
            link: 'https://pokemonappstatic.vercel.app/',
            technologys: ['React', 'NextJS', 'TypeScript', 'CSS', 'HTML']
        },
        {
            title: 'Galería Web',
            description: 'Web donde muestra los Parques Nacionales de unos de mis países favoritos',
            image: 'https://i.ibb.co/b2vQW7j/Galeria-Web.png',
            link: 'https://galeria-web.vercel.app/',
            technologys: ['JavaScript', 'CSS', 'HTML']
        }
    ]

}