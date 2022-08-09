import { Component } from '@angular/core';
import { deleteDoc } from '@angular/fire/firestore';
import { ServiceService } from '../app/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public tasks: any[] = [];

  constructor(private taskSv:ServiceService){
    taskSv.getALl().subscribe(
      res=>{
        console.log(res);
        this.tasks = res;
      }
    )
  }
  title = 'todotemplate';
  _title = "";

  addTask(){
    this.taskSv.createTask(this._title)
  }
  
delete(task: string){
  this.taskSv.delete(task)

}
}



