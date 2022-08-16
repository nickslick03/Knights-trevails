type chessPoint = [number, number];

export const knightMoves = (startPoint: chessPoint, endPoint: chessPoint): chessPoint[] => {
    const path = findPath([startPoint], endPoint);

    return path;
}

const findPath = (currentPath: chessPoint[], endPoint: chessPoint): chessPoint[] => {
    if(pointsOverlap(currentPath[currentPath.length - 1], endPoint)) return currentPath;
    
}

const pointsOverlap = (point1: chessPoint, point2: chessPoint) => 
    point1[0] === point2[0] && point1[1] === point2[1];

const pointOutOfBounds = (point: chessPoint) =>
    point.every(coord => coord >= 0 && coord <= 7);

