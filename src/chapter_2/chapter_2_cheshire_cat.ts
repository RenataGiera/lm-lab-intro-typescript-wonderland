import { endAdventure } from '../..';
import { askQuestion, clear, print } from '../ui/console';
import { attendATeaParty } from '../chapter_3/chapter_3_tea_party';

const EXPRESSIONS = [
	'☹ Frown ☹',
	'🙂 Smile 🙂',
	'😁 Grin 😁',
	'😶 Blank Face 😶',
	'😡 Angry Face 😡',
] as const; // 💡 CURIOUS - see activity_2.md for explanations
type FacialExpression = typeof EXPRESSIONS[number];

class CheshireCat {
	name: string = 'The Cheshire Cat';
	expression: FacialExpression = '☹ Frown ☹';
}

export function meetTheCheshireCat(): void {
	clear(true);

	const theCat = new CheshireCat();

	theCat.expression = '😁 Grin 😁';

	print(
		`You can see ${theCat.name}. A wide ${theCat.expression} is hovering in the air.`
	);

	if (theCat.expression === '😁 Grin 😁') {
		print(
			`🥳 The cat allows you to continue onwards. There is the sound of a party in the distance... 🥳 `
		);
		return askQuestion('Press ENTER to continue! ', attendATeaParty);
	} else {
		print(`😱 The cat will not allow you to pass. 😱 `);
		return endAdventure();
	}
}
