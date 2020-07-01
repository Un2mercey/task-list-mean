const listController = require('./../controllers/list.contoller');
const taskController = require('./../controllers/task.contrroller');

module.exports = (app) => {

    app.route('/lists')
        .get(listController.getLists)
        .post(listController.createList);
  
    app.route('/lists/:listId')
        .patch(listController.updateList)
        .delete(listController.deleteList);

    app.route('/lists/:listId/tasks')
        .get(taskController.getTasks)
        .post(taskController.createTask);
    
    app.route('/lists/:listId/tasks/:taskId')
        .patch(taskController.updateTask)
        .delete(taskController.deleteTask);
};