var db=require('../dbconnection'); //reference of dbconnection.js

var User = {
    getAllUsers:function(callback){
        return db.query("Select * from users",callback);
    },
    getUserByUserName:function(uname,callback){
        return db.query("select * from users where user_id=?",[uname],callback);
    }
    // addUser:function(Task,callback){
    //     return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    // },
    // deleteTask:function(id,callback){
    //   return db.query("delete from task where Id=?",[id],callback);
    // },
    // updateTask:function(id,Task,callback){
    //   return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
    // }
};

module.exports = User;