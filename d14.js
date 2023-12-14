const input = `.OO..##.###..#O.O..O#.OOO.....#..O##O#.OO...O..##.O.O.......##O...O...O#O.O.#..O..O.#O..OO...#......\n....OO..#.#...O#.O..#O..#OO...OO..O......O#........O...#..OO..#.#.O#..OO...O####.O...O.O.#.O..O.O..O\n.O#.......O.OO#OO##O#O..O.O....#.OO..O...O.OO........O..#...O.O......##....O.....##.O.#.#.O..O......\n..##.#.....#..#.O#O...O..O...OOO.##O.O##...O#.OO.#....OOO.OO.#O.O.O#...OO.OO.....O#..#...O...OO#...O\nOO..#..OO#..#..O..#O..O.O##O#OOO.#...OO.#....#..#....O.####O.##..O......#O..OOO#O.#...#.O...OO...OO#\n#.O.#O.#.#..O.#.............#.#.OO......#.O.O##O###........#.....#.....#.....O.O.OO.O....O.......O.#\nO#...#...........#..OO...O..#.....#...O.#.......O#.....##O#.OO##.......#..O......#..O..O.#O.#.#..O.#\nOO...O##..O.#.......O#.........OO#..O..#O..#OO.O........#.O.O.O....OO#...#.#.#O...##O.#OO.#.....#..O\n#OO...O...O...O....O...............O.#O..OO##O##O.....#.##...OO.O.#.##.##.O..#..#.O..#.#..O.........\n.O..O.#...##..#.#OO....#.O#...OO#.......O..OO.#...OO##..O..O...O.O...O.#.O#.....O..OO.O.#.OO..#.##..\n...OO.O.O.O#....#...O...#....OO.#O.#O..O.OO..OOO.O....#O.#...#.O#.O............#......O.O....#OO##.#\n...#O......#O#..O....#.##..O.O.O#..#O.#O...O...#..#O..##.O#..O#....O##.O.#OOO.#........O##.OO.O..OO#\n#OOO....#O...O.O....O.......O...O..#....##.#..#.O#O#.O#....#.#.#O#....#.#.....##.#O..OOO....#.O.....\n#OO.O...#O.O....O..#..O.#....#....O#..O...##..#..OO#.....#O.O#O..O....#OO....##OO....#...OOOO.OO###.\nO..#..O#.O.#..OO.#.OO...O..O......#........#O......O.OO.#....#..O#O.......OO##O..##OOOO.#.#OOO.....O\n...#OO.#OO.O.##.O#.OO#...#..#.O##O#...#.#O...#.....#..O..O....O.OO.O.#..O.#.O...#.O#..O....O.#...O#.\n#....O.....O.O...#..O....#..O..O.OO...#....O..O...#.....#...#....O.#.OO...OO#...O....#O.O..O.OO.O..O\n..O#.....#O#....#.....OOO.#.......OO.O..#.#....#O......O.#.O.#..O...#.O...O..O.##O.O#O..#.O......#.#\n....#O#.#..O#.OO.#.#.O.#......#OO...O#OO.........OOO..##...#..##O#..OOO...O..O..O##O...#..#.O.O..#..\n..O#.O.......OOO..##..#...#....#.#..#O.OO..O..##..OO#.O...O..#OO...##O.#O..OO.....#O..#.....#O.....#\n...OO.O.#.O.O..##O#...OO...##.O..OOO##.O.O.#..#.OO..O...O.#....O.O.....O##.#O.O.O#.#.......OO#......\nO...#.O...O...#..OO...O..#..#........O...#...#......O#.#.....O.#.........#.#......O#O.O.........#...\n.......O#...#...........O.#O#.O#.#.O.O..O..OO.#......##.OO..#......OO#....#O#OO.O.#..O#..O.OO..O..##\n.O.....O.#.........O...O...O...O...OOOO..O....OO....#.#....O#.#..#.OO.OO....#.......#...#OO.....O.OO\nO....OO....O..O.OO.###..O##.OO.#......O.O...##...#O...O..O...##.O.O...O....O.#OO.....O.....O.O.OO.OO\n#O......OO....##..O..###.O....#.#.#.OO.............O.O.OOOO#.O.O..#O...O#..O......O.O.O.#.#.......O.\nO#O.....#...#..O#.#....#..###..O..O...#....O....##.....#...O#.#.O.O......O..OOOOO....OO..#...#.OO#..\n..O........OO....##...#O.....#.O.....O#.O..#.O.#.O......O#...OOO....O...#..OO....O..#...O.O..##.....\nO...O..O.O....O.OO.O.OO..OO...#O...O.#.O..#O...#...#...O..##...#...OO#.....##..O#O.O....#.....OO#..O\n...O#O..O..##.OO.......#.#O...O..#.#...#.O.#O##OOO.OOO...#.....O....##.....OOO.....O..O.O#.O....O...\nO#..#O.O....#.........O#.OO#...OO......#......O.#...............O##OO.....O.....O.O..##..O#....#.OO.\n#O..O.OO....##O......O.O...O#O..#.O..........O....#........O#.#..O..O............#..#...OO#.###..#.#\n...#...#.#O....O.O.....OO.O.O...O.#.#.O...OO..O#....O#O......O.O..##.#.O.....#..O.O.#.#O...O.#......\n.O...O#.O.......O.#....O.#...#.#..#O.....#..#..#.#O#..#.......O..#.#..O.OO.#OO.OOO..O....#.....OO#.O\nO#.#..#.O..O..#O.......O.#..#....#.O..#...#......O...O##....O..#...O....#O..#.....OO.O.O#..O.#..#O..\n#.#.....O...#O.#..O...#O..##..#O..#O...O.#OO...#....OO#..O.#O#O........OOO...O##..#..OO.O.O.O.O.....\n..OO...#..OOO.O#..#...O..O.......O.#.#.O#.##OO....#..O....#..#.O.#O...O.O#O........O#OOOO#.#..O#.#..\n.O....#.O#OOO.....O.#O............O...O#...O...O..O.#..O.O.....O#.O....O......O...O.O..OOO..O.##.O..\n#...#........#..........###.O....OO.#.....#OOOO.OO#.OO...##...OO...O#.......O...#.#..#O..#.....#O#O.\nO.O.#...O.#.....OO...O.O#......#........#..O...O..O.#..OO#.....#...O.##O#....O#..O#...##.O.O.#.#....\n............OO.....O........##O.O...#..#.O.#...OO..#.O.#O.............O..#O.....#...O.#....O..O#..#.\n.#..#.O.#......O..O##O.O.#..O..#O.O..O.O........O.......#.#.#O.#..O...O...O....O.O#...#..OO..O....OO\n#..#..O....OO#.#.O.#......O...O.O#O...O#...O...#...#O.#....#..#O...O...........#.#.#..O##..#........\n..O......O.#.OO.#O...O..#O...OO.#.....##...#.#....O....OO.#O.O.#....OO..#....#.#...#.O.....OO#..O...\n#..........#...O.O....##....OO..O..O..#...#..###....##..O#..#.........#.....O#...#.#.......#.##.##O.\n###.O.#..#.O.O.O..O..O...O...#O...O##.#..#O..O...#....O.....#..##......OO.#O...O#..O.O.O......#...OO\n....O#........O.O#.O#O#...O.......#..O.#..#........O.....O#..O..O.OOO....OO.....#....O#.#..O.....##.\n#.#O...#.O#O..#.#OOOO#.......#....O...O#.##.O....#..O.......O.##.#.OO...O...#O..O..#O.#......O.O.##.\n.#O...OO#......O...#..##............O...##...O.#O....#..OO......O.O##OO..OO....##O.##..O............\nO.O..OO.O.#.#....#..O.O.O.OOO...OO..#....O....O.#.#....#.O#.#.....O#O...O.OO..O.#O.#..OO#.O#........\n#..#.O.##.##...#OO..O...OOOO#O##..#...#.##....#O.#O#.O.O#.#.O#...#.OO.......O........O..#.#.OOO#....\n##....O...O#....O...O.#OO.O..O.....O#O#.#...OO.........#.......O.#.#..O..#O...#..O.#...#.##...O..O.O\n.........O...O.O...#..O.O..OO.#...O.#.O........O.O.O....O...O..O..........O....O......O..#O.O..#O...\n.......#.#....O#OOO.O.O..O.##...O..###.......O#.##...O.O....#.OOO..O...#.#.......#O.OO...O...OO.O...\n.O...O...O....#.O.#...#..##O....#..O....O#..O.#.O..#...........#..O..##OO.......##..#.....O#...O#..#\n...O....O....#....O..####.#O#.....#O.O..#..#O.OO...#...O.##.#.#....#...O...O..#.....OO.O....#..O..O.\n.OO#.#...#....O.#O#.##....OO............O.....#.OO#O.#O.#..#...#.O....O.O..#..##.......O..O.#..##O.O\nO...#.........#.O....O..O.....#.......#.OO...OO.#O#.#...OOO.O.O#.O.#...#O......#....O.......#.O.#.O.\n.....O.............O.#..#.#..#.#...#..OOO....#.OO.O...O..#.##O.#O...O.O.OO......#....OO..O..........\nO....#....#.#....#.........#...O.O#....OO.#..#O..#....OO...#....O...O#...O.......OOO...#......#...#O\n..O..##O.#O.OOO..#..O.#....#.OOOO..O.O.....##O.....O.#.O.###..##....O..OOOO..#.#OO.O.OO.#O#..#...#.O\nO#...O......#..#.....#..##.#OO#O#.....O...##....OO...O##...O....O.#...#O..#.O#..#O.O..#...#...OOO..O\nO...##.O..O..O#....#..O........O....O#...O..O......O...OO...OO.#OO.O..#....O#O....O..#..#..OO.OO....\nO..#.#O....O..O.O..O#...O.O...O..#.#.#..##.#O......#...OOO.#O...#..O.....O###O.....#.......O#.O.O...\nOOO#..#.#...O...O..O.O..O#O.....#O.#..O....O...O.#..O.#...O#.......#.....#O.#.#..O...##..#.....O...O\nO#...O#....O.#.#......O.....O.##.......#.O.......#.#.#...#..#O....##O......O..O.#.#..O..#..O.O#O.O..\nO.O...O##.O#.....O......#...O.#...O.O..#........O..O..O#.O..OO#O.OO.........O...O..#.O......O...O#.O\n..#......OO.#....O...O..O..##...#O#O#O..O..O......O..O.#O#..O......O..........OO..OOO#..#.OO....O...\n.......##......#.O..#....#.O#O..O#...O#....O.OOOO..#.O.O..O..O..O.........O...O#...O..#O..#.#..O...O\n.O#..OOOO.O......#O......OOO#.#.O.#O...##...O.O...##.O#.O.#.......#.......##...#O.O...#.#..O..##O..O\n....OO......#.#.....O.#.OOO.O#.#...O.##.O..OO....#OO..O..O.O.O#..OO....O.O..#.O.##..O...OO..OO..OO#.\n........#O.....#....O#.#OOO.O...........OO....#.#.....OO#..#OO..#..#.....O#O..OO..OO..O......#..O.O.\nO#O....#.#......O#...#.##O..OO.O.....#O..#..O..O......O##..#OO...OOOO.....O#....O..O.....OOO...#O..O\n...O..#..O......OO.#.....#.O...O.O.#.O..OO..#....#...#....O.#O.O...O.O......O......O..#...#O###.OO..\n#O###.....#....#.#O..#...#O..OO....#.O...#.##OO.#.#.#.....#....O.###...#....#.#...O.......O...O..#.O\n..#..O.O..#.........O#..OOOO###..O##.#........O...#.#O#..#...O...O#....O..#.#...O.O..OO.....O.......\n#...O..#.......O........O....#.O......#...##.##......O.....O.##.O..O.....##...#OOO..O...O##.O.O.....\n......#.OO....###.......#.###..OO#.OOO#O#.OOO#..O....OO........#...O...O#.OO.#....O#.......#..#..#..\n#..#OOO....#.#.O.O..........#O....O#...O..O..#...O....O#..##.O..O.#O...#.#.#..O..O.O.#O..O..O...#.#.\n.#...O.O##.....#..O.....OOO.#.....#OOO#.#..O.....O.#.O.O.#.#.O.O#.........O....#...#O.O##.##..O.O#.O\nOOO...#O.OO....#.OOO..O....O.OO.O.#.O.#.#...#....OO........O..#..OO....#O....#.#O##.OO#O#.##OO.O.O.#\n...O#..OO.....O#...#O........O....O#O....OO...#....O###..##.O..#..#.#..O..#O.OO..O........##O#.#..OO\n.O...#..#....O.##...#.........##.#..O.O.....#.##..O.#O.#..O#...#....#.#.........##.O...O...OO#..O..#\nO....##.O...O........O#..#...OO#O..OO..#.........##......O.......OO..O...O.O..#..........#.O..#...O.\n###.#.........#OO....##...O#...O....O........#...#.O.#O.#.....##..O..#O.##......#.#.O.......O...O...\n..#.OOOO..O......O#O.O.#.O.#..#.O...O..O.O..##O.O.......#...O#..#..O.#.#.O#.##...O......#.#...#.....\nO.#.OOO.#......O....O..O...O#........#....#.......#O..O.OO..#.O#.OO..#.OOO..#O.....#OOOO..#.........\n##.O...####OO#...O#.OO...O...O.......O...OO..####...OOOO..O##O....OOO....#..O.O........O....#.#.#O..\nO.O....O...O#...O.#....O.....OO#O#OO..O##.O..O...O.#.....#O...O..#O...O#.....O##...O.OO...#.........\n....#OO..OO..#O#......O#.O..#O..#..OO..#....#.....#.....O.O..O#....O.O..O.#..O#O###O....O...OO...#.#\n#..OO.##O..OO.O..O...#....O.....##O..#............##.O.#...O.#O..#O..#...#...O.O....#O.....O.....O..\n..O#..#...##.#.#.O#.OOO.O#.#....OO.#....#...#...#.....#O.....O..O...O.....#.O.O.O#...#O.#...##.O..O#\n#....#.O...O#...##O.#....O........O...O#.#.#...#O#..O..O.#O.....O..O....#....O.O#O#....#O#..#......#\n.O.O#.........O.....##.O.#..............O...#.#OOO.O.OO..O..O..O##....#.......OO....O....#OO#..OO...\n##.O#...OO...O.O...........O..O.##O..#.#...#..O..#.##....#..###O..##........OOO.#.O.#......#......#.\n#......O#..O#.#.#..#O##..OO#O...##O.#...#.OO...#.O..O##O.O...........O.##...###O..#.#.O.O..OO.O..O..\n#.....#.##.O.O.#....O..#O......O.O#...#..O.#O#OO...#.OO...O.O##.O...O.......#...##....#O.....O.##O#.\n...O.OO.O...O#..OO.O....#.#.O....O...#..#O.O..OO.#....O.O#.O#..O..O...O..O........#..#..#..#..OO.O#.\n.#O.O....#....#.OO.#.O...O......O....O#.....##...#O...##...#.#OO..O#O..O##.#.#..O...O.....#..O##.O..\nOOO....OOOO...#.#...#.....###...O......O.#.O.....O...#.O##...##O.#.#...O....O.O...#.O...#O....O.....`;

