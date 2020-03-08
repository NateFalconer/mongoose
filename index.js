const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const lasagnaDinner = {
  title: 'Lasagna',
  level: 'Easy Peasy',
  ingredients: ['pasta', 'meat', 'cheese', 'spices'],
  cuisine: 'Italian',
  dishType: 'Dish',
  image: 'https://www.365daysofbakingandmore.com/wp-content/uploads/2011/02/Lasagna-FEATURE.jpg',
  duration: 120,
  creator: 'Mario',
  created: '10/1/1969'
}

Recipe.create(lasagnaDinner, (error, recipe) => {
  if (error) {
    console.log('An error happened:', error);
    return;
  }
  console.log('The recipe is saved and its value is: ', recipe);
});

//Iteration 3: Add all recipes from data.js (imported at top as data)
  // The same code as above but with a Promise version
      // Recipe.create(data)
      // .then(recipe => console.log('The recipe is saved and its value is: ', recipe))
      // .catch(error =>
      //   console.log('An error happened while saving a new recipe:', error)
      // );


//Iteration 4: Update duration for one of the recipes in db
  // Recipe.updateOne({ title: 'Quick Lasagna' }, { duration: 100 })
  //   .then(console.log('Recipe duration updated'))
  //   .catch(console.log('An error occured'));


//Iteration 5: Delete one of the recipes from db
  // Recipe.deleteOne({ title: 'Carrot Cake' })
  //   .then(console.log('Successfully deleted Carrot Cake'))
  //   .catch(console.log('An error occured'));
  
//Iteration 6: Close the connection to db
//mongoose.connection.close();