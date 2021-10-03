<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_status',
    ];

    public function agendas(){
        return $this->hasMany(Agenda::class, 'id_status');
    }
}
