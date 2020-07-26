import { TasksService } from './../../service/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId;
  task;

  constructor(private route: ActivatedRoute ,
              private taskSer: TasksService ,
              private router: Router,
              private title: Title) {
                this.title.setTitle('Tasks');
               }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    console.log(this.taskId);
    this.task = this.taskSer.tasks[this.taskId] ;
  }

  saveTask(){
    this.taskSer.editTask(this.taskId , this.task) ,
    this.router.navigate(['/']);
  }

  deleteTask(){
    this.taskSer.deleteTask(this.taskId) ;
    this.router.navigate(['/']);

  }

}
