<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ExcelController;

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

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [ UsersController::class, 'index' ]);

Route::get('/usersProfile', [ UsersController::class, 'profile' ]);

Route::put('/update/{id}', [ UsersController::class, 'update' ]);

Route::put('/updateProfile/{id}', [ UsersController::class, 'updateProfile' ]);

Route::get('/delete/{id}', [ UsersController::class, 'destroy' ]);

Route::get('/deleteProf/{id}', [ UsersController::class, 'destroyProfile' ]);