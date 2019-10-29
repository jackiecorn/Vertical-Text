import { dispatch, handleEvent } from './codeMessageHandler';
// figma.showUI(__html__);

const convert = async () => {
	const text = figma.currentPage.selection[0] as TextNode;
	// const container = figma.createFrame();
	// text.parent.appendChild(container);
	await figma.loadFontAsync(text.fontName as FontName);
	let lines = text.characters.split('\n') as any[];
	lines = lines.reverse().map((line, index) => {
		line = line.replace(/\./g, '。');
		line = line.replace(/\,/g, '、');
		line = line.replace(/\“/g, '『');
		line = line.replace(/\”/g, '』');
		line = line.replace(/\‘/g, '「');
		line = line.replace(/\’/g, '」');
		const lineNode = figma.createText();
		lineNode.fontName = text.fontName;
		lineNode.fontSize = text.fontSize;
		lineNode.textAutoResize = 'HEIGHT';
		lineNode.lineHeight = text.lineHeight;
		lineNode.characters = line;
		lineNode.resize(text.fontSize as number, line.length * ((text.lineHeight as any).value as number));
		lineNode.textAutoResize = 'HEIGHT';
		// container.appendChild(lineNode);
		lineNode.x = index === 0 ? 0 : index * (((text.lineHeight as any).value as number) + (text.fontSize as number));
		return lineNode;
	});
	const group = figma.group(lines, text.parent);
	group.x = text.x;
	group.y = text.y;
	text.remove();
	// container.resizeWithoutConstraints(group.width, group.height);
	figma.closePlugin();
};

if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'TEXT') convert();
