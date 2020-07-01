const mongoose = require('mongoose');
const Task = mongoose.model('Task');

/**
 * @method GET
 * @param {string} listId - id of the list
 * @description get all tasks in the list
 */
exports.getTasks = (request, response) => {
    Task.find({ _listId: request.params.listId})
        .then((tasksDoc) => { response.send(tasksDoc); })
        .catch((error) => { response.send(error); });
};

/**
 * @method POST
 * @param {string} title - the title of new task
 * @param {string} listId - id of the list 
 * @description create a new task in the list
 */
exports.createTask = (request, response) => {
    let newTask = new Task({
        title: request.body.title,
        _listId: request.params.listId
    });
    newTask.save()
        .then((newTaskDoc) => { response.send(newTaskDoc); })
        .catch((error) => { response.send(error); });
};

/**
 * @method PATCH
 * @param {string} title - a new task title
 * @param {string} listId - id of the list
 * @param {string} taskId - id of the task
 * @description update a task in the list
 */
exports.updateTask = (request, response) => {
    Task.findOneAndUpdate({
        _id: request.params.taskId,
        _listId: request.params.listId
    }, {
        $set: request.body
    }).then((resp) => { response.send({ message: 'Update task succsessfully!' }); })
      .catch((error) => { response.send(error); });
};

/**
 * @method DELETE
 * @param {string} listId - id of the list
 * @param {string} taskId - id of the task
 * @description delete a task in the list
 */
exports.deleteTask = (request, response) => {
    Task.findOneAndRemove({ 
        _id: request.params.taskId,
        _listId: request.params.listId
    }).then((removedTaskDoc) => { response.send(removedTaskDoc); })
      .catch((error) => { response.send(error); });
};
