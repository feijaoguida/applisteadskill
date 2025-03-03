import { getImageProps } from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function HeroProducts({
  heading = "EADSkills",
  description = "Levando você a outra dimensão",
  buttons = {},
}: Hero3Props) {
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 1440, height: 375, src: "/hero2.png" });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    height: "40vh",
    width: "100vw",
    backgroundImage,
    backgroundSize: "cover",
  };

  return (
    <section className="flex flex-1 justify-center items-center" style={style}>
      <div className="container flex w-full items-center">
        <div className="mx-auto flex flex-col w-full justify-end justify-items-end text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-orangeead text-4xl font-bold lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="text-orangeead mb-8 max-w-xl lg:text-xl">
            {description}
          </p>

          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto text-white">
                <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
