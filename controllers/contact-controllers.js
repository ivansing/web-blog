class ContactsController {
    getAll = () => {
        return (req, res, next) => {
            res.status(202).json({
                success: true,
                data: [
                    {fname: 'Ivan', lname: 'Duarte', phone: '234-234,1234'},
                    {fname: 'Max', lname: 'Duarte', phone: '234-234,3454'}
                ]
            })
        }
       
    }
    create = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "create"})
        }
    }
    findById = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "findById"})
        }
    }
    update = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "update"})
        }
    }
    delete = () => {
        return (req, res, next) => {
            res.status(200).json({success: true, method: "delete"})
        }
    }
}

module.exports = new ContactsController()