<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateActivitiesTable extends Migration
{
    public function up()
    {
        Schema::table('activities', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
        });
    }

    public function down()
    {
        Schema::table('activities', function (Blueprint $table) {
            // Revert the changes
            $table->dropForeign(['user_id']);
        });
    }
}
