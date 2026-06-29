/**
 * Types:
 *  - partial: parts of the screen are glitching out
 *  - full: the screen is taken over by video'
 */

type GlitchType = 'partial' | 'full';

interface Glitch {
  video: string;
  type: GlitchType;
  text?: string;
}

type GlitchEntry = Glitch | null;

const allGlitches = ['1', '2', '3', '4', '5', '6', '7', '8'];
const randomGlitch = (): string => allGlitches[Math.floor(Math.random() * allGlitches.length)];

const day1: Record<string, GlitchEntry> = {
  '08:00': null,

  '18:05': { video: randomGlitch(), type: 'partial' },
  '18:10': { video: randomGlitch(), type: 'full', text: 'SYSTEM OUTAGE' },
  '18:20': null,
  '18:35': { video: randomGlitch(), type: 'partial' },
  '18:40': { video: randomGlitch(), type: 'full', text: 'NULLSECTOR' },
  '18:50': null,

  '19:05': { video: randomGlitch(), type: 'partial' },
  '19:10': { video: randomGlitch(), type: 'full', text: 'SCHEDULED MAINTENANCE' },
  '19:20': null,
  '19:35': { video: randomGlitch(), type: 'partial' },
  '19:40': { video: randomGlitch(), type: 'full', text: 'RESTARTING SYSTEM' },
  '19:50': null,

  '20:05': { video: randomGlitch(), type: 'partial' },
  '20:10': { video: randomGlitch(), type: 'full', text: 'OUT OF MEMORY' },
  '20:20': null,
  '20:35': { video: randomGlitch(), type: 'partial' },
  '20:40': { video: randomGlitch(), type: 'full', text: 'CONNECTION RESET' },
  '20:50': null,

  '21:05': { video: randomGlitch(), type: 'partial' },
  '21:10': { video: randomGlitch(), type: 'full', text: 'CYBER ATTACK DETECTED' },
  '21:20': null,
  '21:35': { video: randomGlitch(), type: 'partial' },
  '21:40': { video: randomGlitch(), type: 'full', text: 'WATER IN SERVER ROOM' },
  '21:50': null,

  '22:05': { video: randomGlitch(), type: 'partial' },
  '22:10': { video: randomGlitch(), type: 'full', text: 'SYSTEM OUTAGE' },
  '22:20': null,
  '22:35': { video: randomGlitch(), type: 'partial' },
  '22:40': { video: randomGlitch(), type: 'full', text: 'NULLSECTOR' },
  '22:50': null,

  '23:05': { video: randomGlitch(), type: 'partial' },
  '23:10': { video: randomGlitch(), type: 'full', text: 'SCHEDULED MAINTENANCE' },
  '23:20': null,
  '23:35': { video: randomGlitch(), type: 'partial' },
  '23:40': { video: randomGlitch(), type: 'full', text: 'RESTARTING SYSTEM' },
  '23:50': null,

  '00:05': { video: randomGlitch(), type: 'partial' },
  '00:10': { video: randomGlitch(), type: 'full', text: 'OUT OF MEMORY' },
  '00:20': null,
  '00:35': { video: randomGlitch(), type: 'partial' },
  '00:40': { video: randomGlitch(), type: 'full', text: 'CONNECTION RESET' },
  '00:50': null,

  '01:05': { video: randomGlitch(), type: 'partial' },
  '01:10': { video: randomGlitch(), type: 'full', text: 'CYBER ATTACK DETECTED' },
  '01:20': null,
  '01:35': { video: randomGlitch(), type: 'partial' },
  '01:40': { video: randomGlitch(), type: 'full', text: 'WATER IN SERVER ROOM' },
};

const schedule: [string, GlitchEntry][] = Object.entries(day1).sort(
  (a, b) => -a[0].localeCompare(b[0]),
);

schedule.forEach(([t]) => {
  if (t.length < 5) {
    throw new Error('All times in the schedule have to be zero padded (HH:mm)!');
  }
});

const getGlitchFor = (time: string): GlitchEntry =>
  (schedule.find((e) => e[0].localeCompare(time) <= 0) ?? schedule[0])[1];

const getCurrentTime = (): string => new Date().toLocaleTimeString('en-GB').slice(0, 5);

const getGlitch = (): GlitchEntry => getGlitchFor(getCurrentTime());

export { schedule, getGlitchFor, getCurrentTime, getGlitch };
export type { Glitch, GlitchEntry, GlitchType };
