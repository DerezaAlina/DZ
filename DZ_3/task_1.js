const rocketLaunch = (rocketName, time) => {
    let seconds = (time + 1000) / 1000;

    let timerId = setInterval(() => {
        console.log(`${rocketName} takes off in: ${[--seconds]} second`);
        if (seconds === 1) {
            console.log(`${rocketName} is launched!`);
        }
    }, 1000);
    setTimeout(() => { 
        clearInterval(timerId);         
    }, time + 100);
};

rocketLaunch('Atlas', 3000);