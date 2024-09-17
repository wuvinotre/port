import { Header, Footer } from "../../components";

export const Home = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-neutral-800'>
      <div className='px-5 py-5'>
        <h1 className='text-2xl font-bold dark:text-neutral-300'>
          vuinishiusu - mobile developer
        </h1>
        <div className='divide-y dark:divide-neutral-300'>
          <Header />
          <div className='grid mt-5 py-5 gap-5'>
            <h1 className='text-2xl font-bold dark:text-neutral-300'>About</h1>
            <p className='dark:text-neutral-300'>Hi, I'm vuinishiusu</p>
            <p className='dark:text-neutral-300'>
              I'm graduating with a degree in Computer Science and I'm looking
              for opportunities in the field of{" "}
              <strong>mobile development</strong>, with the goal of advancing my
              studies in mathematics, physics, mechanics and quantum computing
              in the future. I have hands-on experience with{" "}
              <strong>React Native</strong> and <strong>TypeScript</strong>, and
              I'm excited to apply my skills to new professional challenges.
            </p>
            <p className='dark:text-neutral-300'>
              Outside of work, I'm passionate about anime, tokusatsu and games.
              These interests help me relax and stay creative and inspired,
              which I find valuable for my professional approach and
              problem-solving.
            </p>
            <p className='dark:text-neutral-300'>
              My first experience was in researching and developing applications
              for autistic children. I created various interactive educational
              activities to promote their learning and development using{" "}
              <strong>React Native</strong>. I worked in partnership with
              computer science teachers and had the support of the city of
              Joinville, Santa Catarina.
            </p>
            <p className='dark:text-neutral-300'>
              Shortly afterwards, I had my first opportunity to work for a
              company located in Bergamo, Italy. In this position, I learned to
              work with ORMs, performing maintenance and developing new features
              using <strong>PHP</strong> and the <strong>Laravel</strong>{" "}
              framework.
            </p>
            <p className='dark:text-neutral-300'>
              After gaining valuable experience in researching and developing
              applications for autistic children, I embarked on an exciting new
              opportunity in the field of mobile development. I began my
              professional career as a mobile developer, contributing
              significantly to the development of innovative applications for
              the retail market. In this role, I worked extensively with{" "}
              <strong>React Native</strong> and <strong>TypeScript</strong>,
              honing my development skills and acquiring advanced abilities in
              creating efficient and responsive user interfaces. In addition, I
              ran unit and integration tests to ensure the quality and
              robustness of the applications developed. My contribution resulted
              in improving the user experience and increasing the operational
              efficiency of the applications.
            </p>
            <p className='dark:text-neutral-300'>
              I'm currently involved in research and development of advanced
              applications for fingerprint detection, collaborating with a
              computer science doctor specializing in biometrics. My work
              includes developing, optimizing and integrating{" "}
              <strong>SDKs</strong> in
              {""} <strong>Kotlin</strong> and <strong>Swift</strong> with
              various platforms and mobile devices, ensuring compatibility and
              performance. In addition, I carry out rigorous{" "}
              <strong>testing</strong> to ensure the security and reliability of
              the solutions, and <strong>create detailed documentation</strong>{" "}
              to facilitate implementation by other developers. This role has
              given me the opportunity to hone my technical skills and
              contribute to significant advances in digital security.
            </p>
          </div>
          <div className='divide-y dark:divide-neutral-300'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
