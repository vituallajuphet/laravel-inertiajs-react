<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StoresController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthenticatedSessionController::class, 'api_login']);

// Route::get('/tests', function ()  {
//     return 1;
// });

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/tests', function ()  {
        return 1;
    });
    Route::get('/product/{id}', [ProductController::class, 'api_show']);
    Route::get('/stores', [StoresController::class, 'api_all']);
});

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'logout']);
    Route::resource('/tasks', TasksController::class);
});