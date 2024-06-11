<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Activity;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ActivityControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_view_activities()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $activity = Activity::factory()->create(['user_id' => $user->id]);

        $response = $this->get('/dashboard');
        $response->assertStatus(200);
        $response->assertSee($activity->title);
    }

    public function test_user_can_create_activity()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->post('/activities', ['title' => 'New Activity']);
        $response->assertRedirect('/dashboard');

        $this->assertDatabaseHas('activities', ['title' => 'New Activity']);
    }

    public function test_user_can_delete_activity()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $activity = Activity::factory()->create(['user_id' => $user->id]);

        $response = $this->delete('/activities/' . $activity->id);
        $response->assertRedirect('/dashboard');

        $this->assertDatabaseMissing('activities', ['id' => $activity->id]);
    }
}
