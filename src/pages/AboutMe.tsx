import React from 'react';
import { Title } from '../components';

type Lang = 'KOR' | 'ENG';

const langs: string[] = ['ENG', 'KOR'];

const AboutMe = () => {
  const [currentLang, setCurrentLang] = React.useState<Lang | string>('KOR');

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <Title>About Me</Title>
          <ul className="flex gap-2">
            {langs.map((lang, idx) => (
              <li
                key={idx}
                className={`${
                  currentLang === lang ? 'font-bold bg-black text-white' : 'font-normal'
                } px-4 py-2 rounded-lg cursor-pointer`}
                onClick={() => setCurrentLang(lang)}>
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center p-4 w-64 border-[1px] border-gray-200 rounded-full">
          <img src="./own-furnitures.png" alt="furnitures" className="block w-full h-full bg-transparent`" />
        </div>
      </div>

      <p className="mt-10">
        Hi! I'm Hyukmin, a Junior <b>FrontEnd Developer</b> based in Seoul, Korea. Orignially, I major in Architecture,
        specialized in Architectural design and system. Currently, I'm trying to get FE Developer Job. I just got into
        programming field, because I like to designing and building digital products, such as web-app.
      </p>
      <ul className="mt-10">
        <li>I have the strength to keep the basic, no matter what project or work I participate in.</li>
        <li>I really like to make something related with visual.</li>
        <li>
          I keep finding ways on how to enhance UI/UX on products. As a FE Developer, UX should be considered as the
          best, especially.
        </li>
      </ul>
    </>
  );
};

export default AboutMe;
