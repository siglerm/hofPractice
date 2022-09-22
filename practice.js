// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      count ++;
    }
  });
  return count;

};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var results = [];
  _.each(tweets, function(element) {
    if (element.user === user) {
      results.push(element);
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(element) {
    if (element === targetFruit) {
      return element;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(element) {
    if (element[0] === letter) {
      return element;
    }
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(element) {
    if (element.type === 'cookie') {
      return element;
    }
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(element) {
    if (user === element.user) {
      return element;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  _.map(fruits, function(element) {
    return element.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  return _.map(desserts.ingredients, function(element) {
    if (element !== 'flour') {
      element.glutenFree = true;
    } else {
      element.glutenFree = false;
    }
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(element) {
    return element.message;
  });

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(element) {
    var priceSlice = parseFloat(element['price'].slice(1));//Change price into a number
    var salePrice = '$' + (priceSlice - (priceSlice * coupon)).toFixed(2);//multi num by coupon & sub num from price
    element['salePrice'] = salePrice;//Return the saleprice
    return element;
  });

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(memo, element) {
    var currPrice = parseFloat(element['price'].slice(1));
    memo += currPrice;
    return memo;
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(memo, element) {//iterate over desserts
    var currType = element.type;
    if (memo[currType] === undefined) {//Check to see if the type exists within results
      memo[currType] = 1; //If it does, add one to the count
    } else {
      memo[currType] ++;//if it doesn't, add the key set value to 1
    }
    return memo;
  }, {});
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(memo, element) {//iterate over the tweets
    var currUser = element.user;
    if (memo[currUser] === undefined) {//Check to see if the user exists within the object
      memo[currUser] = 1;//If it doesn't, add it and set value to 1
    } else {
      memo[currUser] ++;//If it already does exists, increment it
    }
    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var results = [];
  return _.reduce(movies, function(memo, element) {
    if (element.releaseYear > 1990 && element.releaseYear < 2000) {
      results.push(element.title);
    }
    return results;
  }, results);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(memo, element) {
    if (timeLimit >= 80 && element.runtime < timeLimit) {
      memo = true;
    }
    if (timeLimit <= 80) {
      memo = false;
    }
    return memo;
  });
};
