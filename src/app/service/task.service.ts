{// // import { Injectable } from '@angular/core';
// // import { Task } from '../models/task.model';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TaskService {
// //   private tasks: Task[] = [
// //     { title: 'Sample Task 1', description: 'Description 1', dueDate: new Date('2024-07-20'), priority: 'medium', status: 'not started' },
// //     { title: 'Sample Task 2', description: 'Description 2', dueDate: new Date('2024-08-10'), priority: 'high', status: 'in progress' }
// //   ];

// //   getTasks(): Task[] {
// //     return this.tasks;
// //   }

// //   addTask(task: Task) {
// //     this.tasks.push(task);
// //   }

// //   deleteTask(task: Task) {
// //     this.tasks = this.tasks.filter(t => t !== task);
// //   }

// //   updateTaskTitle(task: Task, newTitle: string) {
// //     const index = this.tasks.findIndex(t => t.title === task.title && t.dueDate.getTime() === task.dueDate.getTime());
// //     if (index !== -1) {
// //       this.tasks[index] = { ...this.tasks[index], title: newTitle }; // Update only the title
// //     }
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { Task } from '../models/task.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//    private tasks: Task[] = [
//     { title: 'Sample Task 1', description: 'Description 1', dueDate: new Date('2024-07-20'), priority: 'medium', status: 'not started' },
//     { title: 'Sample Task 2', description: 'Description 2', dueDate: new Date('2024-08-10'), priority: 'high', status: 'in progress' }
//   ];

//   constructor() {}

//   getTasks(): Task[] {
//     return this.tasks;
//   }

//   deleteTask(task: Task) {
//     this.tasks = this.tasks.filter(t => t !== task);
//   }

//   updateTask(task: Task, updatedFields: Partial<Task>) {
//     const taskToUpdate = this.tasks.find(t => t === task);
//     if (taskToUpdate) {
//       Object.assign(taskToUpdate, updatedFields);
//     }
//   }

//   addTask(task: Task) {
//     this.tasks.push(task);
//   }
// }


// _____________________________________________________------------------------------------------_______________________
}
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { 
      id: 1,
      title: 'Sample Task 1', 
      description: 'Description 1', 
      dueDate: new Date('2024-07-20'), 
      priority: 'medium', 
      status: 'not started',
      history: [{ timestamp: new Date(), change: 'Task created' }]
    },
    { 
      id: 2,
      title: 'Sample Task 2', 
      description: 'Description 2', 
      dueDate: new Date('2024-08-10'), 
      priority: 'high', 
      status: 'in progress',
      history: [{ timestamp: new Date(), change: 'Task created' }]
    }
  ];

  private nextId = 3;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(task: Task) {
    this.logHistory(task, 'Task deleted');
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  updateTask(task: Task, updatedFields: Partial<Task>) {
    const taskToUpdate = this.tasks.find(t => t.id === task.id);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedFields);
      this.logHistory(taskToUpdate, 'Task updated');
    }
  }

  addTask(task: Task) {
    task.id = this.nextId++;
    task.history = [{ timestamp: new Date(), change: 'Task created' }];
    this.tasks.push(task);
  }

  logHistory(task: Task, change: string) {
    const taskToUpdate = this.tasks.find(t => t.id === task.id);
    if (taskToUpdate) {
      if (!taskToUpdate.history) {
        taskToUpdate.history = [];
      }
      taskToUpdate.history.push({ timestamp: new Date(), change });
    }
  }
}

