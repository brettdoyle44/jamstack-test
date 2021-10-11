require('dotenv').config()
const formattedResponse = require('./utils/formattedResponse')
const {DELETE_LINK} = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')

exports.handler = async (event) => {
    const { id } = JSON.parse(event.body)
    const variables = { id }
    try {
        const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables)

        return formattedResponse(200, deletedLink)
    } catch(err) {
        console.error(err)
        return formattedResponse(500, { err: 'Something went wrong'})
    }
}