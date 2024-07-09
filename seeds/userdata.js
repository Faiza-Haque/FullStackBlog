const{User} = require("../models");
const userData = [{
    username: "FaizaHaque",
    password:"1amalwaysHappy!",
}];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
