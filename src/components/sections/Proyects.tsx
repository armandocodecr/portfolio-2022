import { Text, Grid } from "@nextui-org/react";

import { proyectsData } from '../../database/proyects-data'
import { ProyectCard } from './ProyectCard'

export const ProyectsSection = () => {

    const projectList = proyectsData.proyects;

    return(
        <>
        
            <section className="container-proyects containers" id="projects">
                <hr />
                <div className="text-section">

                    <Text
                        h1
                        size={80}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        Proyectos
                    </Text>
                </div>

                    <Grid.Container gap={2} justify='center' css={{ mt: 100 }} className='container-sections'>
                        {
                            projectList.map((project, index) => (
                                <Grid key={index} xs={12} sm={6} md={4} css={{ position: 'relative' }}>
                                    <ProyectCard 
                                        key={index}
                                        projectPosition={index+1}
                                        title={project.title} 
                                        description={project.description} 
                                        image={project.image} 
                                        link={project.link}
                                        github={project.github}
                                        technologys={project.technologys}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid.Container>

            </section>

        </>
    )

}