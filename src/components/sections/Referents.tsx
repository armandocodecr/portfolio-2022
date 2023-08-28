import { Text } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { referentsData } from '../../database/referents-data';

export const ReferentsSection = () => {

  return (
    <>
      <section className="container-contact containers" id="referents">
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
            Referentes
          </Text>

          <Text
            h2
            size={20}
            weight="light"
            style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
          >
            Les quiero compartir estos desarrolladores que son tanto creadores de contenido como referentes destacados en mi trayectoria como programador y profesional 
            en el mundo del software.
          </Text>
        </div>

        <div className="container-cards-referents">
            {referentsData.map((referent) => (
              <div className="myCard" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                <div className="innerCard">
                  <div className={`frontSide ${referent.classForImage}`}>
                    <p className="title">{ referent.name }</p>
                  </div>
                  <div
                    className="backSide"
                    style={{ backgroundImage: referent.stylesBackground }}
                  >
                    <p className="title">{ referent.phrase }</p>
                    <div>
                      <a
                        href={ referent.github }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="iconos-cards" id="git" />
                      </a>
                      <a
                        href={ referent.linkedin }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="iconos-cards" id="linkedin" />
                      </a>
                      <a
                        href={ referent.twitter }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter className="iconos-cards" id="twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        <div/>
      </section>
    </>
  );
};
