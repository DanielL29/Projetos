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
            $table->string('observacoes');
            $table->unsignedBigInteger('id_status');
            $table->timestamps();
        });

        Schema::table('agendas', function(Blueprint $table){
            $table->foreign('id_status')->references('id')->on('statuses')->onDelete('cascade');
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
