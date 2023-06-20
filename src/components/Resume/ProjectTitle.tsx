import React from 'react';

interface ProjectTitleProps {
	children: React.ReactNode;
}

const ProjectTitle = ({ children }: ProjectTitleProps) => {
	return <h2 className="mt-2 text-3xl font-semibold">{children}</h2>;
};

export default ProjectTitle;
