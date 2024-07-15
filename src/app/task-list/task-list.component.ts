{// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { Task } from '../models/task.model';
// import { TaskService } from '../service/task.service';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// export class TaskListComponent implements OnInit {
//   tasks: Task[] = [];
//   sortField: string = 'dueDate'; // Default sort field

//   constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

//   ngOnInit() {
//     this.tasks = this.taskService.getTasks();
//     this.sortTasks();
//   }

//   // Sort tasks based on the selected field
//   sortTasks() {
//     this.tasks.sort((a, b) => {
//       if (this.sortField === 'dueDate') {
//         return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
//       } else if (this.sortField === 'priority') {
//         const priorityOrder = { 'low': 1, 'medium': 2, 'high': 3 };
//         return priorityOrder[a.priority] - priorityOrder[b.priority];
//       } else if (this.sortField === 'status') {
//         const statusOrder = { 'not started': 1, 'in progress': 2, 'completed': 3 };
//         return statusOrder[a.status] - statusOrder[b.status];
//       }
//       return 0; // Default case (should not happen)
//     });
//     this.cdr.detectChanges(); // Manually trigger change detection
//   }

//   // Update the sort field and reapply sorting
//   setSortField(event: Event) {
//     const target = event.target as HTMLSelectElement;
//     this.sortField = target.value;
//     this.sortTasks();
//   }

//   deleteTask(task: Task) {
//     this.taskService.deleteTask(task);
//     this.tasks = [...this.taskService.getTasks()]; // Update the list after deletion
//     this.sortTasks(); // Reapply sorting
//   }

//   updateTask(task: Task, updatedFields: Partial<Task>) {
//     const index = this.tasks.findIndex(t => t.title === task.title && t.dueDate.getTime() === task.dueDate.getTime());
//     if (index !== -1) {
//       this.tasks[index] = { ...this.tasks[index], ...updatedFields }; // Update the fields
//       this.taskService.updateTask(this.tasks[index], updatedFields); // Update in the service
//     }
//     this.sortTasks(); // Reapply sorting
//     this.cdr.detectChanges(); // Manually trigger change detection
//   }

//   editTask(task: Task) {
//     const newTitle = prompt('Edit Task Title', task.title);
//     const newDescription = prompt('Edit Task Description', task.description);
//     const newDueDateStr = prompt('Edit Task Due Date', task.dueDate.toISOString().substring(0, 10)); // Prompt in YYYY-MM-DD format
//     const newStatus = prompt('Edit Task Status', task.status);

//     if (newTitle !== null && newTitle.trim() !== '' && 
//         newDescription !== null && newDescription.trim() !== '' && 
//         newDueDateStr !== null && newDueDateStr.trim() !== '' &&
//         newStatus !== null && ['not started', 'in progress', 'completed'].includes(newStatus.trim())) {
//       const newDueDate = new Date(newDueDateStr.trim());
//       this.updateTask(task, {
//         title: newTitle.trim(),
//         description: newDescription.trim(),
//         dueDate: newDueDate,
//         status: newStatus.trim() as 'not started' | 'in progress' | 'completed'
//       });
//     }
//   }

//   addTask() {
//     const newTitle = prompt('Enter Task Title');
//     const newDescription = prompt('Enter Task Description');
//     const newDueDateStr = prompt('Enter Task Due Date (YYYY-MM-DD)');
//     const newStatus = prompt('Enter Task Status (not started, in progress, completed)');
//     const newPriority = prompt('Enter Task Priority (low, medium, high)');

//     if (newTitle !== null && newTitle.trim() !== '' && 
//         newDescription !== null && newDescription.trim() !== '' && 
//         newDueDateStr !== null && newDueDateStr.trim() !== '' &&
//         newStatus !== null && ['not started', 'in progress', 'completed'].includes(newStatus.trim()) &&
//         newPriority !== null && ['low', 'medium', 'high'].includes(newPriority.trim())) {
//       const newDueDate = new Date(newDueDateStr.trim());
//       const newTask: Task = {
//         title: newTitle.trim(),
//         description: newDescription.trim(),
//         dueDate: newDueDate,
//         status: newStatus.trim() as 'not started' | 'in progress' | 'completed',
//         priority: newPriority.trim() as 'low' | 'medium' | 'high'
//       };
//       this.taskService.addTask(newTask);
//       this.tasks = [...this.taskService.getTasks()]; // Update the list after adding
//       this.sortTasks(); // Reapply sorting
//       this.cdr.detectChanges(); // Manually trigger change detection
//     }
//   }
// }


// ----------------------------------------------------------------------------------------------------------------
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  sortField: string = 'dueDate'; // Default sort field

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.sortTasks();
  }

  // Sort tasks based on the selected field
  sortTasks() {
    this.tasks.sort((a, b) => {
      if (this.sortField === 'dueDate') {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else if (this.sortField === 'priority') {
        const priorityOrder = { 'low': 1, 'medium': 2, 'high': 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (this.sortField === 'status') {
        const statusOrder = { 'not started': 1, 'in progress': 2, 'completed': 3 };
        return statusOrder[a.status] - statusOrder[b.status];
      }
      return 0; // Default case (should not happen)
    });
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  // Update the sort field and reapply sorting
  setSortField(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortField = target.value;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.tasks = [...this.taskService.getTasks()]; // Update the list after deletion
    this.sortTasks(); // Reapply sorting
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  updateTask(task: Task, updatedFields: Partial<Task>) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedFields }; // Update the fields
      this.taskService.updateTask(this.tasks[index], updatedFields); // Update in the service
    }
    this.sortTasks(); // Reapply sorting
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  editTask(task: Task) {
    const newTitle = prompt('Edit Task Title', task.title);
    const newDescription = prompt('Edit Task Description', task.description);
    const newDueDateStr = prompt('Edit Task Due Date', task.dueDate.toISOString().substring(0, 10)); // Prompt in YYYY-MM-DD format
    const newStatus = prompt('Edit Task Status', task.status);

    if (newTitle !== null && newTitle.trim() !== '' && 
        newDescription !== null && newDescription.trim() !== '' && 
        newDueDateStr !== null && newDueDateStr.trim() !== '' &&
        newStatus !== null && ['not started', 'in progress', 'completed'].includes(newStatus.trim())) {
      const newDueDate = new Date(newDueDateStr.trim());
      this.updateTask(task, {
        title: newTitle.trim(),
        description: newDescription.trim(),
        dueDate: newDueDate,
        status: newStatus.trim() as 'not started' | 'in progress' | 'completed'
      });
    }
  }

  addTask() {
    const newTitle = prompt('Enter Task Title');
    const newDescription = prompt('Enter Task Description');
    const newDueDateStr = prompt('Enter Task Due Date (YYYY-MM-DD)');
    const newStatus = prompt('Enter Task Status (not started, in progress, completed)');
    const newPriority = prompt('Enter Task Priority (low, medium, high)');

    if (newTitle !== null && newTitle.trim() !== '' && 
        newDescription !== null && newDescription.trim() !== '' && 
        newDueDateStr !== null && newDueDateStr.trim() !== '' &&
        newStatus !== null && ['not started', 'in progress', 'completed'].includes(newStatus.trim()) &&
        newPriority !== null && ['low', 'medium', 'high'].includes(newPriority.trim())) {
      const newDueDate = new Date(newDueDateStr.trim());
      const newTask: Task = {
        id: 0, // Initial dummy value, will be set in addTask method of service
        title: newTitle.trim(),
        description: newDescription.trim(),
        dueDate: newDueDate,
        status: newStatus.trim() as 'not started' | 'in progress' | 'completed',
        priority: newPriority.trim() as 'low' | 'medium' | 'high',
        history: [{ timestamp: new Date(), change: 'Task created' }]
      };
      this.taskService.addTask(newTask);
      this.tasks = [...this.taskService.getTasks()]; // Update the list after adding
      this.sortTasks(); // Reapply sorting
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  // Convert tasks to CSV format
  convertToCSV(tasks: Task[]): string {
    const header = ['ID', 'Title', 'Description', 'Due Date', 'Status', 'Priority'];
    const rows = tasks.map(task => [
      task.id.toString(),
      task.title,
      task.description,
      task.dueDate.toISOString(),
      task.status,
      task.priority
    ]);

    const csvContent = [
      header.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return csvContent;
  }

  // Export tasks to CSV file
  exportTasksToCSV() {
    const csvContent = this.convertToCSV(this.tasks);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'tasks.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


