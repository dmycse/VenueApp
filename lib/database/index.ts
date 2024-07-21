import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {connection: null, promise: null};

export const connectToDatabase = async () => {
  if (cached.connection) return cached.connection;

  if (!MONGODB_URI) throw new Error('MongoDB URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'Venuely',
    bufferCommands: false
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(`DB connection error: ${err}`));

  cached.connection = await cached.promise;
  console.log('cached.connection', cached.connection)
  return cached.connection;
}