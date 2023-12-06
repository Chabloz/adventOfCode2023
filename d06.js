const input = `Time:        56     97     77     93\nDistance:   499   2210   1097   1440`;

function inputToRaces(input) {
  const [times, records] = input.split('\n')
    .map(line => line.replace(/\s+/g, ' ')) // rmeove multiple whitespace
    .map(line => line.split(':')[1].trim())
    .map(line => line.split(' ').map(Number));
  const races = [];
  for (let i = 0; i < times.length; i++) {
    races.push({
      time: times[i],
      record: records[i],
    })
  }
  return races;
}

const races = inputToRaces(input);

// Part 1
function getNbWaysToBeatTheRecord({time, record}) {
  let waysToBeatTheRecord = 0;
  for (let holdTime = 1; holdTime < time - 1; holdTime++) {
    const remainingTime = time - holdTime;
    const speed = holdTime;
    if (speed * remainingTime > record) waysToBeatTheRecord++;
  }
  return waysToBeatTheRecord;
}

let wayToBeatAllTheRecords = 1;
for (const race of races) {
  wayToBeatAllTheRecords *= getNbWaysToBeatTheRecord(race);
}
console.log(wayToBeatAllTheRecords);

// Part 2
const time = parseInt(races.map(race => race.time).join(''));
const record = parseInt(races.map(race => race.record).join(''));
console.log(getNbWaysToBeatTheRecord({time, record}));
