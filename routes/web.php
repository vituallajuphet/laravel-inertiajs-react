<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StoresController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboards', function () {
    return Inertia::render('Dashboards');
})->middleware(['auth', 'verified'])->name('dashboards');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/stores', [StoresController::class, 'index'])->name('store.index');
    Route::get('/store/{uuid}', [StoresController::class, 'show'])->name('store.show');
    Route::delete('/store/{uuid}', [StoresController::class, 'destroy'])->name('store.destroy');
});

require __DIR__.'/auth.php';
