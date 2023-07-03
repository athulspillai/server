const db = require('./db')

//all-users
const allusers = () =>{
    return db.Users.find().then(
        (result)=>{
            if(result){
                return{
                    statuscode:200,
                    users:result
                }
            }
            else{
                return{
                    statuscode:401,
                    message:"No data is avaliable"
                }
            }
        }
    )
}

//add-user
const addUser = (id,email,password) =>{
    return db.Users.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statuscode:401,
                message:"User Id already exist"
            }
        }
        else{
            const newUser = new db.Users({
                id,
                email,
                password
            })
            newUser.save()
            return{
                statuscode:200,
                message:"New user added successfully"
            }
        }
    })
    
}

module.exports={
    allusers,
    addUser
}