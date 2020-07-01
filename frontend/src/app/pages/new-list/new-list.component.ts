import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Router } from '@angular/router';
import { IList } from './../../models/List.interface';


@Component({
    selector: 'new-list',
    templateUrl: './new-list.component.html'
})
export class NewListComponent implements AfterViewInit {
    @ViewChild('newListTitleInput') private _input: ElementRef;

    public newListTitle: string = '';

    constructor (
        private taskService: TaskService,
        public router: Router
    ) { }
    
    ngAfterViewInit() {
        setTimeout(() => this._input.nativeElement.focus());
    }

    public createNewList = (): void => {
        this.taskService.createList(this.newListTitle)
            .subscribe((response: IList) => {
                this.newListTitle = '';
                this.router.navigate(['/lists-view', response._id]);
            });
    }
}