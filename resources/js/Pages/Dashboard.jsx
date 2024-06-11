import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth }) {
    const { activities } = usePage().props;

    const { data: activityData, setData: setActivityData, post: postActivity, reset: resetActivity } = useForm({
        title: '',
    });

    const handleActivitySubmit = (e) => {
        e.preventDefault();
        postActivity(route('activities.store'), {
            onSuccess: () => resetActivity('title'),
        });
    };

    const handleDeleteActivity = (activityId) => {
        Inertia.delete(route('activities.destroy', activityId), {
            onSuccess: () => console.log('Activity deleted')
        });
    };

    const handleDeleteTask = (taskId) => {
        Inertia.delete(route('tasks.destroy', taskId), {
            onSuccess: () => console.log('Task deleted')
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-gray-900 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                            <h1 className="text-3xl font-bold mb-4">Your Activities</h1>
                            <form onSubmit={handleActivitySubmit} className="flex space-x-4 mb-6">
                                <input
                                    type="text"
                                    value={activityData.title}
                                    onChange={(e) => setActivityData('title', e.target.value)}
                                    placeholder="New Activity"
                                    className="flex-grow p-2 rounded border border-gray-300 text-gray-500"
                                />
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white p-2 rounded">Add Activity</button>
                            </form>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activities.map((activity) => (
                                    <div key={activity.id} className="bg-white shadow-lg rounded-lg p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-4">{activity.title}</h2>
                                        <AddTaskForm activityId={activity.id} />
                                        <ul className="mt-4 space-y-2">
                                            {activity.tasks.map((task) => (
                                                <li key={task.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                                                    <span>{task.description}</span>
                                                    <button
                                                        onClick={() => handleDeleteTask(task.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        Remove
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => handleDeleteActivity(activity.id)}
                                            className="mt-4 bg-red-500 hover:bg-red-700 text-white p-2 rounded"
                                        >
                                            Delete Activity
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function AddTaskForm({ activityId }) {
    const { data: taskData, setData: setTaskData, post: postTask, reset: resetTask } = useForm({
        description: '',
        activity_id: activityId
    });

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        postTask(route('tasks.store'), {
            onSuccess: () => resetTask('description'),
        });
    };

    return (
        <form onSubmit={handleTaskSubmit} className="flex space-x-2 mt-4">
            <input
                name="description"
                type="text"
                value={taskData.description}
                onChange={(e) => setTaskData('description', e.target.value)}
                placeholder="New Task"
                className="flex-grow p-2 rounded border border-gray-300"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white p-2 rounded">Add Task</button>
        </form>
    );
}
