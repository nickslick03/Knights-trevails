import {  pointOutOfBounds, pointsOverlap, getPoints, knightMoves } from "./knightMoves";

test('knightMoves helper Functions', () => {
    
    expect(pointsOverlap([1, 1], [1, 1])).toBe(true);
    expect(pointsOverlap([1, 1], [1, 2])).toBe(false);

    expect(pointOutOfBounds([0, 0])).toBe(false);
    expect(pointOutOfBounds([8, 0])).toBe(true);

    console.log(getPoints([[0, 0], [1, 2]]));
});

test('knightMoves', () => {
    expect(knightMoves([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]]);
    console.log(knightMoves([0, 0], [1, 3]));
});