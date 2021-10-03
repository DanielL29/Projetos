<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Agendas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function(Blueprint $table){
            $table->id();
            $table->string('nome_compromisso');
            $table->date('data');
            $table->string('data_inicio');
            $table->string('data_termino');
            $table->string('local');
            $table->string('status');
            $table->string('observacoes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agendas');
    }
}
