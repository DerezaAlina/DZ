function getPlanetTime(time, planetName, planetTimeCoefficient) {
    const transformTimeInNum = +time;
    const isTimeNumType = typeof transformTimeInNum === 'number';
    const isTimeNumisNaN = Number.isNaN(transformTimeInNum);
    if (isTimeNumType && !isTimeNumisNaN) {
        timeOnPlanet = time * planetTimeCoefficient;
        console.log(`${time} of Earth hours = ${timeOnPlanet} of ${planetName} hours.`);
        let nowTimeOnPlanet = (new Date ((Math.floor(Date.now() * planetTimeCoefficient))));
        console.log(`Now on this planet time is: ${nowTimeOnPlanet}.`);
    } else {
        console.log('Wrong data type! Enter the hours in format: "9".');
    }
}

function getTimeOnMars (time) {
    getPlanetTime(time, 'Mars', 1.025);
}

function getTimeOnJupiter(time) {
    getPlanetTime(time, 'Jupiter', 9.9);
}

function getTimeOnSaturn(time) {
    getPlanetTime(time, 'Saturn', 10.39);
}

function getTimeOnMercury(time) {
    getPlanetTime(time, 'Mercury', 0.38);
}

getTimeOnMars(5);
getTimeOnJupiter(5);
getTimeOnSaturn(5);
getTimeOnMercury(5);