type chessPoint = [number, number];


const knightMoves = (startPoint: chessPoint, endPoint: chessPoint): chessPoint[] => {
    let path: chessPoint[] = [];
    const findPath = (currentPath: chessPoint[]) => {
        if(path.length > 0) return;
        if(pointsOverlap(endPoint, currentPath[currentPath.length - 1])) {
            path = currentPath;
            return;
        }
        const nextPoints = getPoints(currentPath);
        const nextPaths = nextPoints.map(point => currentPath.concat([point]));
        nextPaths.forEach(path => findPath(path));
    };
    findPath([startPoint]);
    return path;
};

const pointsOverlap = (point1: chessPoint, point2: chessPoint) => 
    point1[0] === point2[0] && point1[1] === point2[1];

const pointOutOfBounds = (point: chessPoint) =>
    point.some(coord => coord < 0 || coord > 7);

const getPoints = (path: chessPoint[]) => {
    const currentPoint = path[path.length - 1];
    const nextPoints: chessPoint[] = [];
    for(let x = -2; x <= 2; x ++) {
        for(let y = -2; y <= 2; y ++) {
            if(x === 0 || y === 0 || Math.abs(x) === Math.abs(y)) continue;
            const newPoint: chessPoint = [currentPoint[0] + x, currentPoint[1] + y];
            if(pointOutOfBounds(newPoint) || path.some(point => pointsOverlap(point, newPoint))) 
                continue;
            nextPoints.push(newPoint);
        }
    }
    return nextPoints;
};

export { knightMoves, pointOutOfBounds, pointsOverlap, getPoints };