// // src/app/task.model.ts
// export interface Task {
//   title: string;
//   description: string;
//   dueDate: Date;
//   status: 'not started' | 'in progress' | 'completed';
//   priority: 'low' | 'medium' | 'high';
// }
// ---------------------------------------------------------------------------------
export interface Task {
  id: number; // Unique identifier
  title: string;
  description: string;
  dueDate: Date;
  status: 'not started' | 'in progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  history?: { timestamp: Date, change: string }[];
}


  