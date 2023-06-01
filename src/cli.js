import readlineSync from 'readline-sync';

export const hello = (game) => {
    console.log(game)
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello ${name}!`);
} 
