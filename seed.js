const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('./models/movie.js');

// 1️⃣ Connect and seed inside an async function
async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`);

   const seedMovies = [
  {
    title: "Inception",
    type: "Movie",
    genre: ["Sci-Fi", "Thriller"],
    releaseYear: 2010,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Interstellar",
    type: "Movie",
    genre: ["Sci-Fi", "Drama"],
    releaseYear: 2014,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    title: "The Dark Knight",
    type: "Movie",
    genre: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Titanic",
    type: "Movie",
    genre: ["Romance", "Drama"],
    releaseYear: 1997,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    title: "Avatar",
    type: "Movie",
    genre: ["Fantasy", "Adventure"],
    releaseYear: 2009,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
  },
  {
    title: "La La Land",
    type: "Movie",
    genre: ["Romance", "Musical", "Drama"],
    releaseYear: 2016,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
  },
  {
    title: "Dune",
    type: "Movie",
    genre: ["Sci-Fi", "Adventure"],
    releaseYear: 2021,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  {
    title: "Joker",
    type: "Movie",
    genre: ["Drama", "Crime", "Thriller"],
    releaseYear: 2019,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    title: "Barbie",
    type: "Movie",
    genre: ["Comedy", "Fantasy"],
    releaseYear: 2023,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Oppenheimer",
    type: "Movie",
    genre: ["Drama", "Biography"],
    releaseYear: 2023,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/bvq7PawzX2SJQmhC5tK1j8LEzsu.jpg"
  },
  // 📺 TV Shows
  {
    title: "Friends",
    type: "TV Show",
    genre: ["Comedy", "Romance"],
    releaseYear: 1994,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
  },
  {
    title: "Breaking Bad",
    type: "TV Show",
    genre: ["Crime", "Drama"],
    releaseYear: 2008,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  },
  {
    title: "The Office",
    type: "TV Show",
    genre: ["Comedy"],
    releaseYear: 2005,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg"
  },
  {
    title: "Game of Thrones",
    type: "TV Show",
    genre: ["Fantasy", "Drama", "Action"],
    releaseYear: 2011,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
  },
  {
    title: "Stranger Things",
    type: "TV Show",
    genre: ["Sci-Fi", "Mystery"],
    releaseYear: 2016,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    title: "The Crown",
    type: "TV Show",
    genre: ["Drama", "Biography"],
    releaseYear: 2016,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/1s1mLZUjV41xEudrQ18Fzfl2kV9.jpg"
  },
  {
    title: "The Mandalorian",
    type: "TV Show",
    genre: ["Sci-Fi", "Adventure"],
    releaseYear: 2019,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg"
  },
  {
    title: "Money Heist",
    type: "TV Show",
    genre: ["Crime", "Thriller"],
    releaseYear: 2017,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/moFA7evVPRPESYkjrTKOPnA9WaY.jpg"
  },
  {
    title: "The Witcher",
    type: "TV Show",
    genre: ["Fantasy", "Action"],
    releaseYear: 2019,
    watched: false,
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
  },
  {
    title: "Wednesday",
    type: "TV Show",
    genre: ["Comedy", "Mystery", "Fantasy"],
    releaseYear: 2022,
    watched: true,
    image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
  }
];

    // 3️⃣ Clear old data + insert new
    await Movie.deleteMany({});
    console.log("🗑 Old movie data cleared.");

    await Movie.insertMany(seedMovies);
    console.log("✅ Seed data inserted successfully!");

    await mongoose.connection.close();
    console.log("🔒 MongoDB connection closed.");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    mongoose.connection.close();
  }
}

seedDatabase();