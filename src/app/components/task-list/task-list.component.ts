import { Component, OnInit } from '@angular/core';

import { Task } from './../../models/Task';

import { TaskService } from './../../services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Task[];

  constructor(public taskService: TaskService) {

   }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

}
