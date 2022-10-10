import { seedProyects } from '../../database/proyects-data';
import { Text, Card, Col, Row, Loading, Modal, useModal, Button, Grid, Image } from "@nextui-org/react";
import { FaGithub, FaEye, FaWindowClose } from 'react-icons/fa';

export const ProyectCard = ( {projectPosition, title, description, image, link, technologys}: seedProyects) => {

    const { setVisible, bindings } = useModal();

    return (
        <>
            <Card isHoverable isPressable css={{ w: "100%", h: "350px", cursor: 'pointer' }} className='card-item' onClick={() => setVisible(true)} >
            
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col className='position'  css={{ display: 'block' }}>
                    <Text 
                        size={15} 
                        weight="bold" 
                        transform="uppercase" 
                        color="#9E9E9E" 
                        css={{ pl: 15, textGradient: "45deg, $purple600 -20%, $pink600 100%", }}
                        >
                           Proyecto N° {projectPosition}
                    </Text>
                    <Text h3 color="white"  css={{ pl: 15 }}>
                    {title}
                    </Text>
                </Col>
            </Card.Header>
    
            <Card.Body css={{ p: 0 }}>
                {
                    image ? (
                        <Card.Image
                            src={ image }
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt="Card example background"
                        />
                    ) : (
                        <Loading size="md" css={{ height: '100%', display: 'flex', justifyContent: 'center'}}/>
                    )
                }
            </Card.Body>
    
            <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#0f111466",
                p:'12px',
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
            >
                <Row align="center" css={{ padding: 3, position: 'relative'}}>
                    <Col>
                        <Text color="#d1d1d1" size={15} weight='bold' css={{ width: '90%', textShadow: "0 .25rem 1rem rgba(0,0,0,.75)", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                            { description }
                        </Text>
                    </Col>
                </Row>
    
            </Card.Footer>
    
        </Card>
        <Modal
            scroll
            width="600px"
            css={{ width: '90%', padding: 5, margin: '0 auto' }}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
        >
        <Modal.Header>
          <Text id="modal-title" weight='bold' css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={18}>
            {title}
          </Text>
          <FaWindowClose onClick={ () => setVisible(false) } id='btn_close' />
        </Modal.Header>
        <Modal.Body id='container-modal-body'>
          <Text weight='bold'>Descripción breve del proyecto:</Text>
          <Text id="modal-description">
            {description}
          </Text>
          <Grid.Container gap={2} >
            <Grid xs={12} sm={4} className='technologys-list'>
                <Text weight='medium' h5>Tecnologías usadas:</Text>
                    {
                        technologys.map( (technology, index) => (
                            <Text key={index}>{technology}</Text>
                        ))
                    }
            </Grid>
            <Grid xs={12} sm={8} css={{ position: 'relative', mt: 5 }}>
            <Image
                width={320}
                height={180} 
                css={{ borderRadius: 7 }} 
                src={image}
                alt="Default Image"
                objectFit="cover"
            />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer justify='center'>
          <Button auto css={{ fontSize: 25, background: '#F1502F' }}>
            <a href='https://twitter.com/CodeArmando' target='_blank' style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                <FaGithub />
            </a>
          </Button>
          <Button auto color='success' css={{ fontSize: 25 }}>
            <a  href={link} target='_blank' style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                <FaEye />
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )

}