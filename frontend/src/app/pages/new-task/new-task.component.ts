import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, OnChanges, AfterContentChecked, AfterContentInit} from '@angular/core';
import { TaskService } from './../../services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ITask } from './../../models/Task.interface';


@Component({
    selector: 'new-task',
    templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit, AfterViewInit {
    @ViewChild('newTaskTitleInput') private _input: ElementRef;

    public newTaskTitle: string = '';
    public listId: string;

    constructor (
        private taskService: TaskService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => { 
                this.listId = params['listId'];
            });
    }

    ngAfterViewInit() {
        setTimeout(() => this._input.nativeElement.focus());
    }

    public back = (): void => {
        this.router.navigate(['./../'], { relativeTo: this.route });
    }

    public createNewTask = (): void => {
        if (this.newTaskTitle.length) {
            this.taskService.createTask(this.listId, this.newTaskTitle)
            .subscribe((response: ITask) => { this.back(); });
        }
    }
}