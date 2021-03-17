import { Component, OnInit } from '@angular/core';


import { TaskService } from './../../services/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  
  constructor(public taskService: TaskService) {

   }

  ngOnInit(): void {
  }

  addTask(taskname: HTMLInputElement){
    
   
    this.taskService.addTask(
      {name: taskname.value, status: false}
      )
     
    taskname.value = '';
    return false;
  }
  
}
