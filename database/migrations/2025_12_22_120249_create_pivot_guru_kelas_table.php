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
        Schema::create('pivot_guru_kelas', function (Blueprint $table) {
            $table->foreignId('guru_id')->constrained('manage_guru')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('kelas_id')->constrained('manage_kelas')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
            $table->primary(['guru_id', 'kelas_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pivot_guru_kelas');
    }
};
