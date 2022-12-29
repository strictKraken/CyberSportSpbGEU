import type { NextPage } from "next";
import Image from "next/image";

const Description = () => (
  <section>
    <div className="container">
      <div className="flex">
        <h3>Привет, мы wild griffins </h3>
        <div>
          <p>
            Киберспортивная организация на базе Санкт-Петербургского
            государственного экономического университета, направленная на
            продвижение игроков и проведение турниров.{" "}
          </p>
          <p>
            В ряду наших студентов есть спортсмены играющие в высших лигах,
            таких как: Dpc, Fpl и другие
          </p>
        </div>
      </div>
      <div>
        {/* <Image
          src="/images/LogoPng.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
        ></Image> */}
      </div>
    </div>
  </section>
);

const About: NextPage = () => (
  <>
    <div className="h-screen bg-main-bg">
      <Description />
    </div>
  </>
);

export default About;
