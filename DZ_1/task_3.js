const numberOfPurchases = 1;
const netCostOfGoods = 5;
const shippingCost = 5;
const goodPrice = 5;
const month = 'Май';

const income = numberOfPurchases * goodPrice;
const expenses = (numberOfPurchases * netCostOfGoods) + shippingCost;
const profit = income - expenses;

const directorsName = 'Алина Юрьевна'

if (expenses > 0 && income <= 0) {
    console.log(`Добрый день, ${directorsName}. Высылаю отчет за ${month}. В этом месяце убыток составил - ${expenses} грн.`);
} else if ((profit <= 0)) {
    console.log(`Добрый день, ${directorsName}. Высылаю отчет за ${month}. В этом месяце по прибыли мы вышли в 0 грн.`);
} else {
    console.log(`Добрый день, ${directorsName}. Высылаю отчет за ${month}. В этом месяце наши доходы составили ${income} грн. Расходы - ${expenses} грн. Прибыль - ${profit} грн.`);
}