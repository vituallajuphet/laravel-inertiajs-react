<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\SellerAuth\AuthController;
use App\Http\Controllers\SellerAuth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::middleware('guest')->group(function () {
//     Route::get('register', [RegisteredUserController::class, 'create'])
//                 ->name('register');
//     Route::post('register', [RegisteredUserController::class, 'store']);
// });
Route::middleware('guest')->group(function () {
    // guest seller
    Route::group([
        'prefix' => 'merchant',
    ], function () {
        Route::get('/register', [RegisterController::class, 'create'])
            ->name('merchant.register');
        Route::get('/login', [AuthController::class, 'create'])
            ->name('merchant.login');
    });
});


Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::group([
        'prefix' => 'sellers',
    ], function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Seller/Dashboard');
        })->name('dashboard');
        Route::get('/', function () {
            return Inertia::render('Seller/Dashboard');
        })->name('dashboard');
    });
});
