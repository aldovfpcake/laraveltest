<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


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
    return view('welcome');
   /* return "hello desde la pagina de inicio";*/
});

//Route:: get('contactame',function(){
//    return "Seccion de Contactos";
//})->name('contactos');

//Route::get('/',function(){
//    echo "<a href='".route('contactos')."'> Contactos 1 </a> <br>'";
//    echo "<a href='".route('contactos')."'> Contactos 2 </a> <br>'";
//    echo "<a href='/contactos'> Contactos 3 </a> <br>";
//    echo "<a href='/contactos'> Contactos 4 </a> <br>";
//    echo "<a href='/contactos'> Contactos 5 </a> <br>";
//});

Route::get('/calculos',function(){
  $nombre = "Aldo";
  $user = Auth::user();
  
  return view('calculos')-> with('nombre',$nombre)->with('usuario',$user);
});

Route::get('/contactos','MessagesController@store')->name('contactos');
Route::get('/horas','CalculosController@store')->name('horas');

Route::get('notes', function () {
  return 'Creating a note';
});


   
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('products','ProductController');
Route::get('search', 'SearchController@index')->name('search');
Route::get('autocomplete', 'SearchController@autocomplete')->name('autocomplete');

