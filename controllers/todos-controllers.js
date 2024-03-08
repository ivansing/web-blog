class TodosController {
    getAll = () => {
        return (req, res, next) => {
            res.status(202).json({
                success: true,
                data: [
                    {todo: 'learn Node.js'},
                    {todo: 'learn Java'}
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

module.exports = new TodosController()