const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('./models/movie.js');

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`);

    const seedMovies = [
      // 🎞 30 MOVIES
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
      {
        title: "The Shawshank Redemption",
        type: "Movie",
        genre: ["Drama"],
        releaseYear: 1994,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
      },
      {
        title: "Forrest Gump",
        type: "Movie",
        genre: ["Drama", "Romance"],
        releaseYear: 1994,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
      },
      {
        title: "The Matrix",
        type: "Movie",
        genre: ["Sci-Fi", "Action"],
        releaseYear: 1999,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/aOi7tWzJgRzjz3xO4AElT4Jp2QQ.jpg"
      },
      {
        title: "Gladiator",
        type: "Movie",
        genre: ["Action", "Drama"],
        releaseYear: 2000,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
      },
      {
        title: "The Godfather",
        type: "Movie",
        genre: ["Crime", "Drama"],
        releaseYear: 1972,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
      },
      {
        title: "Frozen II",
        type: "Movie",
        genre: ["Animation", "Adventure", "Fantasy"],
        releaseYear: 2019,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"
      },
      {
        title: "The Lion King",
        type: "Movie",
        genre: ["Animation", "Adventure", "Drama"],
        releaseYear: 1994,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
      },
      {
        title: "The Avengers",
        type: "Movie",
        genre: ["Action", "Sci-Fi"],
        releaseYear: 2012,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
      },
      {
        title: "Black Panther",
        type: "Movie",
        genre: ["Action", "Adventure"],
        releaseYear: 2018,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
      },
      {
        title: "Parasite",
        type: "Movie",
        genre: ["Thriller", "Drama"],
        releaseYear: 2019,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
      },
      {
        title: "No Time To Die",
        type: "Movie",
        genre: ["Action", "Spy", "Thriller"],
        releaseYear: 2021,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
      },
      {
        title: "The Batman",
        type: "Movie",
        genre: ["Crime", "Drama", "Action"],
        releaseYear: 2022,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
      },
      {
        title: "The Super Mario Bros. Movie",
        type: "Movie",
        genre: ["Animation", "Adventure"],
        releaseYear: 2023,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
      },
      {
        title: "Guardians of the Galaxy Vol. 3",
        type: "Movie",
        genre: ["Action", "Adventure"],
        releaseYear: 2023,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
      },
      {
        title: "Top Gun: Maverick",
        type: "Movie",
        genre: ["Action", "Drama"],
        releaseYear: 2022,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
      },
      {
        title: "John Wick: Chapter 4",
        type: "Movie",
        genre: ["Action", "Thriller"],
        releaseYear: 2023,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
      },
      {
        title: "Spider-Man: No Way Home",
        type: "Movie",
        genre: ["Action", "Fantasy"],
        releaseYear: 2021,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
      },
      {
        title: "Doctor Strange in the Multiverse of Madness",
        type: "Movie",
        genre: ["Fantasy", "Action"],
        releaseYear: 2022,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
      },
      {
        title: "Inside Out",
        type: "Movie",
        genre: ["Animation", "Comedy"],
        releaseYear: 2015,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg"
      },
      {
        title: "Soul",
        type: "Movie",
        genre: ["Animation", "Music"],
        releaseYear: 2020,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg"
      },

      // 📺 30 TV SHOWS
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
      },
      {
        title: "Bridgerton",
        type: "TV Show",
        genre: ["Drama", "Romance"],
        releaseYear: 2020,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg"
      },
      {
        title: "The Last of Us",
        type: "TV Show",
        genre: ["Drama", "Sci-Fi"],
        releaseYear: 2023,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
      },
      {
        title: "The Queen’s Gambit",
        type: "TV Show",
        genre: ["Drama"],
        releaseYear: 2020,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg"
      },
      {
        title: "House of the Dragon",
        type: "TV Show",
        genre: ["Fantasy", "Drama"],
        releaseYear: 2022,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg"
      },
      {
        title: "Loki",
        type: "TV Show",
        genre: ["Sci-Fi", "Action"],
        releaseYear: 2021,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
      },
      {
        title: "Peaky Blinders",
        type: "TV Show",
        genre: ["Crime", "Drama"],
        releaseYear: 2013,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
      },
      {
        title: "Euphoria",
        type: "TV Show",
        genre: ["Drama"],
        releaseYear: 2019,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/jfH1qKq9t2D6Wf0Z4yKc0NrFhZt.jpg"
      },
      {
        title: "The Boys",
        type: "TV Show",
        genre: ["Action", "Comedy"],
        releaseYear: 2019,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg"
      },
      {
        title: "The Umbrella Academy",
        type: "TV Show",
        genre: ["Action", "Fantasy"],
        releaseYear: 2019,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/uYHdIs5O8tiU5p6MvUPd2jElOH6.jpg"
      },
      {
        title: "Emily in Paris",
        type: "TV Show",
        genre: ["Comedy", "Romance"],
        releaseYear: 2020,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/6n9CK1nMGjZVZqXtu8FZ2x2yxrQ.jpg"
      },
      {
        title: "Outer Banks",
        type: "TV Show",
        genre: ["Adventure", "Drama"],
        releaseYear: 2020,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/rGWa72TBRcW0ihoCYGF1uykxH9Y.jpg"
      },
      {
        title: "You",
        type: "TV Show",
        genre: ["Thriller", "Drama"],
        releaseYear: 2018,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/yM3oYhRLkkNn0n1IfuFzYJ6YQCX.jpg"
      },
      {
        title: "Sex Education",
        type: "TV Show",
        genre: ["Comedy", "Drama"],
        releaseYear: 2019,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/8j12tohv1NBZNmpU93f47sAKBbw.jpg"
      },
      {
        title: "The Walking Dead",
        type: "TV Show",
        genre: ["Horror", "Drama"],
        releaseYear: 2010,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg"
      },
      {
        title: "Grey’s Anatomy",
        type: "TV Show",
        genre: ["Drama"],
        releaseYear: 2005,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/daSFbrt8QCXV2hSwB0hqYjbj681.jpg"
      },
      {
        title: "How I Met Your Mother",
        type: "TV Show",
        genre: ["Comedy", "Romance"],
        releaseYear: 2005,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/fD2lY2AqSE0rz6P1Y3GzA6o1DjQ.jpg"
      },
      {
        title: "Lost",
        type: "TV Show",
        genre: ["Drama", "Mystery"],
        releaseYear: 2004,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/ogwE7fNlgdUX5yrD5xwyW7xOxR8.jpg"
      },
      {
        title: "Narcos",
        type: "TV Show",
        genre: ["Crime", "Drama"],
        releaseYear: 2015,
        watched: true,
        image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg"
      },
      {
        title: "Better Call Saul",
        type: "TV Show",
        genre: ["Crime", "Drama"],
        releaseYear: 2015,
        watched: false,
        image: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg"
      }
    ];

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