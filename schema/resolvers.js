const { UserList }= require('../FakeData');


//With the reslvers we start with the highest level field. in our case its the type Query, 
//within which a resolver function for the User type
const resolvers = {
    Query:{
        users(){
            return UserList;
        }
    }
}

module.exports = { resolvers }