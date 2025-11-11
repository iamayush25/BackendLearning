const {User} = require('../model/userSchema.js');

const userData = async(req, res) => {
    const {email} = req.body
    try {
        const details = await User.findOne({email})
        if(details){
            return res.status(400).json({message: "User already created account..."})
        }
        const sumbit = new User(req.body)
        await sumbit.save()
        console.log(sumbit);
        res.status(200).json({message: "successfully create your account",sumbit})
    } catch (error) {
        console.log(error);  
    }

}

const viewUser = async(req,res) => {
    try {
        const fetchData = await User.find({})
        res.status(200).json(fetchData)
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {userData, viewUser}
