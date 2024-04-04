import Lottie from "lottie-react";
import AnimationContact from "../../static/images/AnimationContact.json";
import { EXPERIENCE } from "../../constants/Experience";
import { Text } from "@nextui-org/react";

export const ExperienceSection = () => {
  const renderFormattedText = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <div key={index} className="mb-4">
        <p className="text-pretty text-base text-neutral-200 md:text-lg 2xl:text-xl whitespace-pre-wrap">
          {paragraph}
        </p>
      </div>
    ));
  };


  return (
    <section
      className="mt-56 flex flex-col justify-start items-center gap-20 px-5 sm:px-20
    md:flex-row md:gap-20 lg:px-28 lg:gap-28 2xl:gap-52 2xl:px-44"
    >
      <picture className="hidden lg:flex lg:justify-center 3xl:w-[50%]">
        <Lottie animationData={AnimationContact} id="animation-contact" />
      </picture>
      <div className="w-full lg:w-[40rem] 2xl:w-[50rem] 3xl:w-[50%]">
        <Text
            h1
            size={40}
            css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            paddingLeft: "1rem"
            }}
            weight="bold"
        >
            Experience
        </Text>
        <ul className="relative border-s border-neutral-400">
          {EXPERIENCE.map((item) => (
            <li className="mb-16 pl-4">
              <div className="absolute size-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-neutral-50"></div>
              <article>
                <time className="mb-2 text-lg font-normal text-neutral-400 2xl:text-xl">
                  {item.date}
                </time>
                <h3 className="text-xl mt-3 font-semibold text-sky-300 mb-1 2xl:text-2xl">
                  {item.title}
                </h3>
                {renderFormattedText(item.description)}
                <ul className="flex gap-4 m-0 pt-3 container-cards-stack-experience">
                  {item.stack?.map((stackItem) => (
                    <li className="self-start bg-white/15 py-1 px-3 rounded-xl backdrop-blur-sm">
                      <p>{stackItem}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
