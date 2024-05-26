db.employees.aggregate([
    {
        $match : {
            age : {$gt : "27"}
        }
    },
    {
        $group : {
            _id : "$age",
            totalSumAge : {$sum : 1}
        }
    }
])


db.playlists.aggregate([
    {
        $match : {cType : "Back-end"}
    },
    {
        $group : {
            _id : '$cType',
            totalVideos : {$sum : '$videos'},
            videosAvg : {$avg: '$videos'}
        }
    }
])
db.playlists.aggregate([
    {
      $unwind : '$videos'
    },
    {
        $match : {videos : {$gt : 30}}
    },
    {
        $group : {
            _id : '$videos',
            allVideos : {'$addToSet':'$videos'}
        }
    }
])

db.playlists.aggregate([
    {
        $project : {
            videos : 1,
            videoValue : {
                $filter : {
                    input : '$videos',
                    as : 'video',
                    cond : {$gt : ['$$video', 40]}
                }
            }
        }
    }
])

db.playlists.aggregate([
    {
      $project : {
        videos : 1,
        lessVideos : {$multiply : ['$videos' , 0.8]}
      }
    }
])



db.employees.aggregate([ { 
    $group: { 
        _id: "$age", 
        totalSumAge: { $sum: 1 } 
    }}, 
    {
        $sort : {
            totalSumAge : -1
        }
    }
] )

