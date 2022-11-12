<?php

use App\Http\Controllers\Auth\LoginController;
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
});

Route::middleware('auth')->group(static function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');
});
