/**
 * Types:
 *  - partial: parts of the screen are glitching out
 *  - full: the screen is taken over by video'
 */

const day1 = {
    '13:00': null,
};

const day2 = {};
const day3 = {};

let schedule = day1;

schedule =
    Object.entries(schedule)
    .sort((a, b) => -a[0].localeCompare(b[0]));

schedule.forEach(([t]) => {
    if (t.length < 5) {
        throw new Error("All times in the schedule have to be zero padded (HH:mm)!");
    }
});

const getGlitchFor = (time) => {
    return (schedule.find(e => e[0].localeCompare(time) <= 0) ?? schedule[0])[1];
}

const getCurrentTime = () =>
    new Date().toLocaleTimeString('en-GB').slice(0, 5);

const getGlitch = () => {
    return getGlitchFor(getCurrentTime());
}

export { schedule, getGlitchFor, getCurrentTime, getGlitch };
