<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsageController;
use App\Http\Controllers\ProfileController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('usage')->group(function () {
    Route::get('/', [UsageController::class, 'index'])->name('usage.index');
});

require __DIR__.'/auth.php';
