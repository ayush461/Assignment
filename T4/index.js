const mongoose = require('mongoose');
const User = require('./schemas/user');

const City = require('./schemas/city');


async function run() {
  try {
    await mongoose.connect('mongodb+srv://ayuss:ayuss@cluster0.gi5tj.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Create sample cities
    const city1 = await City.create({ name: 'City A', country: 'Country A' });
    const city2 = await City.create({ name: 'City B', country: 'Country B' });

    // Create sample users referencing the cities
    await User.create({ name: 'User 1', age: 25, city: city1 });
    await User.create({ name: 'User 2', age: 30, city: city2 });

    // Example: Aggregation and Populate
    const users = await User.aggregate([
      {
        $lookup: {
          from: 'cities', // Name of the City collection
          localField: 'city',
          foreignField: '_id',
          as: 'cityInfo',
        },
      },
      {
        $unwind: '$cityInfo',
      },
    ]);

    console.log('Users with City Information:');
    console.log(users);

    // Accessing individual user and city values
    users.forEach((user) => {
      console.log('User:', user.name);
      console.log('Age:', user.age);
      console.log('City:', user.cityInfo.name);
      console.log('Country:', user.cityInfo.country);
    });

    mongoose.connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
 run();