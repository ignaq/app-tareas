import { Component, OnInit } from '@angular/core';

import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  

  constructor(public taskService: TaskService ) {}

  
  ngOnInit(): void {
  }
 
  pendingTask(){
    return this.taskService.pendingTask();
  }

  totalTask(){
    return this.taskService.totalTask();
  }

 

}
