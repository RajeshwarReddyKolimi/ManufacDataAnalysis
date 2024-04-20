export function getFlavanoids(data) {
    let flavanoids = {};
    for (let d of data) {
        const type = d.Alcohol - 1;
        if (!flavanoids[type]) {
            flavanoids[type] = [];
        }
        flavanoids[type].push(Number(d.Flavanoids));
    }
    return flavanoids;
}
export function getGamma(data) {
    let gamma = {};
    for (let d of data) {
        const type = d.Alcohol - 1;
        if (!gamma[type]) {
            gamma[type] = [];
        }
        gamma[type].push((Number(d.Ash) * Number(d.Hue)) / Number(d.Magnesium));
    }
    return gamma;
}
export function getMean(data) {
    let size = Object.keys(data).length;
    const meanArray = new Array(size).fill(0);
    for (let type = 0; type < size; type++) {
        let tempArray = data[type];
        let sum = 0.0,
            count = 0;
        for (let f of tempArray) {
            sum += f;
            count++;
        }
        let mean = sum / count;
        meanArray[type] = Math.round((mean + Number.EPSILON) * 1000) / 1000;
    }
    return meanArray;
}
export function getMedian(data) {
    let size = Object.keys(data).length;
    const medianArray = new Array(size).fill(0);
    for (let type = 0; type < size; type++) {
        let tempArray = data[type];
        tempArray.sort();
        let median = 0,
            count = tempArray.length;
        if (count % 2 !== 0) median = tempArray[(count - 1) / 2];
        else median = (tempArray[count / 2] + tempArray[count / 2 + 1]) / 2;

        medianArray[type] = Math.round((median + Number.EPSILON) * 1000) / 1000;
    }
    return medianArray;
}
export function getMode(data) {
    let size = Object.keys(data).length;
    const modeArray = new Array(size).fill(0);

    for (let type = 0; type < size; type++) {
        let tempArray = data[type];
        let maxRepeatValue = 0,
            maxRepeatedNumber = 0,
            countMaxRepeatedNumbers = 0;
        let map = new Map();
        for (let f of tempArray) {
            map.set(f, (map.get(f) || 0) + 1);
            if (map.get(f) > maxRepeatValue) {
                maxRepeatValue = map.get(f);
                maxRepeatedNumber = f;
                countMaxRepeatedNumbers = 1;
            } else if (map.get(f) === maxRepeatValue) {
                maxRepeatedNumber += f;
                countMaxRepeatedNumbers++;
            }
        }
        let mode = maxRepeatedNumber / countMaxRepeatedNumbers;
        modeArray[type] = Math.round((mode + Number.EPSILON) * 1000) / 1000;
    }
    return modeArray;
}
export function getHeader(data) {
    let size = Object.keys(data).length;
    const headerArray = [];
    headerArray.push("Measures");
    for (let i = 0; i < size; i++) headerArray.push(`Class ${i + 1}`);
    return headerArray;
}
