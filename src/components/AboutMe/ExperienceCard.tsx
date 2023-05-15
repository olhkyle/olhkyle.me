import React from 'react';
import { CardTitle } from '.';

interface Experience {
  role: string | null;
  title: string;
  content: string | null;
  duration: string;
}

const experience: Experience[] = [
  {
    role: null,
    title: '@Zerobase',
    content: 'FE Offline Program',
    duration: '2023.01-05',
  },
  {
    role: 'Programming Operator',
    title: '@DesignThou',
    content: 'Architecture Education Platform',
    duration: '2022 ~',
  },
  {
    role: 'Educator',
    title: '@Class101',
    content: 'Architecture All in One Class(SketchUp)',
    duration: '2021 ~',
  },
  {
    role: 'Certificate',
    title: '@Interior Design Certificate',
    content: null,
    duration: '2020.11',
  },
  {
    role: 'Exchange Student in Germany',
    title: '@HochSchule Augsburg',
    content: null,
    duration: '2019.03-09',
  },
];

const ExperienceCard = () => {
  return (
    <>
      <CardTitle>Experience</CardTitle>
      <ul className="flex flex-col gap-2 mt-5 mb-10 break-keep text-lg">
        {experience.map(({ role, title, content, duration }) => (
          <li key={title} className="flex gap-2">
            <p>
              {role} <u>{title}</u> - {content} / {duration}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExperienceCard;
