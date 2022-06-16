const astronautFood = [
    {
        dishName: 'scrambled eggs',
        dishType: 'breakfast',
        dishDay: 'Monday'
    },
    {
        dishName: 'soup',
        dishType: 'lunch', 
        dishDay: 'Monday'
    },
    {
        dishName: 'salad',
        dishType: 'dinner',
        dishDay: 'Monday' 
    },
    {
        dishName: 'oatmeal',
        dishType: 'breakfast',
        dishDay: 'Tuesday'
    },
    {
        dishName: 'puree',
        dishType: 'lunch',
        dishDay: 'Tuesday' 
    },
    {
        dishName: 'milk shake',
        dishType: 'dinner',
        dishDay: 'Tuesday' 
    },
    {
        dishName: 'potato',
        dishType: 'dinner',
        dishDay: 'Monday'
    }
];

function getDish(dishType, dishDay) {
    if ((dishType !== 'breakfast') && (dishType !== 'lunch') && (dishType !== 'dinner')) {
        console.log('Wrong parameter. Acceptable only "breakfast", or "lunch", or "dinner".');
        return null;
    }
    if ((dishDay !== 'Monday') && 
        (dishDay !== 'Tuesday') && 
        (dishDay !== 'Wednesday') && 
        (dishDay !== 'Thursday') && 
        (dishDay !== 'Friday') && 
        (dishDay !== 'Saturday') && 
        (dishDay !== 'Sunday')
    ) {
        console.log('Wrong parameter. Acceptable only "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", or "Sunday".');
        return null;
    }
    const dishes = [];
    astronautFood.forEach(food => {
        if (dishType === food.dishType && dishDay === food.dishDay) {
            dishes.push(food.dishName);
        }
    });
    if (!dishes.length) {
        console.log('Such type of food not found.');
        return null;
    }
    const dishIndex = Math.floor(Math.random() * dishes.length);
    return dishes[dishIndex];
}

const dish = getDish('dinner', 'Monday');
console.log('Dish: ', dish);