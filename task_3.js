const numberOfPurchases = 8;
const netCostOfGoods = 5;
const shippingCost = 5;
const goodPrice = 10;
const month = 'Май';

const income = numberOfPurchases * goodPrice;
const expenses = (numberOfPurchases * netCostOfGoods) + shippingCost;
const profit = income - expenses;

const directorsName = 'Алина Юрьевна'

console.log(`Добрый день, ${directorsName}. Высылаю отчет за ${month}. В этом месяце наши доходы составили ${income} грн. Расходы - ${expenses} грн. Прибыль - ${profit}.`);