const backEndStacks = ['Node.js', 'Express.js'];
const designTools: string[] = ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'];
const collaborationTools: string[] = ['Git', 'Github', 'Slack'];

const manageColorScheme = (skill: string): string => {
	if (backEndStacks.includes(skill)) {
		return 'text-green-400';
	} else if (collaborationTools.includes(skill)) {
		return 'text-orange-200';
	} else if (designTools.includes(skill)) {
		return 'text-purple';
	} else {
		return 'text-blue-200';
	}
};

export default manageColorScheme;
