// {import { Component } from '@angular/core';
// import { Task } from '../models/task.model';
// import { TaskService } from '../service/task.service';

// @Component({
//   selector: 'app-task-form',
//   templateUrl: './task-form.component.html',
//   styleUrls: ['./task-form.component.css']
// })
// export class TaskFormComponent {
//   task: Task = {
//     title: '',
//     description: '',
//     dueDate: new Date(),
//     priority: 'low',
//     status: 'not started'
//   };

//   constructor(private taskService: TaskService) {}

//   onSubmit() {
//     if (this.task.title.trim() === '' || this.task.description.trim() === '') {
//       alert('Title and Description are required!');
//       return;
//     }

//     // Call the TaskService to add the new task
//     this.taskService.addTask({ ...this.task });

//     // Reset the form
//     this.task = { title: '', description: '', dueDate: new Date(), priority: 'low', status: 'not started' };
//   }
// }

// }


import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Omit<Task, 'id'> = {
    title: '',
    description: '',
    dueDate: new Date(),
    priority: 'low',
    status: 'not started'
  };

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.task.title.trim() === '' || this.task.description.trim() === '') {
      alert('Title and Description are required!');
      return;
    }

    // Call the TaskService to add the new task
    this.taskService.addTask({ 
      ...this.task,
      id: 0 // Temporary ID, will be assigned in the service
    });

    // Reset the form
    this.task = { title: '', description: '', dueDate: new Date(), priority: 'low', status: 'not started' };
  }
}
