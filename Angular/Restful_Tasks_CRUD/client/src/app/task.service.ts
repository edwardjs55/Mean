import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private _http: HttpClient) {
    // console.log("Constructor Here!!"); // function test
    // this.addOne(); // Dev Test Only, it works..
    // this.modTask('1',{Eddie:'hello',stuff:'nope'}); // test data

   }

  allTasks() {
    return this._http.get('/tasks');
 }

 oneTask(id) { //get One Task
  console.log('oneTask(id):', id); // 
  return this._http.get('/tasks/'+id);
}

 addOne(){  // DEV test function Only!!
  // let newt = {title:'Dog Wash', description: 'Give Rascal a bath', completed: false};
  // let tempObservable = this._http.post('/tasks',newt);
  // tempObservable.subscribe(data => console.log("add a Task?", data));    
 }

  newTask(task) { //newtask
    // var news = {title:'Dog Wash', description: 'Give Rascal a bath', completed: false};
    console.log('newtask():', task); // news
    return this._http.post('/tasks',task);
 }

 delTask(id) { //delete Task
  console.log('delTask(id):', id); // news
  return this._http.delete('/tasks/'+id);
}

 modTask(id,task){
   //var id1 = '5afccb8bdfbd4c05b4fdf22e';
   //var temp =  {title: "Get the Newspapers", description: "Eddie,Go get the morning Papers"};
   console.log('modTask',id,task);
   return this._http.patch('/tasks/'+id,task);
 }

}
