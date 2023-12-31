<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'role_id' => fake()->unique()->uuid(),
            'role_name' => fake()->randomElement(['admin', 'seller', 'customer']),
            'role_type' => fake()->randomElement(['corporate', 'individual', null]),
        ];
    }
}
