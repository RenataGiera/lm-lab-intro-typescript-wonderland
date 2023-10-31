import { endAdventure } from '../..';
import { meetTheCheshireCat } from '../chapter_2/chapter_2_cheshire_cat';
import { clear, print, askQuestion } from '../ui/console';
import { parseHoleInput } from '../ui/parse_input';
import { Hole, HOLES } from './chapter_1.types';

export function enterTheRabbitHole(name: string) {
	clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
	print('You can see a number of holes: ');
	HOLES.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which number hole will you choose?', chooseHole);
}

function chooseHole(input: string) {
	// first we have to check our user input is valid
	// We might end up with a valid Hole, or we might end up with `undefined` if the input is invalid
	const hole = parseHoleInput(input);

	// 💡 Hover the `hole` variable here and notice how the inferred type DOES include undefined
	if (hole === undefined) {
		print(`😮`);
		print(`${input} is an invalid input 😭`);
		return endAdventure();
	}

	// the input is valid!
	// 💡 Hover the `hole` variable here and notice how the inferred type
	//    DOESN'T include undefined anymore - thanks to the `if` check above!

	// this allows us to pass it into the `enterHole` function which REQUIRES a valid Hole
	return enterHole(hole);
}

export function enterHole(hole: Hole): void {
	clear(true);


	if (hole === 'Rabbit') {
		return meetTheCheshireCat();
	} else {
		print(`WHAAAAT ❓🤯😅❓`);
		print(`You can't find adventures there!`);
		return endAdventure();
	}
}
