<?php
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

Route::group(['middleware' => ['checkAuth']], function () {
    Route::get('/', 'QuestionsController@index')->name('home');
    Route::get('/questions/create', 'QuestionsController@create');
    Route::get('/questions/{question}', 'QuestionsController@show');
    Route::post('/questions', 'QuestionsController@store');

    Route::post('questions/{question}/comments', 'CommentsController@store');
    Route::get('questions/{question}/answers/{type}', 'AnswersController@store');
    Route::get('/comments/{comment}/likes', 'LikesController@store');

    Route::get('/register', 'RegistrationController@create');
    Route::post('/register', 'RegistrationController@store');
});

Route::get('/login', 'SessionController@create');
Route::post('/login', 'SessionController@store');
Route::get('/logout', 'SessionController@destroy');




