

interface IReferent {
    name: string;
    phrase: string;
    github: string;
    linkedin: string;
    twitter: string;
    stylesBackground: string;
    image: string;
    classForImage: string;
}

export const referentsData : IReferent[] = [
    {
        name: 'Carlos Azaustre',
        phrase: '"No siempre se sabe todo, lo importante es aprender algo cada día" ',
        github: 'https://github.com/carlosazaustre',
        linkedin: 'https://www.linkedin.com/in/carlosazaustre/',
        twitter: 'https://twitter.com/carlosazaustre',
        stylesBackground: 'linear-gradient(160deg, #b6aa04 0%, #d0cf80 100%)',
        image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1688157633/portfolio-referents/carlos.jpg',
        classForImage: 'carlos'
    },
    {
        name: 'Gonzalo Pozzo',
        phrase: '"Menos cursos, más proyectos"',
        github: 'https://github.com/goncy',
        linkedin: 'https://www.linkedin.com/in/gonzalopozzo/',
        twitter: 'https://twitter.com/goncy',
        stylesBackground: 'linear-gradient(160deg, #3a3a3a 0%, #7c7c7c 100%)',
        image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1688157637/portfolio-referents/goncy.jpg',
        classForImage: 'goncy'
    },
    {
        name: 'Alan Buscaglia',
        phrase: '"Experiencia de senior, corazón de junior"',
        github: 'https://github.com/Gentleman-Programming',
        linkedin: 'https://www.linkedin.com/in/alanbuscaglia/',
        twitter: 'https://twitter.com/G_Programming',
        stylesBackground: 'linear-gradient(160deg, #8d006a 0%, #b4009c 100%)',
        image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1688159433/portfolio-referents/alan.png',
        classForImage: 'alan'
    },
]