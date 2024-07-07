const{Users} = require("../models");
const userData = [{
    username: "FaizaHaque",
    password:"1amalwaysHappy!",
}];
const seedUsers = () => Users.bulkCreate(userData);
module.exports = seedUsers;
