import React, { useState } from 'react';
import { Users, CheckCircle, Clock, AlertCircle, Plus, Calendar, Gift, Search, Filter } from 'lucide-react';
import { format, isToday, parseISO } from 'date-fns';
import { useAuth } from '../../contexts/AuthContext';
import { Task, User } from '../../types';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'employees' | 'birthdays'>('overview');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: ''
  });

  // Mock data
  const [employees] = useState<User[]>([
    {
      id: '2',
      email: 'john@javex.com',
      name: 'John Smith',
      role: 'employee',
      department: 'Web Development',
      joinDate: '2021-03-10',
      birthday: '1990-12-05'
    },
    {
      id: '3',
      email: 'sarah@javex.com',
      name: 'Sarah Johnson',
      role: 'employee',
      department: 'Graphic Design',
      joinDate: '2021-07-22',
      birthday: '1988-09-15'
    },
    {
      id: '4',
      email: 'mike@javex.com',
      name: 'Mike Wilson',
      role: 'employee',
      department: 'Web Development',
      joinDate: '2022-01-15',
      birthday: '2025-01-15'
    },
    {
      id: '5',
      email: 'lisa@javex.com',
      name: 'Lisa Chen',
      role: 'employee',
      department: 'UI/UX Design',
      joinDate: '2022-05-20',
      birthday: '1992-08-30'
    }
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design Homepage Layout',
      description: 'Create a modern and responsive homepage design for the new client project.',
      assignedTo: '2',
      assignedBy: '1',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2025-01-20',
      createdAt: '2025-01-15',
      updatedAt: '2025-01-15'
    },
    {
      id: '2',
      title: 'Update Company Brochure',
      description: 'Revise the company brochure with new service offerings and testimonials.',
      assignedTo: '3',
      assignedBy: '1',
      status: 'pending',
      priority: 'medium',
      dueDate: '2025-01-25',
      createdAt: '2025-01-14',
      updatedAt: '2025-01-14'
    },
    {
      id: '3',
      title: 'Client Logo Design',
      description: 'Create 3 logo concepts for the new startup client.',
      assignedTo: '3',
      assignedBy: '1',
      status: 'completed',
      priority: 'high',
      dueDate: '2025-01-18',
      createdAt: '2025-01-10',
      updatedAt: '2025-01-17'
    }
  ]);

  const todaysBirthdays = employees.filter(emp => 
    isToday(parseISO(emp.birthday))
  );

  const upcomingBirthdays = employees.filter(emp => {
    const birthday = parseISO(emp.birthday);
    const today = new Date();
    const thisYear = today.getFullYear();
    const birthdayThisYear = new Date(thisYear, birthday.getMonth(), birthday.getDate());
    
    if (birthdayThisYear < today) {
      birthdayThisYear.setFullYear(thisYear + 1);
    }
    
    const diffTime = birthdayThisYear.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 && diffDays <= 30;
  }).sort((a, b) => {
    const today = new Date();
    const thisYear = today.getFullYear();
    const aBirthday = new Date(thisYear, parseISO(a.birthday).getMonth(), parseISO(a.birthday).getDate());
    const bBirthday = new Date(thisYear, parseISO(b.birthday).getMonth(), parseISO(b.birthday).getDate());
    
    if (aBirthday < today) aBirthday.setFullYear(thisYear + 1);
    if (bBirthday < today) bBirthday.setFullYear(thisYear + 1);
    
    return aBirthday.getTime() - bBirthday.getTime();
  });

  const getEmployeeName = (id: string) => {
    const employee = employees.find(emp => emp.id === id);
    return employee ? employee.name : 'Unknown';
  };

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.assignedTo || !newTask.dueDate) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      assignedTo: newTask.assignedTo,
      assignedBy: user?.id || '1',
      status: 'pending',
      priority: newTask.priority,
      dueDate: newTask.dueDate,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      assignedTo: '',
      priority: 'medium',
      dueDate: ''
    });
    setShowTaskModal(false);
  };

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage tasks, employees, and track team performance.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.inProgress}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.pending}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'tasks', label: 'Task Management' },
                { id: 'employees', label: 'Employees' },
                { id: 'birthdays', label: 'Birthdays' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Tasks */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
                  <div className="space-y-3">
                    {tasks.slice(0, 5).map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{task.title}</p>
                          <p className="text-sm text-gray-600">Assigned to: {getEmployeeName(task.assignedTo)}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Birthdays */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Birthdays</h3>
                  {todaysBirthdays.length > 0 ? (
                    <div className="space-y-3">
                      {todaysBirthdays.map((employee) => (
                        <div key={employee.id} className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                          <div className="p-2 bg-pink-100 rounded-full">
                            <Gift className="h-4 w-4 text-pink-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{employee.name}</p>
                            <p className="text-sm text-gray-600">{employee.department}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No birthdays today</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Task Management</h3>
                  <button
                    onClick={() => setShowTaskModal(true)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Task
                  </button>
                </div>

                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">{task.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                              {task.status.replace('-', ' ').toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority.toUpperCase()} PRIORITY
                            </span>
                            <span className="text-gray-500">
                              Assigned to: {getEmployeeName(task.assignedTo)}
                            </span>
                            <div className="flex items-center text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Due: {format(parseISO(task.dueDate), 'MMM dd, yyyy')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'employees' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Employee Management</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {employees.map((employee) => (
                    <div key={employee.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-red-100 rounded-full">
                          <Users className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{employee.name}</h4>
                          <p className="text-gray-600">{employee.department}</p>
                          <p className="text-sm text-gray-500">Joined: {format(parseISO(employee.joinDate), 'MMM yyyy')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'birthdays' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Birthday Calendar</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Today's Birthdays */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
                      <Gift className="h-5 w-5 text-pink-600 mr-2" />
                      Today's Birthdays
                    </h4>
                    {todaysBirthdays.length > 0 ? (
                      <div className="space-y-3">
                        {todaysBirthdays.map((employee) => (
                          <div key={employee.id} className="flex items-center space-x-3 p-4 bg-pink-50 rounded-lg border border-pink-200">
                            <div className="p-2 bg-pink-100 rounded-full">
                              <Gift className="h-5 w-5 text-pink-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{employee.name}</p>
                              <p className="text-sm text-gray-600">{employee.department}</p>
                              <p className="text-xs text-pink-600">🎉 Happy Birthday!</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No birthdays today</p>
                    )}
                  </div>

                  {/* Upcoming Birthdays */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      Upcoming Birthdays (Next 30 Days)
                    </h4>
                    <div className="space-y-3">
                      {upcomingBirthdays.map((employee) => {
                        const birthday = parseISO(employee.birthday);
                        const today = new Date();
                        const thisYear = today.getFullYear();
                        const birthdayThisYear = new Date(thisYear, birthday.getMonth(), birthday.getDate());
                        
                        if (birthdayThisYear < today) {
                          birthdayThisYear.setFullYear(thisYear + 1);
                        }
                        
                        const diffTime = birthdayThisYear.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        
                        return (
                          <div key={employee.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded-full">
                                <Calendar className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{employee.name}</p>
                                <p className="text-sm text-gray-600">{employee.department}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-blue-600">
                                {format(birthdayThisYear, 'MMM dd')}
                              </p>
                              <p className="text-xs text-gray-500">
                                {diffDays === 1 ? 'Tomorrow' : `${diffDays} days`}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Create Task Modal */}
        {showTaskModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Task</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter task title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                    rows={3}
                    placeholder="Enter task description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                  <select
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Employee</option>
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name} - {employee.department}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as 'low' | 'medium' | 'high' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowTaskModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateTask}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;