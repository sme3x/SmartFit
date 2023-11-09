<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName')->nullable();
            $table->boolean('active')->nullable()->default(false);
            $table->string('note')->nullable();
            $table->integer('visit_count');
            $table->date('start_subscription_date');
            $table->date('end_subscription_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
