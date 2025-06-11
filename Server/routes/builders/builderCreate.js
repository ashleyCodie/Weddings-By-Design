import builderModel from "../../schemas/builderModel.js"

const builderCreate = async (req, res) => {
    const { packageSelected, roles, tasks } = req.body

    if (
        (!packageSelected || packageSelected == "") ||
        (!roles || roles.length === 0) 
     ) {
            res.status(500).json({ "message": "Builder not valid" })
        } else {
            const newBuilder = await builderModel.create({ packageSelected, roles, tasks})
            console.log("newBuilder", newBuilder)
            res.status(200).json({ "success": true, "message": "Builder Created"})
        }
  
}
export default builderCreate