function inputToMatrix(input) {
  return input.split('\n')
    .map(line => line.split(''));
}

// part 1
function tick(matrix, destFun) {
  const toMoves = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] != 'O') continue;
      const dest = destFun(row, col, matrix);
      if (!dest) continue;
      toMoves.push([{row, col}, dest]);
    }
  }
  for (const [from, to] of toMoves) {
      matrix[from.row][from.col] = '.';
      matrix[to.row][to.col] = 'O';
  }
  return toMoves.length;
}

function getDestNorth(row, col, matrix) {
  if (row <= 0) return false;
  const north = matrix[row - 1][col];
  if (north != '.') return false;
  return {row: row - 1, col};
}

function getDestEast(row, col, matrix) {
  if (col >= matrix[0].length - 1) return false;
  const east = matrix[row][col + 1];
  if (east != '.') return false;
  return {row: row, col: col + 1};
}

function getDestSouth(row, col, matrix) {
  if (row >= matrix.length - 1) return false;
  const south = matrix[row + 1][col];
  if (south != '.') return false;
  return {row: row + 1, col: col};
}

function getDestWest(row, col, matrix) {
  if (col <= 0) return false;
  const north = matrix[row][col - 1];
  if (north != '.') return false;
  return {row: row, col: col - 1};
}

