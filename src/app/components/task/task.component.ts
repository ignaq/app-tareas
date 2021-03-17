import { Component, OnInit, Input } from '@angular/core';


import { Task } from './../../models/Task';

import { TaskService } from './../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //entrada de tareas
  @Input() task: Task;
  
  
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(task : Task){
    if(confirm("Estás seguro de querer eliminarlo?")){
      this.taskService.deleteTask(task);
    }
  }

  changeStatus(task: Task){
    this.taskService.changeStatus(task);
  }

  
}
