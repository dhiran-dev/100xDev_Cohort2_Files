/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //map through the array,
  //let result = [] empty array
  //if currentElement.category is already available in result array
  //add the currentElement.price to the toalSpent in the array
  //else add it to 0 and create a new object
  let result = [];
  let input = transactions;
  input.map((item) => {
    //check if category exist in result array
    const categoryExist = result.some(
      (resultItem) => resultItem.category == item.category
    );

    if (!categoryExist) {
      result.push({
        category: item.category,
        totalSpent: item.price,
      });
    } else {
      result.forEach((resultItem) => {
        if (resultItem.category == item.category) {
          resultItem.totalSpent += item.price;
        }
      });
    }

    // if (categoryExist) {
    //   result.resultItem.totalSpent = resultItem.totalSpent + item.price;
    // }
  });

  return result;
}

// let item1 = {
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: "Food",
//   itemName: "Pizza",
// };

// let item2 = {
//   id: 1,
//   timestamp: 1656076800000,
//   price: 20,
//   category: "Food",
//   itemName: "Pizza",
// };

// console.log(calculateTotalSpentByCategory([item1, item2]));
module.exports = calculateTotalSpentByCategory;
