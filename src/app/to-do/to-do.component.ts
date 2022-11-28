import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  userId=""
  id=""
  title=""
  completed=""

  readValues=()=>{
    let data={
      "userId":this.userId,
      "id":this.id,
      "title":this.title,
      "completed":this.completed
    }
    console.log(data)
  }
}
