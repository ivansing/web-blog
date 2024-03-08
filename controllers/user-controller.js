class UserControllers {
    
    signup = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "signup"})
        }
    }

    login = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "login"})
        }
    }

    loggedInUser = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "loggedInUser"})
        }
    }
    
    update = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "update"})
        }
    }
   
}

module.exports = new UserControllers()