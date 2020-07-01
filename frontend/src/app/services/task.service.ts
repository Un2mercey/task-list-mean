import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';
import { IList } from './../models/List.interface';
import { ITask } from './../models/Task.interface';


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(
        private webRequestService: WebRequestService
    ) { }
    
    /**
     * @method GET
     * @description get all lists
     */
    public getLists = (): Observable<Object> => {
        let uri: string = 'lists';
        return this.webRequestService.get(uri);
    }

    /**
     * @method POST
     * @param {string} title - title of the new list
     */
    public createList = (title: string): Observable<Object> => {
        let uri: string = 'lists';
        let payload: Object = { title: title };
        return this.webRequestService.post(uri, payload);
    }

    /**
     * @method PATCH
     * @param {IList} list
     */
    public updateList = (list: IList): Observable<Object> => {
        let uri: string = `lists/${list._id}`;
        let payload: Object = { isCompleted: !list.isCompleted };
        return this.webRequestService.patch(uri, payload);
    }

    /**
     * @method DELETE
     * @param {string} id
     */
    public deleteList = (id: string): Observable<Object> => {
        let uri: string = `lists/${id}`;
        return this.webRequestService.delete(uri)
    }

    /**
     * @method GET
     * @param {string} listId
     */
    public getTasks = (listId: string): Observable<Object> => {
        let uri: string = `lists/${listId}/tasks`;
        return this.webRequestService.get(uri);
    }

    /**
     * @method POST
     * @param {string} listId
     * @param {string} title - title of the new task
     */
    public createTask = (listId: string, title: string): Observable<Object> => {
        let uri: string = `lists/${listId}/tasks`;
        let payload: Object = { title: title };
        return this.webRequestService.post(uri, payload);
    }

    /**
     * @method DELETE
     * @param {string} listId
     * @param {string} taskId
     */
    public deleteTask = (task: ITask): Observable<Object> => {
        let uri: string = `lists/${task._listId}/tasks/${task._id}`;
        return this.webRequestService.delete(uri);
    }

    /**
     * @method PATCH
     * @param {ITask} task
     */
    public completeTask = (task: ITask): Observable<Object> => {
        let uri: string = `lists/${task._listId}/tasks/${task._id}`;
        let payload: Object = { isDone: !task.isDone };
        return this.webRequestService.patch(uri, payload);
    }
}