const User = require('../models/user-model')

createUser = (req, res) => {
    const body = req.body

    if(!body) {
        return res
            .status(400)
            .json({ status: false,
                    error: 'Please provide user details' 
                })
    }
    const user = new User(body)
    if(!user) {
        return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
    }
    user
        .save()
        .then(() => {
            return res
                    .status(201)
                    .json({
                        success: true.json,
                        id: user.id,
                        message: 'success'
                    })
        })
        .catch(error=>{
            return res
                    .status(400)
                    .json({
                        error,
                        message: error
                    })
        })
}

getUsers = async(req, res) => {
    await User.find({}, (err, users) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }

        if(!users.length) {
            return res  
                .status(404)
                .json({success: false, error: 'User not found'})
        }

        return res
            .status(200)
            .json({success: true, data: users})
            
    }).catch(err=> console.log(err))
}

createUser = (req, res) => {
    const body = req.body

    if(!body) {
        return res
            .status(400)
            .json({ status: false,
                    error: 'Please provide user details' 
                })
    }
    const user = new User(body)
    if(!user) {
        return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
    }
    user
        .save()
        .then(() => {
            return res
                    .status(201)
                    .json({
                        success: true.json,
                        id: user.id,
                        message: 'success'
                    })
        })
        .catch(error=>{
            return res
                    .status(400)
                    .json({
                        error,
                        message: error
                    })
        })
}
createPost = (req, res) => {
    const body = req.body

    if(!body) {
        return res
            .status(400)
            .json({ status: false,
                    error: 'Please provide user details' 
                })
    }
    const user = new User(body)
    if(!user) {
        return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
    }
    user
        .save()
        .then(() => {
            return res
                    .status(201)
                    .json({
                        success: true.json,
                        id: user.id,
                        message: 'success'
                    })
        })
        .catch(error=>{
            return res
                    .status(400)
                    .json({
                        error,
                        message: error
                    })
        })
}

// Get User By Name.
getUserByName = async (req, res) => {

    await User.findOne({username: req.params.username }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    getUsers,
    createPost,
    getUserByName,
}