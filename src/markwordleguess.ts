/**
 * PSEUDOCODE
 * function: markWordleGuess
 *  inputs:
 *  - guess (string)
 *  - hiddenTarget (string)
 *  return:
 *  - markedGuess
 *  set result = [0,0,0,0,0]
 * 
 *  for each LETTER, INDEX in GUESS
 *      set LETTEROCCURENCESINHIDDENTARGET to the number of times the letter appears in HIDDENTARGET
 *      set NUMBEROFOCCURENCEINGUESS to the number of occurence in GUESS
 *      if NUMBEROFOCCURENCEINGUESS <= LETTEROCCURENCESINTARGET
 *          if LETTER = HIDDENTARGET[INDEX]
 *              set RESULT[INDEX] to 2
 *          else
 *              set RESULT[INDEX] to 1
 *          endif
 *      endif
 *  endfor
 * 
 *  set MARKEDGUESS to an object containing the guess and the result array
 *  return MARKEDGUESS
 *              
 *  * 
 * 
 * 
 */


/**
 * function: getLetterOccurence
 *  inputs:
 *      - inputString (string) LULLS
 *      - letterIndex (number) 0
 *  return:
 *      - occurenceNumber (number) 1
 * 
 *  split INPUTSTRING into its individual letters
 *  set LETTER to INPUTSTRING[INDEX]
 *  get the indexes where LETTER appears in INPUTSTRING
 *  set OCCURENCE to find the index of INDEXES where it equals LETTERINDEX
 *  return OCCURENCE + 1
 */


export interface MarkedGuess {
    guess: string;
    result: Mark[];

}

export type Mark = 0 | 1 | 2;


export default function markWordleGuess(guess: string, hiddenTarget: string): MarkedGuess {
    const result: Mark[] = [0, 0, 0, 0, 0];

    for (let index = 0; index < guess.length; index++) {
        let letter = guess[index];
        const occurencesInTarget: number = hiddenTarget.split("").filter(x => x === letter).length;
        const guessOccurenceNumber: number = getLetterOccurence(guess, index);

        if (guessOccurenceNumber <= occurencesInTarget) {
            if (letter === hiddenTarget[index]) {
                result[index] = 2;
            }
            else {
                result[index] = 1;
            }
        }
    }

    const markedGuess: MarkedGuess = {
        guess: guess,
        result: result
    }
    return markedGuess;
}





function getLetterOccurence(inputString: string, letterIndex: number): number {
    const indexes: number[] = [];
    const searchLetter = inputString[letterIndex];
    const inputStringArray = inputString.split("");

    inputStringArray.forEach((letter, index) => {
        if (letter === searchLetter) {
            indexes.push(index);
        }
    })

    return indexes.findIndex(x => x === letterIndex) + 1


}