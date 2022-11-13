<?php

use App\Http\Controllers\Account\AvatarUploadController;
use App\Http\Controllers\Account\UserProfileController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SocialLoginController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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
Route::middleware('guest')->group(static function () {
    Route::get('/auth/login', [LoginController::class, 'index'])->name('auth.login.index');
    Route::post('/auth/login', [LoginController::class, 'login'])->name('auth.login');
    Route::get('/auth/register', [RegisterController::class, 'index'])->name('auth.register.index');
    Route::post('/auth/register', [RegisterController::class, 'register'])->name('auth.register');
    Route::get('/auth/social/{provider}', [SocialLoginController::class, 'redirect'])->name('auth.social.redirect');
    Route::get('/auth/social/{provider}/callback', [SocialLoginController::class, 'callback'])->name('auth.social.callback');
});

Route::middleware('auth')->group(static function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');
    Route::get('/account/profile', [UserProfileController::class, 'index'])->name('account.profile.index');
    Route::get('/account/profile/edit', [UserProfileController::class, 'edit'])->name('account.profile.edit');
    Route::patch('/account/profile', [UserProfileController::class, 'update'])->name('account.profile.update');
    Route::post('/account/profile/avatar', [AvatarUploadController::class, 'upload'])->name('account.profile.avatar.upload');
    Route::post('/auth/logout', [LogoutController::class, 'logout'])->name('auth.logout');
});
