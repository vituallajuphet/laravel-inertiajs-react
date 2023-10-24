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
use App\Http\Controllers\Merchant\MerchantCollectionController;
use App\Http\Controllers\Merchant\MerchantOrderController;
use App\Http\Controllers\Merchant\MerchantProductController;
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
            ->name('merchant.create');
        Route::get('/login', [AuthController::class, 'create'])
            ->name('merchant.login');
        Route::post('/login', [AuthController::class, 'store'])
            ->name('merchant.store');
            Route::post('/register', [RegisterController::class, 'store'])
            ->name('merchant.register');
       
    });
});


Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::group([
        'prefix' => 'merchant',
    ], function () {

        Route::get('/registerstore', function () {
            return Inertia::render('Seller/Authenticated/RegisterStore');
        })->name('merchant.registerstore');

        Route::group(['middleware' => ['has_store']], function () {
            Route::get('/', function () {
                return Inertia::render('Seller/Dashboard');
            })->name('dashboard');
            Route::get('/dashboard', [RegisterController::class, 'dashboard'])
                ->name('merchant.dashboard');
            Route::get('/products', [MerchantProductController::class, 'create'])
            ->name('merchant.products');
            Route::get('/orders', [MerchantOrderController::class, 'create'])
            ->name('merchant.orders');
            Route::get('/collections', [MerchantCollectionController::class, 'create'])
            ->name('merchant.collections');
            Route::post('logout', [AuthController::class, 'destroy'])
            ->name('merchant.logout');
        });
       
    });

    

});
