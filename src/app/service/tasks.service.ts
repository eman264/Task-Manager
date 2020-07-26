import { title } from 'process';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [ ];
  constructor() { }

  deleteTask(i: any){
    this.tasks.splice(i, 1) ;
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveTask(title: any, description: any){
    this.tasks.push({
      title,
      description
    });
  }

  editTask(i , data){
    this.tasks[i] = data ;
  }
}
