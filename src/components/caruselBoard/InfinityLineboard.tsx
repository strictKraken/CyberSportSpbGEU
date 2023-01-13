import Image from "next/image";
import { GameImage } from "../../testData/staticData";

type Props = {
  slides: GameImage[];
};

const InfinityLineBoard: React.FC<Props> = ({ slides }: Props) => {
  return (
    <div className="h-[64px] overflow-hidden relative">
      <div className="w-[200%] flex items-center absolute top-0 h-full animate-scrollLine">
        {slides.map((i) => (
          <div
            className="h-[64px] min-w-[360px] flex justify-center items-start"
            key={i.id}
          >
            <Image
              src={i.src}
              alt={i.name}
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        ))}
        {slides.map((i) => (
          <div
            className="h-[64px] min-w-[360px] flex justify-center items-start"
            key={i.id}
          >
            <Image
              src={i.src}
              alt={i.name}
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        ))}
        {slides.map((i) => (
          <div
            className="h-[64px] min-w-[360px] flex justify-center items-start"
            key={i.id}
          >
            <Image
              src={i.src}
              alt={i.name}
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityLineBoard;
