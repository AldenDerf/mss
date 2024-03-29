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
        Schema::table('mss_users', function (Blueprint $table) {
            $table->string('created_by')->nullable()->change();
            $table->string('updated_by')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mss_users', function (Blueprint $table) {
            $table->string('created_by')->nullable(false)->change();
            $table->string('updated')->nullable(false)->change();
        });
    }
};
