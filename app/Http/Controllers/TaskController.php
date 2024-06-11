<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required',
            'activity_id' => 'required|exists:activities,id',
        ]);
        Task::create($request->only('description', 'activity_id'));
        return redirect('/dashboard');

    }

    public function destroy(Task $task)
    {
        $task->delete();
        return redirect('/dashboard');

    }
}
