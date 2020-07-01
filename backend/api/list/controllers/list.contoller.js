const mongoose = require('mongoose');
const List = mongoose.model('List');

/**
 * @method GET
 * @param empty without params
 * @description get all lists
 */
exports.getLists = (request, response) => {
    List.find({})
        .then((listsDoc) => { response.send(listsDoc); })
        .catch((error) => { response.send(error); });
};

/**
 * @method POST
 * @param {string} title - a new list title
 * @description create a new list
 */
exports.createList = (request, response) => {
    let title = request.body.title;
    let newList = new List({ title });
    newList.save()
        .then((listDoc) => { response.send(listDoc); })
        .catch((error) => { response.send(error); });
};

/**
 * @method PATCH;
 * @param {string} listId - a list id to update
 * @description update a scpecified list
 */
exports.updateList = (request, response) => {
    List.findOneAndUpdate({ _id: request.params.listId }, { $set: request.body })
        .then(() => { response.send({ message: 'Update list succsessfully!' }); })
        .catch((error) => { response.send(error); });
};

/**
 * @method DELETE;
 * @param {string} listId - a list id to delete
 * @description delete a scpecified list
 */
exports.deleteList = (request, response) => {
    List.findOneAndRemove({ _id: request.params.listId })
        .then((removedListDoc) => { response.send(removedListDoc); })
        .catch((error) => { response.send(error); });
};