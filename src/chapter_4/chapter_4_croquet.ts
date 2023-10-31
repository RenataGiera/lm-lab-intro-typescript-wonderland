import { endAdventure } from '../..';
import { meetTheQueen } from '../chapter_5/chapter_5_queen_of_hearts';
import { askQuestion, clear, print } from '../ui/console';

// 💡 FUN FACT: In Wonderland, croquet is played by using a flamingo 🦩
//              to push a hedgehog 🦔 through an arch made of playing cards 🃏
//              (It's best not to worry too much about the practicalities of this)

// 💡 Custom types don't have to be complex objects. We can use them like an alias for primitive types, like strings:
type Hedgehog = 'Hedgehog';
type CricketBall = 'Cricket ball';
type CroquetBall = 'Croquet ball';
type Football = 'Football';
type Flamingo = 'Flamingo';
type Hammer = 'Hammer';
type CroquetMallet = 'Croquet Mallet';

// 💡 We can combine types using the `|` operator:
type Ball = Hedgehog | CricketBall | CroquetBall | Football;
// 💡 Hover `Ball` and `Mallet` in VS Code and see what TypeScript says about them
type Mallet = Flamingo | Hammer | CroquetMallet;

// 👉 FIXME ❌ We're defining a TBall and a TMallet, but not specifying anything about them...
interface Croquet<TBall extends Ball, TMallet extends Mallet> {
	hit: (ball: TBall, mallet: TMallet) => boolean;
}

export function playCroquet(): void {
	clear(true);
	print('The Queen of Hearts 👑❤ invites you to play croquet 🏑');

	// 👉 FIXME ❌ Our ball and mallet are made of numbers.
	const game: Croquet<Ball, Mallet> = {
		hit: (ball, mallet) => {
			let score = 0;

			// 💡 Remember TypeScript only exists at compile time, so when this code *runs* the type we want (Ball)
			// should appear to be a string with value 'Hedgehog'.
			// ⚠️ Unlike strongly typed languages, there's no such thing as `typeof Ball` in JavaScript.
			if (typeof ball === 'string') {
				if (ball === 'Hedgehog') score += 50;
			}

			// 💡 Remember TypeScript only exists at compile time, so when this code *runs* the type we want (Mallet)
			// should appear to be a string with value 'Flamingo'
			// ⚠️ Unlike strongly typed languages, there's no such thing as `typeof Mallet` in JavaScript.
			if (typeof mallet === 'string') {
				if (mallet === 'Flamingo') score += 50;
			}

			return score === 100;
		},
	};

	// 👉 FIXME ❌ These parameters to hit() aren't right!
	if (game && game.hit && game.hit("Hedgehog", "Flamingo")) {
		print('🏆 Success! You scored! 🏆');
		print('Time to chat with the queen...');
		return askQuestion('Press ENTER to continue! ', meetTheQueen);
	} else {
		print(
			'😭 Sadly, you lost. And now the queen wants to decapitate you! 😱'
		);
		return endAdventure();
	}
}
