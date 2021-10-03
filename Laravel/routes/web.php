<?php

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


Route::get('/', function(){
    return redirect()->route('agenda.create');
});

Route::any('/excluir', function(){
    return view('Agenda.excluir');
});

Route::get('/agenda/{id}/excluir', '\App\Http\Controllers\AgendaController@excluir')->name('agenda.excluir');
Route::any('/agenda/filtro', '\App\Http\Controllers\AgendaController@filtro')->name('agenda.filtro');
Route::resource('agenda', '\App\Http\Controllers\AgendaController');
