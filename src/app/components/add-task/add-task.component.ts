import { TasksService } from './../../service/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSer: TasksService,
              private router: Router,
              private title: Title) {
                this.title.setTitle('Add New Task');
               }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveTask(title , des){
    this.taskSer.saveTask(title.value , des.value) ;
    this.router.navigate(['/']);
  }
}