function getTotalLoad(matrix) {
  let load = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] != 'O') continue;
      load += matrix.length - row;
    }
  }
  return load;
}

let matrix = inputToMatrix(input);
while (tick(matrix, getDestNorth));
console.log(getTotalLoad(matrix));

// part 2
function doCycleNTimes(matrix, ntimes) {
  for (let cycle = 0; cycle < ntimes; cycle++) {
    while (tick(matrix, getDestNorth));
    while (tick(matrix, getDestWest));
    while (tick(matrix, getDestSouth));
    while (tick(matrix, getDestEast));
  }
}

matrix = inputToMatrix(input);
const matrixHistory = new Map();
let cycleStart;
let cycleEnd;
for (let cycle = 0; true; cycle++) {
  doCycleNTimes(matrix, 1);
  const matrixKey = matrix.flat().join('');
  if (matrixHistory.has(matrixKey)) {
    cycleStart = matrixHistory.get(matrixKey);
    cycleEnd = cycle;
    break;
  }
  matrixHistory.set(matrixKey, cycle);
}

const cycleLength = cycleEnd - cycleStart;
const cyclesToDo = 1000000000 - cycleEnd - 1;
const cyclesRemaining = cyclesToDo % cycleLength;
doCycleNTimes(matrix, cyclesRemaining);
console.log(getTotalLoad(matrix));