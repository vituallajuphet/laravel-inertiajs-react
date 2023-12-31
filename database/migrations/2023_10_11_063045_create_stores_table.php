<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::dropIfExists('stores');


        // Schema::drop('stores');
        Schema::create('stores', function (Blueprint $table) {
            $table->uuid('store_id')->primary();
            $table->string('store_name');
            $table->uuid('user_id');
            $table->string('store_nickname');
            $table->string('status');
            $table->timestamps();
        });

        Schema::table('stores', function($table) {
            $table->foreign('user_id')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::dropColumns("stores", ["rememberToken"]);
        Schema::dropIfExists('stores');
    }
};
