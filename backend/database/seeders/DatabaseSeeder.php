<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Clients;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(1)->create();
        Clients::factory(20)->create();

        // User::factory()->create([
        //     'name' => 'Test',
        //     'email' => 'test@example.com',
        // ]);
    }
}
