let cash = 100
const p1 = 18
const p2 = 16
const p3 = 15
const p4 = 70
const p5 = 30

//Level 1
console.log('Level 1');
const sumOfProducts = p1 + p2 + p3 + p4 + p5;

if (cash >= sumOfProducts) {
    console.log(`After purchasing all items, you will have ${cash - sumOfProducts} UAH.`); 
} else {
    console.log("Sorry, but you can't buy all goods:(");
}

//Level 2
console.log('Level 2');

if ((cash - p1) < 0) {
    console.log(`You do not have enough money. You have ${cash}. But price is ${p1}`)
} else if ((cash - (p1 + p2)) < 0) {
    console.log(`You do not have enough money. You have ${cash - p1}. But price is ${p2}`)
} else if ((cash - (p1 + p2 + p3)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2)}. But price is ${p3}`)
} else if ((cash - (p1 + p2 + p3 + p4)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2 + p3)}. But price is ${p4}`)
} else if ((cash - (p1 + p2 + p3 + p4 + p5)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2 + p3 + p4)}. But price is ${p5}`)
} else { 
    console.log(`The rest of money is ${cash - (p1 + p2 + p3 + p4 + p5)} UAH.`);  
}

//Level 3
console.log('Level 3');
if ((cash - p1) < 0) {
    console.log(`You do not have enough money. You have ${cash}. But price is ${p1}`)

    if ((cash - p2) >= 0) {
        console.log(`But you can buy p2. The rest of money ${cash - p2} UAH`)
    } else if ((cash - p3) >= 0) {
        console.log(`But you can buy p3. The rest of money ${cash - p3} UAH`)
    } else if ((cash - p4) >= 0) {
        console.log(`But you can buy p4. The rest of money ${cash - p4} UAH`)
    } else if ((cash - p5) >= 0) {
        console.log(`But you can buy p5. The rest of money ${cash - p5} UAH`)
    }
} else if ((cash - (p1 + p2)) < 0) {
    console.log(`You do not have enough money. You have ${cash - p1}. But price is ${p2}`)

    if ((cash - p1 - p3) >= 0) {
        console.log(`But you can buy p3. The rest of money ${cash - p1 - p3} UAH`)
    } else if ((cash - p4) >= 0) {
        console.log(`But you can buy p4. The rest of money ${cash - p1 - p4} UAH`)
    } else if ((cash - p5) >= 0) {
        console.log(`But you can buy p5. The rest of money ${cash - p1 - p5} UAH`)
    }
}
 else if ((cash - (p1 + p2 + p3)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2)}. But price is ${p3}`)
    
    if ((cash - p1) >= 0) {
        console.log(`But you can buy p1. The rest of money ${cash - (p1 + p2) -p1} UAH`)
    } else if ((cash - p2) >= 0) {
        console.log(`But you can buy p2. The rest of money ${cash - (p1 + p2) - p2} UAH`)
    } else if ((cash - p4) >= 0) {
        console.log(`But you can buy p4. The rest of money ${cash - (p1 + p2) - p4} UAH`)
    } else if ((cash - p5) >= 0) {
        console.log(`But you can buy p5. The rest of money ${cash - (p1 + p2) - p5} UAH`)
    }
} else if ((cash - (p1 + p2 + p3 + p4)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2 + p3)}. But price is ${p4}`)
    
    if ((cash - p1) >= 0) {
        console.log(`But you can buy p1. The rest of money ${cash - (p1 + p2 + p3) - p1} UAH`)
    } else if ((cash - p2) >= 0) {
        console.log(`But you can buy p2. The rest of money ${cash - (p1 + p2 + p3) - p2} UAH`)
    } else if ((cash - p4) >= 0) {
        console.log(`But you can buy p3. The rest of money ${cash - (p1 + p2 + p3) - p3} UAH`)
    } else if ((cash - p5) >= 0) {
        console.log(`But you can buy p5. The rest of money ${cash - (p1 + p2 + p3) - p5} UAH`)
    }
} else if ((cash - (p1 + p2 + p3 + p4 + p5)) < 0) {
    console.log(`You do not have enough money. You have ${cash - (p1 + p2 + p3 + p4)} UAH. But price is ${p5} UAH`)
    
    if ((cash - p1) >= 0) {
        console.log(`But you can buy p1. The rest of money ${cash - (p1 + p2 + p3 + p4) - p1} UAH`)
    } else if ((cash - p2) >= 0) {
        console.log(`But you can buy p2. The rest of money ${cash - (p1 + p2 + p3 + p4) - p2} UAH`)
    } else if ((cash - p4) >= 0) {
        console.log(`But you can buy p3. The rest of money ${cash - (p1 + p2 + p3 + p4) - p3} UAH`)
    } else if ((cash - p5) >= 0) {
        console.log(`But you can buy p4. The rest of money ${cash - (p1 + p2 + p3 + p4) - p4} UAH`)
    }
    
} else { 
    console.log(`The rest of money is ${cash - (p1 + p2 + p3 + p4 + p5)} UAH.`);  
}
