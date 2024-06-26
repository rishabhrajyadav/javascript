const mongoose = require("mongoose")
const URL =  "mongodb://127.0.0.1:27017/animeworld"

const connect = async () => {
    try {
        const connection = await mongoose.connect(URL);
        console.log("Connection Achieved from Mongoose !!")
    } catch (error) {
        console.log(`${error} : Connection Failed From Mongoose !!`)
    }    
}

connect();
const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        unique : true
    },
    pType : {
        type : String,
        required : true,
    },
    evolutionStage : {
        type : Number,
        required : true
    },
    powerOutOfFive : {
        type : Number,
        required : true
    },
})

//created our collection
const Pokemon = new mongoose.model("Pokemon" , pokemonSchema);

const insertPokemons = async() => {
  try {
     const p1 = new Pokemon({
        name : "Pikachu",
        pType : "Electric",
        evolutionStage : 2,
        powerOutOfFive : 3
     })
     const p2 = new Pokemon({
        name : "Infernape",
        pType : "fire",
        evolutionStage : 3,
        powerOutOfFive : 4.4
     })
     const p3 = new Pokemon({
        name : "GreyNinja",
        pType : "Water",
        evolutionStage : 3,
        powerOutOfFive : 4
     })
     const p4 = new Pokemon({
        name : "Kingler",
        pType : "Water",
        evolutionStage : 2,
        powerOutOfFive : 3
     })
     const p5 = new Pokemon({
        name : "Magic Carp",
        pType : "Water",
        evolutionStage : 1,
        powerOutOfFive : 2
     })
     const p6 = new Pokemon({
        name : "Charizard",
        pType : "Fire",
        evolutionStage : 3,
        powerOutOfFive : 4.5
     })
     const p7 = new Pokemon({
        name : "Snorlax",
        pType : "Ground",
        evolutionStage : 1,
        powerOutOfFive : 3.5
         })
     const p8 = new Pokemon({
        name : "Electrabuzz",
        pType : "Electric",
        evolutionStage : 1,
        powerOutOfFive : 3.8
         })

      const insertP = await Pokemon.insertMany([p1,p2,p3,p4,p5,p6,p7,p8])  
      console.log(insertP); 
  } catch (error) {
    console.log("Failed to Insert POOKKEEMMOOONNss !!")
  }
}

//insertPokemons()

const agp1 = async () => {
    try {
        const result = await Pokemon.aggregate([
            {
                $match : { 
                    powerOutOfFive : {$gt : 4}
                }
            },
        ])
        console.log(result);
    } catch (error) {
        console.log(`${error} : Aggregation Failed`);
    }
}
const agp2 = async () => {
    try {
        const result = await Pokemon.aggregate([
            {
                $group : {
                    _id : "$evolutionStage",
                    count : {$sum : 1}
                }
            },
            {
                $project :{
                    _id : 0,
                }
            }
        ])
        console.log(result);
    } catch (error) {
        console.log(`${error} : Aggregation Failed`);
    }
}

const agp3 = async() => {
  try {
    const result = await Pokemon.aggregate([
        {
            $facet :{
                groupByType : [
                    {
                       $group : {
                            _id : "$pType",
                            averagePower : {$avg : "$powerOutOfFive"}
                        }
                    }
                ],

                filterByPower : [
                    {
                        $match : {
                            powerOutOfFive : {$gt : 3.5}
                        }
                    }
                ],
                sortByName : [
                    {
                        $sort : {name : 1}
                    }
                ]
            }
        }
    ])
    console.log(result);
  } catch (error) {
    console.log(`${error} : Aggregation failed`);
  }
}

const updateP = async() => {
    try {
        const res = await Pokemon.updateOne(
        { name: "Infernape" },
        { $set: { pType: "Fire" } }
        )
        console.log(res);
    } catch (error) {
        console.log(`${error} Updated One`);
    }
}

updateP()

//agp1()
//agp2()
//agp3()

