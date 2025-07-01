export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
  department: string;
  joinDate: string;
  birthday: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  startDate: string;
  endDate: string;
  assignedTeam: string[];
}

export interface Subscription {
  id: string;
  plan: 'basic' | 'premium' | 'enterprise';
  price: number;
  features: string[];
  duration: string;
}