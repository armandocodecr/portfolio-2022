
export interface seedProyects {
    projectPosition?: number,
    title: string,
    description: string,
    image: string,
    link: string,
    github: string,
    technologys: ValidTechnologys[],
    video?: string
}

type ValidTechnologys = 'JavaScript'|'NodeJS'|'React'|'NextJS'|'CSS'|'Sass'|'MongoDB'
|'HTML'|'TypeScript'|'MaterialUI'|'NextUI'|'TailwindCSS'|'Express'|'Socket'|'GraphQL'|'NestJS'|'TypeORM'|'Docker';

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
            technologys: ['NextJS', 'TypeScript', 'NextUI'],
        },
        {
            title: 'Kapool (Clon de Kahoot)',
            description: 'Este proyecto podrás crear tus partidas y conectarte en tiempo real con otros jugadores para jugar tus partida. Cuenta con un sistema de puntaje y clasificación, y diseño atractivo',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1684262039/portfolio-projects/brbttmwqenvsocinibvn.png',
            link: 'none',
            github: 'https://github.com/Armandocm19/kapool-react-frontend',
            technologys: ['React', 'TailwindCSS', 'MongoDB', 'NodeJS', 'Express', 'Socket'],
            video: 'https://www.youtube.com/watch?v=_tMWN6hUAOo'
        },
        {
            title: 'Shopping List',
            description: 'Está aplicacion permite hacer un listado de compras. Contiene un área de autenticación, listado de items, listas, y un área de estadísticas que te muestra por medio de gráficos los items y categorías más usadas y además un gráfico que te mostrará tus listas creadas en una línea de tiempo. 👨‍💻',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1691785152/portfolio-projects/Shoppinglist.png',
            link: 'https://shopping-list-2023.vercel.app/',
            github: 'https://github.com/armandocodecr/ShoppingList',
            technologys: ['NextJS', 'TailwindCSS', 'GraphQL', 'NestJS','Docker','TypeScript'],
            video: 'https://youtu.be/D9G8okA7qmQ'
        },
        {
            title: 'Teslo-Shop (Clon)',
            description: 'Esta es un clon de la tienda Teslo-Shop, la cuál contiene su propia base de datos, y área administrativa. NOTA: Este proyecto tiene un video audivisual en los ícono de abajo para su demostración completa. Esto porque el proyecto está subido en un dominio gratuito, y no tengo la posibilidad de pagar uno, por lo que este no acepta las serverless function usadas en el proyecto. 👨‍💻',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300257/portfolio-projects/gjbzhiyysftcamkhyju7.png',
            link: 'https://next-teslo-shop-2023.vercel.app/',
            github: 'https://github.com/Armandocm19/next-teslo-shop',
            technologys: ['NextJS','TypeScript', 'MongoDB'],
            video: 'https://www.youtube.com/watch?v=XbZQ1iZYjNA'
        },
        {
            title: 'TRES EN RAYA',
            description: 'En este proyecto construyo el famoso juego "Tres en Raya", el cual tiene una interfaz sencilla, pero tiene una lógica interesante. Esto por el manejo del estado que tiene para detectar cuando el jugador ganó, perdió, o empató. Además de que está programado para que el usuario no gane fácilmente. 👀',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675565063/portfolio-projects/rjve54majth1g8oyugos.png',
            link: 'https://juego-tres-en-raya.vercel.app/',
            github: 'https://github.com/Armandocm19/juego-tres-en-raya',
            technologys: ['React', 'TypeScript']
        },
        {
            title: 'GitHub Cards',
            description: 'Este proyecto consiste en que al colocar tu nombre de usuario de GitHub, puedas visualizar tus "stats" desde una tarjeta con un diseño agradable y con un bonito efecto 3D. Una de las principales funcionalidades de este proyecto es que las personas puedan descargar su tarjeta de Github y así usarla como una carta de presentación de su perfil. 👨‍💻',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1688055012/portfolio-projects/fn4kxrz7lqzebxbilvlp.png',
            link: 'https://devfinder-github-cards.vercel.app/',
            github: 'https://github.com/armandocodecr/Devfinder-GithhubCards',
            technologys: ['NextJS', 'TailwindCSS']
        },
        {
            title: 'PokemonAppStatic',
            description: 'Página estática que muestra un listado de pokemones, con algunas funcionalidades más.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675300258/portfolio-projects/wmog7dmfdccjf3g6taoi.png',
            link: 'https://pokemonappstatic.vercel.app/',
            github: 'https://github.com/Armandocm19/PokemoApi',
            technologys: ['NextJS', 'TypeScript']
        },
    ]

}