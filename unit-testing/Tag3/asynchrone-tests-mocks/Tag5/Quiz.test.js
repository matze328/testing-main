const { Fragen } = require('./fragen'); // Annahme: Fragen-Modul mit den Fragen implementiert
const isRightSolutionForQuestion = require('./isRightSolutionForQuestion');

describe('isRightSolutionForQuestion function', () => {
    test('Correct answer for existing question key should return true', () => {
        expect(isRightSolutionForQuestion("example_key", "correct_answer")).toBe(true);
    });

    test('Incorrect answer for existing question key should return false', () => {
        expect(isRightSolutionForQuestion("example_key", "wrong_answer")).toBe(false);
    });

    test('Non-existent question key should throw a ReferenceError', () => {
        expect(() => {
            isRightSolutionForQuestion("non_existent_key", "any_answer");
        }).toThrow(ReferenceError);
    });
});