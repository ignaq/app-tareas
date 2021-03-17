import {  Injectable } from '@angular/core';
import { Task } from './../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() { 
    this.tasks = [];
  }

  getTasks(){
    if(localStorage.getItem('tasks') === null){
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;  
    }
  }

  addTask(task: Task){
  this.tasks.push(task);
  let tasks: Task[] = [];

  if(localStorage.getItem('tasks') === null){
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }else {
    //parseo en string del localStorage en el array
    tasks = JSON.parse(localStorage.getItem('tasks'));
    //guardo la nueva tarea
    tasks.push(task);
    //vuelvo a guardar en local
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

  deleteTask(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

  changeStatus(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(task == this.tasks[i]){
        task.status = !task.status;
        this.pendingTask();
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        
      }
    }

  }

  
  pendingTask(){
    let count: number;
    let task: Task;
    count = 0;
    for(let i= 0; i < this.tasks.length; i++){
      task = this.tasks[i];
      if(!task.status){
        count += 1;
      }
    }
   
    return count;
  }

  totalTask(){
    return this.tasks.length;
  }



}
