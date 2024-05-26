db.customer.insertMany([
    {
      id : 101,
      name : "John Doe",
      order_number : "john@gmail.com"
    },
    {
      id : 102,
      name : "Emily Smith",
      email : "emily@gmail.com"
    },
    {
      id : 103,
      name : "Jane Anderson",
      email : "jane@gmail.com"
    },
])

db.orders.insertMany([
    {
      name : "John Doe",
      order_number : "ORD001",
      customer_id : 101
    },
    {
      name : "Emily Smith",
      order_number : "ORD002",
      customer_id : 102
    },
    {
      name : "Jane Anderson",
      order_number : "ORD003",
      customer_id : 104
    },
])

db.orders.deleteMany({})

db.customer.aggregate([
    {
        $lookup : {
            from : "orders",
            localField : "id",
            foreignField : "customer_id",
            as  : "orderDetail"
        }
    },
    {
        $match : {
            orderDetail : {$ne : []}
        }
    }
])
