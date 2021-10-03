<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_compromisso',
        'data',
        'data_inicio',
        'data_termino',
        'local',
        'status',
        'observacoes',
    ];

}
