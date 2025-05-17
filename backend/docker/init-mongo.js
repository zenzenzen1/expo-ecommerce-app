// db.getSiblingDB('admin').createUser(
// {
//  user:"admin",
//  pwd:"123",
//  roles: ["root"]
// })
db.createUser(
    {
        user: "root",
        pwd: "123",
        roles: [
            {
                role: "readWrite",
                db: "admin"
            }
        ]
    }
);
db.createCollection("test");