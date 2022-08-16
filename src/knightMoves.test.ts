import { knightMoves } from "./knightMoves"



test('knightMoves', () => {
    expect(knightMoves([0, 0], [0, 0])).toEqual([[0, 0], [0, 0]]);

    expect(knightMoves([3,3],[0,0])).toEqual([[3,3],[1,2],[0,0]]);
})