import readlineSync from 'readline-sync';
export const evenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    correctAnswers = 0
    while (correctAnswers < 3) {
        let number = Math.floor(Math.random() * 100)
        let answer = readlineSync.question(`Question: ${number}`);
    }
}