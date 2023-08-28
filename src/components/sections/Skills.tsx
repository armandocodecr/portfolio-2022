import { Text, Grid, Image } from "@nextui-org/react";

import SkillsImages from '../../static/images/Skills'

export const SkillsSection = () => {

    return(
        <>
        
            <section className="container-skills containers" id="skills">
                <div className="text-section">

                    <Text
                        h1
                        size={80}
                        css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        Conocimientos
                    </Text>
                </div>

                <Grid.Container gap={5} justify='center' css={{ mt: 75 }} className='list-skills'>

                    {
                        SkillsImages.map( skill => (
                            <Grid key={skill.title} xs={12} sm={6} md={4} lg={3} xl={2} css={{ position: 'relative'}}>
                                    <div className='images-skills' data-aos="fade-up-left">
                                        <div>
                                            <Image src={skill.link} />
                                            <Text weight='bold' >{ skill.title }</Text>
                                        </div>
                                    </div>
                            </Grid>
                        ))
                    }
                   
                </Grid.Container>

            </section>

        </>
    )

}