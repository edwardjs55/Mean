import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  newTask: Task;
  tasks: Task[] = [];
  task: Task;
  eTask: Task;
  temp_id: string;
  selectedTask: Task;

  //Injectable
  constructor(private _taskService: TaskService){
  }

  ngOnInit() {
    this.newTask = { title: "", description: "",completed: false};
    this.eTask = { title: "", description: "",completed: false};

    this.getTasks();
  }
  getTasks(){
    let observable = this._taskService.allTasks();
    observable.subscribe((tasks: Task[]) => {
      console.log('getTasks: ',tasks);
      this.tasks = tasks;    // this.task = tasks;
    })
  }

  getTask(id){
    let observable = this._taskService.oneTask(id);
    observable.subscribe((task: Task) => {
      console.log('getTask: ',task);
      this.task = task;    // this.task = tasks;
    })
  }

  createTask() {
    let observable = this._taskService.newTask(this.newTask);
    console.log('createTask: ',this.newTask);
    observable.subscribe((task: Task[]) => {
    this.getTasks();
    this.newTask = { title: "", description: "", completed: false};
    })
  }

  deleteTask(id) {
    let observable = this._taskService.delTask(id);
    console.log('deleteTask: ',id);
    observable.subscribe((task) => {
    console.log('Delete result/finale/??:',task);  
    this.getTasks();
    // this.newTask = { title: "", description: "", completed: false};
    })
  }
  
  updateTask(id,task){
    let observable = this._taskService.modTask(id,task);
    observable.subscribe((task: Task) => {
      console.log('updateTask:',task);
      //this.pets = pets;    // this.pet = pets;
    })
  }

  // info(idx) {   //   this.task = this.tasks[idx];  // }
  info(task){
    this.task = task;
    //this.selectedTask = task;
  }

  show(task){
    //this.task = task;
    this.selectedTask = task;
  }
  edit(id){
    console.log('Edit/id:',id);
    this.getTask(id);
    this.temp_id=id;
    this.eTask = this.task;

  }
  
  delete(id){
    console.log('Delete/id:',id);
    this.deleteTask(id);
  }
  
  saveTask(id){
    console.log('Save/id:',id);
    this.updateTask(id,this.eTask);
    this.getTasks();


  }

}
