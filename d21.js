const input = `...................................................................................................................................\n.......#.#.#.#.....#.#...##..........#........##....#......#...............##........#..#...##.......###....#.##........#.#....#...\n.###............#........#......#.....#...................................#............#..........#.....#..##.#.......#.....#......\n.......#....#...##......#..............##.###....##......#..................#.....#..#.....#...#.#....#................#....#.##...\n..............#................#..#.#...#......#.#..#....................##....#..#.#.....#.#..........#...#.#......#...#..#.......\n.....#.....#............##.#.....#......#..#...................................#......##..#.#..........#.#..##..#................#.\n.#....#......##.#...#..#.....#................##.#....#.............................##...#...#........#....#.......................\n....#.....#................#.....##...............#...............#...........#..#...........#.........#.............#........#....\n.........#.................#...........#......#...#...............#...........#....#....#..........#...#.#.##.................#....\n.........#....#..#.....#..#..#.#....#...#......................#................####...#.....#..........#.......#..#........#......\n..............#.##...............#.#.#..........#..#............#.........................................#.#.#............#.#.....\n..............#...#.....#...#....##.............##............##..#.................###........#....#.#.......................#..#.\n......#.....##..#....#.#......#.#....#..#.#.....#............................................##.#.....#.#.......#......#.#.#.......\n........#.............#.............#.....#................#.......#.....................#...#.........#..#...##..##...##..###.....\n.......#..........................#........................................#........###..##......#.#.....#....#....#....#.......#..\n...#......#.#..........#..#..........#..#.....#..........#........#.......................#....#.......#...##.............#.#......\n..#..##...#...........#.#.#.##........##..#...................#....##..##..##...............#....#...........#......##..#.......#..\n....................#.#...#.........##....................#.....#.....#..#....................................#.#.#........#.#.....\n............##.#..#.#..#............#..#..#...........#.........#...#...............................#...............#...#........#.\n.......##......#..............###......#............#.....#..........#..#.#.....#............#.#.......#..#...............#.....#..\n.......###.......#......#..#..#...#...#...........#......#.........#...........#...................#.....##..........#....#........\n..#...#.#..................##........................#..............##.....#.#.......................#...#..#...#..................\n.........#.......#...#...#.....#......#..............##.......##....#.............##..............##.....#....................#....\n..#....#.....#.....#............................#.#.......#.............#.....................#.........#.......#....##.#..........\n...#.#...#........#....#........#.#...............#..##......#........#.........#...................#...#.......#...#......#...#...\n.......................#..#..#.....#............#.#...#..#...........#.......##....#.#................#...................#....#...\n.........#....#.#..........#.#....#..................#..............#...#...#..........#..........#.............##..#.......#..#...\n...#......#.#......#.....#.##.#...#.....................#....##............#......#...#.........##...............#...............#.\n........#.......#...................................#....#...............#....#.##..#............#...#........................#....\n.......................#.......#..............#........#.#............#............................#...#......#..#..#.##.#.........\n......#...#.##.............................##.#...................#..#......#.#...#...##..#.........##......#..#....#........#..#..\n.........#.#............#................#...#.##......#..#.....#.##....##.#...........#....................#.............#........\n.....#...#.........#...#.#...#.........#...#....#......#......##...#..#........#.....#.....#.............##.........#..........#...\n.....#.......#............#.#............###..#..#.#.....#.##.......#.#.............##..##.....................#.#.......#..##.....\n.#...#.....#...#.......................#...#.##...#....#........#.....#...#..................#............##..#...#....#.##.#...#..\n......##.............#...#.........#.....#.....#..#........#......#..#......#..##...#..##.....#.#.................#..#.........#...\n.........#..........#.#............###.................#..#.....#.....#..#...#..........#........#..........#.................#....\n..#..........#....................#.....#..#...#....#.....#..#............#....#..#.........##..##..........#....#......#..........\n.........#..........#..#.......#............#...........#.......#..#...........#.......##.....................#.......#............\n...#...........................#..#.........#.#.....#.........#..........#........##.......#...#...............#....##.#.#....#....\n....##.....#...#.......................#..#...#......#....#.#.....#..##.......#.........##.....................................#...\n.#......#....##...#............#.....#..#........#......#...##.......#...#...#.#...#.#.....##..........................#..#........\n.#.......##...................#..#......#..#..................##....#..#....#..##.......#..#.....###................#.#............\n..............#.............#..#....#.....#.......#..#....##.........#..#.#.....###.......#.....##...##..........#..........#......\n..#.#..#.................#......#...#.#...#......#...#.............#...#..##...............#........#............##.#.....#........\n........#.....#.................#.....##.....#.#...#..#...........#..............#...#........#........##..............#...........\n.#......#........................#..##.#........##......##....#...#........#..#...#..##.........#....#...............#.............\n....#.....##..#............##.........#...#......#.#.....#.........#.#.#....###......................#...#.........................\n.........###............##..........#.#.#.....#.....#..###.....................##.....#.....#....#.#...............................\n...#.#.#............#..#.........###.....####.......#.....#...................#..##..##.......#....................................\n.#.#.....#.#...............................#..#.......##........................#...#....#...##.#...#....................##........\n...#.....................#...#...............#...#..#...#....#......##....#.#..#.#......#...#........#.....##.................##...\n.........#.........#..#...#.#.#...#...#..........#......####.#.......#................#.........###...#..#.........................\n....##..........#.........#..................#....#....#........#...#.........#..##...#....##.....#.#..........#..#..........#.....\n...#............#...#..#.#.#.....#..##.#..#.......................#..#.....#....#...#.....#.....#..........#...#...#...............\n.#..................................#..#..#..............#...#.....#...#................#.....#...#...........##..#................\n....##................#....#.......#..#....#....#............##..........##...#.......#.......#...........#....#...................\n....#..........#..........#..##......#.......###...........#............#..........#...#.#.#........#.#.#.#.#.#......#..........#..\n............#...........................................#.......#.##.#.....................#..#..#..#.............#..............#.\n...........#...#.........#.#....#................#.....#........#..#...#.#.....#..........#....................#...#..#............\n...........#.#...#....#.....#..#..........#...#.#..#..#.#.........#.#.##........#......#................#...........#..............\n................................................#..#..#....#.........#.............#....###..#...............#...#.......#.........\n............................#...#..#......##......#...#........#....#.....#.....#...#..#...#..........................###.#........\n..............#............#...#.#...##.......##.....#.##..........#....#............#.......#......##.#....#.......#..............\n...........#.##.##..#.#.#.........###........#...#...#................#.#...............#..#.#........##........#.##.......#.......\n.................................................................S.................................................................\n.............#.#......#..##..#.............#...........#..........#..##.#...............#..###..............#...#.##.##....#.......\n......#......##..#...............#..#............##.......#.#.......##..#...#.....##........#.................#....#......#........\n..........#..........#.#........#....#......#........#.....#.............#....#..............#.#..#...#.............#..............\n...........#........##.#.......#...#....#........#.#.....#........#..#..........#......##.....#...............#....#....#..........\n...........#............#.....#..#.............#..#....#.#.....##............#.......#.......#............#.#..##..................\n...........##..#...#.....##.........##.......#.......#.............#...#......#...##........#..#....#.......##..........#..........\n.............#.......#......#..#...##..#.................................####...#......#.............#..#..#.......#...............\n................#............#........#...##......##...................#..#...#.........#..#.........................#.............\n.........................#...##.#......#...........#........#........#...............###....#.#........#............#..............\n...#...........##........#..##.....#.....#.##......#....#..#........#.................#.#.........#........##..#..#................\n..#.............#.##....#......#...#.#.......#.......#.................#.....#.....#.............###......#...#............##......\n........................#.....#..##.........#.....#.....#..#........#...#.....#.....#....#......#...##..#...#.............#..#.....\n......#........................#.....#..#...#....#......#....#..#.#.#...#.....#..#......#..#..#...#...#..#..#...............#......\n..........#...........#......##.#.#............#...................##.....#..#...##....#..........#........#.............#.........\n.#.......................#.....#..........#..##....#....#...............##......#.#..#.###..............................#..#..#....\n.......................#........##......#.#......#......####..........#..#........#.#...........#..#.#..#.....#....................\n....##.....................#..#.......###.................##.......#...#..#.###..#...#..###........#....#.#.............##....#....\n........#..#............#...#.........#........#....#.##.......#...#.......#..#.#.......................................###........\n.......##.....#..............#..#....#..#...............#......#................#................##......#.............#.#.........\n....#......##...........###.....##................#...#....##.#......#....................#...##.#.......#............###...#......\n.#...#.........#..........#..#.##.#.#...........#.#.........##....#.#......#........#.....#..#..........##.............#...#....##.\n.........#.#.#....#..........#.....#...#..#.#...............#..........#....................##........................#.##....#..#.\n........###..#..................#...#.....#.................#.#....#........#................#...#...........................#...#.\n.....#.#..#........#.............#.........#.............#..###......#..#.#....#................##.....................##..........\n.#......###....#....#........#.#..#...#.#..#.#...#........................#.........#...#.........#..........#.......#.........#...\n..#.....#...........###........#.............#......#......#..........##.......#.#.#....#...#.................#...........#........\n.....#........#..#..#................#......#....#.........#.##.......#...........#...........#.#............#.#....#......##......\n.....#...##.#.....................#......................................#.#..#.#.....#.......#.#............####.#................\n.......#...#......................####..#..#.............#..#.................#.....#...........#............#..#..........#.......\n.##.............#...#.#...........................#..........##............#.......#.#......#............#........#................\n.......#.......#.......#................#......#.#.#...#.............#........#........#.....#.#..............#....................\n.#....#......#.#....#.................#.................##..............................#...............#.....###....#......#....#.\n........##...............................#........#.............................#.....#..####.............#...#..#.........##.##...\n.#.#............#..#..........#.......#......##.#.#..........#.........##.....#...........#..................#......##.......#.....\n.................##.....#.#..............#.#.#.###...#.............#.#....#.....##...#.##..#...........#.#.#....#..................\n..#.#..#..#................................#.#.......##.............#.#..........###................#.....##....#..................\n........#........#.##..#.....##.#........#.#...#..#..#.....#...#....#.#.......#...#.....#..............#.........#.#...#...........\n........#.....##..#..#......................#................#...............#...#.#.#..........#.#.##......................#......\n........#......#.....#.#.......#............#...........##...............#............#...........#..........#.#..........#.#......\n......###.....#.................###................#......#........#...#.#.#...#....#.#.........#...#...##........#...#............\n..#.##..#..#....#.....##..........#............#................#.#..#.........................#.##..##..........##....#...#.....#.\n....#............#.#..#...#......#..............#..#....##...#..#.....#.........#...#...........#..........#.#......#.#...##.###...\n....#................#.........#...............##..#...........#.......#.#..#.......................#....#...##........#...........\n....#....................##......#...#...........#.......#.#..#..............##.#....................#....#...................#....\n...#..............##......#..............#...........#.......#......#........##.............#.........#...#.#..##..................\n....#........#.#....#....#.#.....#........#..........................#..#.#.#.#.........#..........#.##...#.##..###.....#..........\n.#.......#.#............#..#....#.......#.#............#..........#.#........##.............#...#..#....#..........#..........#....\n...#...#......#..............#...##.......#..........#.....#......##...#..............#................#..............#...##..##...\n....#......#.##..##....#.....................#..........#....##......#................#.......#.#..................#......#.#......\n...#...............#..#..........#..#.....#..##............#.......###...........................##................#...#...........\n........#....#........#.......#....#..#.#..................#.............##.............#..#.......##..........................#...\n.#....................#......#.#........#..................#.##.#..#.....#.........##................................#.............\n.......#....................#..#................#......................................##..........#.....#..##..#..........#.#..#..\n..#.....#..#....#.....#......#..##...#.........#.........................................#...#....#.........#...##.......#.#.....#.\n...........#..........#..#.#...#...##..#.........#.#...........#....#..............#.............#.......##..#...#....##.......#...\n..#.........#.#..#...#.....#......................#..........#........#.......#....................#...##......#.................#.\n.#......#...#.#.#......#.#........#.#......#....#....#............................#......####............#.......#..#..........##..\n.#......##..........#...#...........#....#...#.#.................................#.##...#......................#..#..........#.#...\n.....#...#.......#...................##.#....#...##............#..##.........#..................#..#......#..........#....#.....##.\n.#..................#..........#.....................#.#.........................#...........#...##...#...#...##.#.................\n.#..#..#..#..#......#........#........#.......#.#...#.#..................#.......#.......#..#.#......#...#...............#.....#...\n.#........#......................#...##.......#..##......................###......#.....##....#..#................#................\n.#...........#.............#..#.....##.........#.##........#.............#....#.#...........#...............#.........#........#...\n......#....#.#...###................#....#......#..#........#.........................##.##...#..#..#.#......#.....................\n...................................................................................................................................`;


