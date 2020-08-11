<?php
namespace Blog\Factories;
use Faker;
class NoticiaFactory{ 
    public static function generarNoticias($cantidad)
    { $mocks = array();
     for($i = 0; $i < $cantidad; $i++){ $mocks[] = NoticiaFactory::hacerNoticia();
      }
       return $mocks; } 
       
     public static function hacerNoticia()
     { $faker = Faker\Factory::create(); 
     return (object) [ ‘id’ => $faker->randomNumber(4), ‘titulo’ => $faker->sentence, ‘cuerpo’ => $faker->paragraphs(3, true), 
                     ‘imagen’ => $faker->imageUrl(80, 80), 
                     ‘autor’ => $faker->name, ]; 
       }
       
    }