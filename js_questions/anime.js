db.animes.insertOne({ 
    name: "Kengen Ashura", 
    totalSeasons: 3, 
    movies: 0, 
    ratingOutOfFive: 3 ,
    genre : "Martial Arts",
    mainChar : "Ohma"
    })

db.animes.findOneAndReplace(
        {movies : 0},
        { 
            name: "One punch Man", 
            totalSeasons: 1000, 
            movies: 1000, 
            ratingOutOfFive: 1000 ,
            genre : "Yes",
            mainChar : "Saitama"
        },
 );
 
 db.animes.aggregate([
    {
        $match : {
            movies : {$gt : 1}
        }
    } , 
    {
        $group : {
            _id : "$ratingOutOfFive",
            totalRatingsSum : {$sum : "$ratingOutOfFive"}
        }
    }
 ])
      

db.animes.insertMany([
    { 
    name: "Jujutsu Kaisen", 
    totalSeasons: 2, 
    movies: 1, 
    ratingOutOfFive: 3.5 ,
    genre : "Fantsy",
    mainChar : "Gojo Satoru"
    },
    { 
    name: "Dragon Ball Z", 
    totalSeasons: 12, 
    movies: 10, 
    ratingOutOfFive: 4.5 ,
    genre : "Martial Arts",
    mainChar : "Son Goku"
    },
    { 
    name: "Kengen Ashura", 
    totalSeasons: 3, 
    movies: 0, 
    ratingOutOfFive: 3 ,
    genre : "Martial Arts",
    mainChar : "Ohma"
    },
    { 
    name: "Demon Slayer", 
    totalSeasons: 5, 
    movies: 4, 
    ratingOutOfFive: 4 ,
    genre : "Martial Arts",
    mainChar : "Tanjiro"
    },
    { 
    name: "Attack on Titan", 
    totalSeasons: 6, 
    movies: 3, 
    ratingOutOfFive: 4.5 ,
    genre : "Fantasy",
    mainChar : "Eren Yaeger"
    },
    { 
    name: "Chainsaw Man", 
    totalSeasons: 3, 
    movies: 0, 
    ratingOutOfFive: 3.8,
    genre : "Fantasy",
    mainChar : "Denji"
    },
])