function inputToMatrix(input) {
  const data = input.split('\n');
  const rows = data.length;
  const cols = data[0].length;
  let elfPos;
  const matrix = Array.from({length: rows}, () => Array(cols));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let value = data[row][col];
      if (value == 'S') {
        elfPos ={row, col};
        value = '.';
      }
      matrix[row][col] = {row, col, value};
    }
  }
  return {rows, cols, matrix, elfPos};
}

// part 1
function modulo(op1, op2) {
  return ((op1 % op2) + op2) % op2; // Euclidean modulo
}

function getNeighbors(row, col) {
  return [
    {row: row - 1, col: col}, // N
    {row: row, col: col + 1}, // E
    {row: row + 1, col: col}, // S
    {row: row, col: col - 1}, // W
  ];
}

// Breadth First Search BFS
function bfs(row, col, matrix, maxSteps = 64) {
  const cameFrom = new Map();
  const queue = [];
  queue.push({row, col, step: 0});
  cameFrom.set(`${row}:${col}`, {row, col, step: 0});

  while (queue.length > 0) {
    const cell = queue.shift();
    if (cell.step >= maxSteps) continue;
    const neighbors = getNeighbors(cell.row, cell.col);
    for (const n of neighbors) {
      const key = `${n.row}:${n.col}`;
      if (cameFrom.has(key)) continue;
      // part 2: the map is a flat torus
      if (matrix[modulo(n.row, rows)][modulo(n.col, cols)].value == '#') continue;
      queue.push({...n, step: cell.step + 1});
      cameFrom.set(key, {...cell, step: cell.step + 1});
    }
  }
  cameFrom.delete(`${row}:${col}`);
  return cameFrom;
}

