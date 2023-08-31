import { Text } from "@nextui-org/react";
import { ReferentCard } from "./ReferentCard";

export const ReferentsSection = () => {
  return (
    <>
      <section className="container-contact containers" id="referents">
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
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Les quiero compartir estos desarrolladores que son tanto creadores
            de contenido como referentes destacados en mi trayectoria como
            programador y profesional en el mundo del software.
          </Text>
        </div>

        <ReferentCard />
        <div />
      </section>
    </>
  );
};
