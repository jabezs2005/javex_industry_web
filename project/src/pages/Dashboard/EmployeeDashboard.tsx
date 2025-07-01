import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, AlertCircle, User, Gift, Bell } from 'lucide-react';
import { format, isToday, parseISO } from 'date-fns';
import { useAuth } from '../../contexts/AuthContext';
import { Task } from '../../types';

const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for employee tasks
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design Homepage Layout',
      description: 'Create a modern and responsive homepage design for the new client project.',
      assignedTo: user?.id || '',
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
      assignedTo: user?.id || '',
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
      assignedTo: user?.id || '',
      assignedBy: '1',
      status: 'completed',
      priority: 'high',
      dueDate: '2025-01-18',
      createdAt: '2025-01-10',
      updatedAt: '2025-01-17'
    }
  ]);

  // Mock birthday data
  const todaysBirthdays = [
    { name: 'Sarah Johnson', department: 'Graphic Design' },
    { name: 'Mike Wilson', department: 'Web Development' }
  ];

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

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your tasks today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
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
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.pending}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">{task.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                              {task.status.replace('-', ' ').toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority.toUpperCase()} PRIORITY
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
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <User className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user?.name}</h3>
                  <p className="text-gray-600">{user?.department}</p>
                  <p className="text-sm text-gray-500">Joined: {user?.joinDate && format(parseISO(user.joinDate), 'MMM yyyy')}</p>
                </div>
              </div>
            </div>

            {/* Today's Birthdays */}
            {todaysBirthdays.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Gift className="h-5 w-5 text-pink-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Today's Birthdays</h3>
                </div>
                <div className="space-y-3">
                  {todaysBirthdays.map((person, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                      <div className="p-2 bg-pink-100 rounded-full">
                        <Gift className="h-4 w-4 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">View Notifications</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">View Calendar</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">Update Profile</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;