function getCount(cameFrom, isNbStepsOdd = false) {
  const distCond = (distance) => isNbStepsOdd ? distance % 2 == 1 : distance % 2 == 0;
  let count = isNbStepsOdd ? 0 : 1;
  for (const {step} of cameFrom.values()) {
    if (distCond(step)) count++;
  }
  return count;
}

const {rows, cols, matrix, elfPos} = inputToMatrix(input);
const cameFrom = bfs(elfPos.row, elfPos.col, matrix, 64);
console.log(getCount(cameFrom));

// part 2
/**
 * Lagrange's Interpolation formula for
 * ax ^ 2 + bx + c with x = [0,1,2] and y = [y0,y1,y2] we have
 * f(x) = (x^2 - 3x + 2) * y0 / 2 - (x^2 - 2x) * y1 + (x^2 - x) * y2 / 2
 *
 * so the coefficients are:
 * a = y0 / 2 - y1 + y2 / 2
 * b = -3 * y0 / 2 + 2 * y1 - y2 / 2
 * c = y0
 */
function  lagrangeInterpolation(y0, y1, y2) {
  return {
    a: y0 / 2 - y1 + y2 / 2,
    b: -3 * (y0 / 2) + 2 * y1 - y2 / 2,
    c: y0,
  };
};


// middle line of my "diamond": 65 dots + S + 65 dots
const countMap = getCount(bfs(elfPos.row, elfPos.col, matrix, 65), true);
const countMapAround = getCount(bfs(elfPos.row, elfPos.col, matrix, 65 + 131), false);
const countMapAroundAround = getCount(bfs(elfPos.row, elfPos.col, matrix, 65 + (131 * 2)), true);
const {a, b, c} = lagrangeInterpolation(countMap, countMapAround, countMapAroundAround);
const target = (26501365 - 65) / 131;
console.log(a * target ** 2 + b * target + c);