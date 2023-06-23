import React from 'react';
import DoubleSubTitle from './DoubleSubTitle';
import { Callout, HighlightText } from '../common';
import ThirdSubTitle from './ThirdSubTitle';
import ProjectTitle from './ProjectTitle';
import { Link } from 'react-router-dom';

const Project = ({
	project: { title, subtitle, team, composition, links, callout, overview, myTasks, improvement, techStacks },
}: {
	project: Project;
}) => {
	return (
		<li className="grid grid-cols-1 sm:grid-flow-col gap-4 mt-[2.5rem] sm:grid-cols-3 sm:grid-rows-[100px_1.1fr_1fr_0.5fr]">
			<div className="row-span-1 sm:row-span-4">
				<ProjectTitle>{title}</ProjectTitle>
				<h3 className="text-xl text-semibold">{subtitle}</h3>
				<div className="flex gap-1 mt-2 sm:flex-col md:flex-row sm:gap-0">
					<p className="responsive-text-gray">{team ? 'Team Project' : 'Personal Project'}</p>
					<p className="responsive-text-gray">{composition}</p>
				</div>
				<div className="sm:row-span-1 mt-3">
					<ThirdSubTitle>Links</ThirdSubTitle>
					<ul className="flex flex-row flex-wrap gap-2 sm:flex-col">
						{links.map(({ title, href, icon }) => (
							<li key={title} className="inline-flex items-center gap-1">
								{icon}
								<Link to={href} target="_blank" className="hover-underline">
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{callout !== '' && <Callout margin="mt-10" content={callout} />}
			</div>

			<div className="row-span-1 sm:col-span-2 sm:h-[300px]">
				<DoubleSubTitle>Overview</DoubleSubTitle>
				<p>{overview}</p>
			</div>

			<div className="row-span-1 sm:col-span-2">
				<DoubleSubTitle>My Tasks</DoubleSubTitle>
				<ul className="flex flex-col gap-2 list-disc ml-6">
					{myTasks.map(task => (
						<li key={task}>{task}</li>
					))}
				</ul>
			</div>

			<div className="row-span-1 sm:col-span-2">
				<DoubleSubTitle>Improvement</DoubleSubTitle>
				<ul className="flex flex-col gap-2 list-disc ml-6">
					{improvement.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>

			<div className="row-span-1 sm:col-span-2">
				<DoubleSubTitle>Tech Stacks</DoubleSubTitle>
				<div className="flex flex-wrap gap-2">
					{techStacks.map(stack => (
						<HighlightText key={stack} color="text-blue-200">
							{stack}
						</HighlightText>
					))}
				</div>
			</div>
		</li>
	);
};

export default Project;
