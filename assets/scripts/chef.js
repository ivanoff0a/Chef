let chef = {};

chef.name = 'Luciano';
chef.nationality = 'Italian';

chef.recipes = {
    lasagna: {
        img: 'assets/img/lasagna.jpg',
        name: 'Lasagna',
        timeToCook: 120,
        history: 'It is Lasagna, nothing more',
        ingridients: [
            'tomatoes',
            'onions',
            'pastry',
            'cheese',
            'meat'
        ]
    },
    pasta: {
        img: 'assets/img/pasta.jpg',
        name: 'pasta',
        timeToCook: 90,
        history: 'It is Pasta, nothing more',
        ingridients: [
            'pasta',
            'fish',
            'meat',
            'shrimp'
        ]
    },
    pizza: {
        img: 'assets/img/pizza.jpg',
        name: 'Pizza',
        timeToCook: 60,
        history: 'It is Pizza, nothing more',
        ingridients: [
            'pastry',
            'sausage',
            'cheese',
            'meat',
            'mushrooms'
        ]
    }
}

chef.cook = function(recipe) {
    $('.meal-img').attr('src', chef.recipes[recipe].img);
    $('.meal-name').html('<h1>' + chef.recipes[recipe].name + '</h1>');
    $('.meal-time').html('<p>' + chef.recipes[recipe].timeToCook + '</p>');
    $('.meal-history').html('<p>' + chef.recipes[recipe].history + '</p>');
}