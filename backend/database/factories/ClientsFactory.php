<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Clients>
 */
class ClientsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = now();
        return [
            'first_name' => fake()->name(),
            'last_name' => fake()->lastName(),
            'active' =>  fake()->boolean(50),
            'note' => fake()->text(100),
            'visit_count' => fake()->numberBetween(0, 100),
            'start_subscription_date' => fake()->dateTime($max = 'now', $timezone = null),
            'end_subscription_date' => fake()->dateTimeBetween($startDate, '+1 month')
        ];
    }
}
