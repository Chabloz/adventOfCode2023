const input = `%cg -> mt, hb\n%sp -> xm\n%nr -> hf, mt\nbroadcaster -> tl, gd, zb, gc\n&qz -> qn\n%df -> hd\n%vg -> rm, kx\n%gm -> mt, md\n%ls -> hc\n%lq -> zq, fx\n&zd -> bz, kg, zb, lf, sq, zk, jx\n%lz -> mt\n%sq -> zk\n%zn -> kx, tc\n&zq -> mb, hc, qz, ql, tl, ls\n&mt -> zm, tt, mh, gd, md\n%lm -> mb, zq\n%hf -> mt, sm\n%hb -> mh, mt\n%rm -> kx\n%gc -> kx, sp\n&cq -> qn\n%mh -> jt\n%zm -> nr\n%xm -> kx, ld\n&jx -> qn\n&qn -> rx\n%mp -> qt, kx\n%zk -> vj\n%hd -> mp, kx\n%tl -> zq, hl\n%zb -> zd, ph\n%cl -> zd\n&tt -> qn\n%ld -> zn\n%js -> lq, zq\n%sm -> mt, lz\n%qt -> vg, kx\n%md -> cg\n%vj -> bz, zd\n%qs -> zd, fs\n%mb -> ps\n&kx -> cq, gc, sp, df, ld\n%hc -> lm\n%tc -> df, kx\n%ps -> js, zq\n%fs -> qc, zd\n%hl -> jj, zq\n%bz -> qs\n%jj -> zq, ql\n%ql -> ls\n%ph -> kg, zd\n%qc -> cl, zd\n%lf -> sq\n%kg -> lf\n%fx -> zq\n%jt -> zm, mt\n%gd -> gm, mt`;
function inputToModules(input) {
  const modules = new Map();
  const lines = input.split('\n');
  for (let line of lines) {

    const data = line.split(' -> ');
    const type = data[0].slice(0, 1);
    const name = type=='b' ? data[0] : data[0].slice(1);
    const destinations = data[1].split(', ');
    const signal = null;
    const module = {type, name, signal, destinations};
    if (type == BROADCASTER) module.signal = LOW_PULSE;
    if (type == FLIPFLOP) module.isOff = true;
    if (type == CONJUNCTION) module.memory = new Map();
    if (type == CONJUNCTION) module.nextMemory = new Map();
    modules.set(name, module);
  };
  return modules;
}

function setInitialConjunctionModuleMemory(modules) {
  for (const {name, destinations} of modules.values()) {
    for (const dest of destinations) {
      const destModule = modules.get(dest);
      if (!destModule || destModule.type != CONJUNCTION) continue;
      destModule.memory.set(name, LOW_PULSE);
    }
  }
}

function pulses(modules, isPart2 = false) {
  countLow++;
  const queue = [];
  queue.push(['button', 'broadcaster', LOW_PULSE]);
  while (queue.length > 0) {
    const [fromName, curName, curPulse] = queue.shift();
    const module = modules.get(curName);

    if (!module) continue;

    if (module.type == BROADCASTER) {
      for (const dest of module.destinations) {
        countLow++;
        queue.push([curName, dest, LOW_PULSE]);
      }
      continue
    }

    if (module.type == FLIPFLOP && curPulse == LOW_PULSE) {
      const nextPulse = module.isOff ? HIGH_PULSE : LOW_PULSE;
      module.isOff = !module.isOff;
      for (const dest of module.destinations) {
        nextPulse == LOW_PULSE ? countLow++ : countHigh++;
        queue.push([curName, dest, nextPulse]);
      }
      continue;
    }

    if (module.type == CONJUNCTION) {
      module.memory.set(fromName, curPulse);
      const hasOnlyHighPulse = [...module.memory.values()].every(signal => signal == HIGH_PULSE);
      const nextPulse = hasOnlyHighPulse ? LOW_PULSE : HIGH_PULSE;
      if (isPart2 && nextPulse == HIGH_PULSE && module.destinations.includes('qn')) {
        return false;
      }
      for (const dest of module.destinations) {
        nextPulse == LOW_PULSE ? countLow++ : countHigh++;
        queue.push([curName, dest, nextPulse]);
      }
    }
  }
}

const FLIPFLOP = '%';
const BROADCASTER = 'b';
const CONJUNCTION = '&';
const LOW_PULSE = 0;
const HIGH_PULSE = 1;

let modules = inputToModules(input);
setInitialConjunctionModuleMemory(modules);
let countLow = 0;
let countHigh = 0;
for (let nbPush = 0; nbPush < 1000; nbPush++) {
  pulses(modules);
}
console.log(countLow * countHigh);

// part 2
// todo