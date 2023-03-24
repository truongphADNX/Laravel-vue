<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            "name" => "admin",
            "username" => "Admin",
            "email" => "admin@example.com",
            "password" => Hash::make("123456"),
            "department_id" => "1",
            "status_id" => "1"
        ]);
    }
}
