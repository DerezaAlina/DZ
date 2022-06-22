// провизия, кислород, космонавты, норма провианта на человека, выходы в космос

// увеличивать/уменьшать провизию и кол. космонавтов и кислорода, делать выход в космос

const spaceStationControl = function(astronauts = 0, provision = 0, oxygen = 0) {
    let weeksPassed = 0;
    let spacewalksCount = 0;
    let astronautsAmount = astronauts;
    let provisionAmount = provision;
    let oxygenAmount = oxygen;

    const weekAstronautNorm = {
        oxygen: 7,
        provision: 7
    }

    function addSpacewalk() {
        if (!astronautsAmount) {
            console.log('К сожалению, никого нет для выхода в Космос.');
            return;
        }
        spacewalksCount++;
        console.log(`Совершаем выход в Космос. Всего выходов: ${spacewalksCount}.`);
    };

    function addAstronauts(amount = 1) {
        const provisionRequired = (amount + astronautsAmount) * weekAstronautNorm.provision;
        const oxygenRequired = (amount + astronautsAmount) * weekAstronautNorm.oxygen;
        if (provisionRequired > provisionAmount) {
            console.log(`${provisionAmount} провизии не хватит на ${amount + astronautsAmount} космонавтов. Нужно минимум ${provisionRequired} на неделю.`);
            return;
        }
        if (oxygenRequired > oxygenAmount) {
            console.log(`${oxygenAmount} кубов кислорода не хватит на ${amount + astronautsAmount} космонавтов. Нужно минимум ${oxygenRequired} на неделю.`);
            return;
        }
        astronautsAmount = astronautsAmount + amount;
        console.log(`На станцию прибыло ${amount} космонавтов. Всего космонавтов: ${astronautsAmount}.`);
    };

    function removeAstronauts(amount = 1) {
        if ((astronautsAmount - amount) < 0) {
            console.log(`На станции всего ${astronautsAmount} космонавтов.`);
            return;
        }
        astronautsAmount = astronautsAmount - amount;
        console.log(`Со станции убыло ${amount} космонавтов. Всего космонавтов осталось: ${astronautsAmount}.`);
    }

    function addProvision(amount = 1) {
        if (astronautsAmount > provisionAmount) {
            console.log(`Ой, вам нужно добавить провизию для космонавтов, чтоб они не остались голодными!\n 
            Сейчас не хватает ${astronautsAmount - provisionAmount} единиц провизии.`);
            return;
        }
        provisionAmount = provisionAmount + amount;
        console.log(`На станцию добавили ${amount} пакетов провизии. Всего провизии осталось: ${provisionAmount}.`);
    }

    function addOxygen(amount = 1) {
        if (oxygenAmount < astronautsAmount) {
            console.log(`Обязательно добавьте кислород для космонавтов! 
            Сечас не хватает ${astronautsAmount - oxygenAmount} кубов кислорода.`);
            return;
        }
        oxygenAmount = oxygenAmount + amount;
        console.log(`На станцию добавили ${amount} кубов кислорода. Всего кубов кислорода осталось: ${oxygenAmount}.`);
    }

    function removeProvision(amount) {
        if ((provisionAmount - amount) < 0) {
            console.log(`На станции всего ${provisionAmount} провизии.`);
            return;
        }
        provisionAmount = provisionAmount - amount;
    }

    function removeOxygen(amount) {
        if ((oxygenAmount - amount) < 0) {
            console.log(`На станции всего ${oxygenAmount} кубов кислорода.`);
            return;
        }
        oxygenAmount = oxygenAmount - amount;
    }

    function logWeeklyReport() {
        console.log(`Прошла еще одна неделя в открытом Космосе. Всего прошло недель - ${weeksPassed}.`);
        console.log(`Всего космонавтов на станции ${astronautsAmount}.`);
        console.log(`Всего кислорода осталось ${oxygenAmount} кубов.`);
        console.log(`Всего провианта на станции ${provisionAmount}.`);
    }

    function skipWeek() {
        weeksPassed++;
        if (!astronautsAmount) {
            console.log('Сейчас на станции нет космонавтов, ждем их прибытия.');
            logWeeklyReport();
            return;
        }

        const provisionUsed = astronautsAmount * weekAstronautNorm.provision;
        const oxygenUsed = astronautsAmount * weekAstronautNorm.oxygen;

        removeProvision(provisionUsed);
        removeOxygen(oxygenUsed);

        logWeeklyReport();
    } 

    return {
        addSpacewalk,
        addAstronauts,
        addProvision,
        addOxygen,
        removeAstronauts,
        skipWeek
    }
}

const skylab = spaceStationControl();

skylab.addSpacewalk();
skylab.addAstronauts();
skylab.addProvision(7);
skylab.skipWeek();
skylab.addAstronauts();
skylab.addOxygen(35);
skylab.addProvision(28);
skylab.addAstronauts(5);
skylab.addSpacewalk();
skylab.skipWeek();
skylab.removeAstronauts(6);
skylab.removeAstronauts(5);