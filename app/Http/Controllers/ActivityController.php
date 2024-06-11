<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = auth()->user()->activities()->with('tasks')->get();
        return Inertia::render('Dashboard', ['activities' => $activities]);
    }

    public function store(Request $request)
    {
        $request->validate(['title' => 'required']);
        auth()->user()->activities()->create($request->only('title'));
        return redirect('/dashboard');
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();
        return redirect('/dashboard');
    }
}
