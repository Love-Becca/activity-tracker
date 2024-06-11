<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Activity;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_create_task()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $activity = Activity::factory()->create(['user_id' => $user->id]);

        $response = $this->post('/tasks', [
            'description' => 'New Task',
            'activity_id' => $activity->id
        ]);
        $response->assertRedirect('/dashboard');

        $this->assertDatabaseHas('tasks', ['description' => 'New Task']);
    }

    public function test_user_can_delete_task()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $activity = Activity::factory()->create(['user_id' => $user->id]);
        $task = Task::factory()->create(['activity_id' => $activity->id]);

        $response = $this->delete('/tasks/' . $task->id);
        $response->assertRedirect('/dashboard');

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
