import markwordleguess, { Mark } from "./markwordleguess";
import { MarkedGuess } from "./markwordleguess";
xtest("returns expected wordle mark", () => {
  expect(markwordleguess("WORLD", "WORDS")).toStrictEqual({
    guess: "WORLD",
    result: [2, 2, 2, 0, 1],
  } as MarkedGuess);

  expect(markwordleguess("XXXXX", "WORDS")).toStrictEqual({
    guess: "XXXXX",
    result: [0, 0, 0, 0, 0],
  } as MarkedGuess);

  const expectedResult: Mark[] = [2, 2, 2, 2, 2];
  expect(markwordleguess("WORDS", "WORDS")).toStrictEqual({
    guess: "WORDS",
    result: expectedResult,
  } as MarkedGuess);
});

test("can handle double letters", () => {
  expect(markwordleguess("LULLS", "LEVEL")).toStrictEqual({
    guess: "LULLS",
    result: [2, 0, 1, 0, 0],
  } as MarkedGuess);

  expect(markwordleguess("LLLLL", "LEVEL")).toStrictEqual({
    guess: "LLLLL",
    result: [2, 1, 0, 0, 0],
  } as MarkedGuess);

  expect(markwordleguess("APPLE", "PARTY")).toStrictEqual({
    guess: "APPLE",
    result: [1, 1, 0, 0, 0],
  } as MarkedGuess);
});
