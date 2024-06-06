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
        ])
        console.log(result);
    } catch (error) {
        console.log(`${error} : Aggregation Failed`);
    }
}

module.exports = {agp1 , agp2}