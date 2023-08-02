// db.js

import mongoose from 'mongoose';

let cachedDb = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    // If a database connection is already established, return the cached connection
    return cachedDb;
  }

  try {
    // Establish a new database connection
    const connection = await mongoose.connect('mongodb://localhost:27017/contest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connection established');

    // Cache the database object for future reuse
    cachedDb = connection.connection.db;

    return cachedDb;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
