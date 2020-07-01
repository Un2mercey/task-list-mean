import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ITask } from './../../models/Task.interface';
import { IList } from './../../models/List.interface';


@Component({
    selector: 'lists-view',
    templateUrl: './lists-view.component.html'
})
export class ListsViewComponent implements OnInit {

    public lists: Array<IList> = [];
    public tasks: Array<ITask> = [];
    public isAddTaskBtnDisabled: boolean = true;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                if (params && params.listId) { 
                    this.loadListTasks(params.listId);
                    this.isAddTaskBtnDisabled = false;
                } else this.isAddTaskBtnDisabled = true;
            });
        this.loadLists();
    }

    public loadLists = (): void => {
        this.taskService.getLists()
            .subscribe((response: Array<IList>) => { this.lists = response; });
    }

    public loadListTasks = (listId: string): void => {
        this.taskService.getTasks(listId)
            .subscribe((response: Array<ITask>) => { this.tasks = response; });
    }

    public deleteTask = (task: ITask) => {
        this.taskService.deleteTask(task)
            .subscribe(() => { this.loadListTasks(task._listId); });
    }

    public deleteList = (listId: string) => {
        this.taskService.deleteList(listId)
            .subscribe((response: IList) => { this.loadLists(); });
    }

    public doneTask = (task: ITask) => {
        this.taskService.completeTask(task)
            .subscribe((response: { message: string }) => { 
                task.isDone = !task.isDone;
                this.checkCompleteList();
            });
    }

    public checkCompleteList = (): void => {
        let currentList = this.lists.find((list: IList) => list._id === this.tasks[0]._listId);
        let sumOfDonedTasks: number = this.tasks.reduce((counter: number, task: ITask) => task.isDone ? ++counter : counter, 0);
        if ((sumOfDonedTasks === this.tasks.length && !currentList.isCompleted) || 
            (sumOfDonedTasks !== this.tasks.length && currentList.isCompleted)) {
                this.taskService.updateList(currentList)
                    .subscribe((response: { message: string }) => {
                        currentList.isCompleted = !currentList.isCompleted;
                    });
        }
    }
}