import { TasksService } from './../../service/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer: TasksService,
              private title: Title) {
                this.title.setTitle('Task Manager');
     }

  ngOnInit(): void {
  }

  deleteTask(i: any){
    this.tasksSer.deleteTask(i) ;
  }

}
