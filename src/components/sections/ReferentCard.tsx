import { referentsData } from '../../database/referents-data';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function ReferentCard() {

    return(
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
    )

}