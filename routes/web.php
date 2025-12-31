<?php

use App\Http\Controllers\KelasController;
use App\Http\Controllers\OrangTuaController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\GuruController;
use App\Models\Kelas;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::location('/login');
})->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/siswa',[SiswaController::class,'index'])->name('siswa');
    Route::post('/siswa',[SiswaController::class,'store'])->name('siswa.store');
    Route::put('/siswa/{siswa}',[SiswaController::class,'update'])->name('siswa.update');
    Route::delete('/siswa/{siswa}',[SiswaController::class,'destroy'])->name('siswa.destroy');

    Route::get('/kelas', [KelasController::class,'index'])->name('kelas');
    Route::post('/kelas', [KelasController::class,'store'])->name('kelas.store'); 
    Route::put('/kelas/{kelas}', [KelasController::class,'update'])->name('kelas.update');
    Route::delete('/kelas/{kelas}', [KelasController::class,'destroy'])->name('kelas.destroy');

    Route::get('/guru', [GuruController::class,'index'])->name('guru');
    Route::post('/guru', [GuruController::class,'store'])->name('guru.store'); 
    Route::put('/guru/{guru}', [GuruController::class,'update'])->name('guru.update');
    Route::delete('/guru/{guru}', [GuruController::class,'destroy'])->name('guru.destroy');

    Route::get('/orangtua', [OrangTuaController::class,'index'])->name('orangtua');
    Route::post('/orangtua', [OrangTuaController::class,'store'])->name('orangtua.store'); 
    Route::put('/orangtua/{orangTua}', [OrangTuaController::class,'update'])->name('orangtua.update');
    Route::delete('/orangtua/{orangTua}', [OrangTuaController::class,'destroy'])->name('orangtua.destroy');

    Route::get('/dashboard', function () {
        $kelas = Kelas::with(['siswa', 'guru'])->get();
        return inertia('Dashboard/Index', compact('kelas'));
    })->name('dashboard');
});

require __DIR__.'/settings.php';
