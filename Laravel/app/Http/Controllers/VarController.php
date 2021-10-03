<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VarController extends Controller
{
    private $listar, $vetor_cadastro, $editar, $atualizar, $excluir;

    public function __construct(Request $listar,Request $vetor_cadastro,Request $editar,Request $atualizar,Request $excluir)
    {
        $this->listar = $listar;
        $this->vetor_cadastro = $vetor_cadastro;
        $this->editar = $editar;
        $this->atualizar = $atualizar;
        $this->excluir = $excluir;
    }

    function getListar() {
        return $this->listar;
    }

    function setListar($listar): void {
        $this->listar = $listar;
    } 

    function getVetor(){
        return $this->vetor_cadastro;
    }

    function setVetor($vetor_cadastro): void {
        $this->vetor_cadastro = $vetor_cadastro;
    }

    function getEditar() {
        return $this->editar;
    }

    function setEditar($editar): void {
        $this->editar = $editar;
    } 

    function getAtualizar() {
        return $this->atualizar;
    }

    function setAtualizar($atualizar): void {
        $this->atualizar = $atualizar;
    } 

    function getExcluir() {
        return $this->excluir;
    }

    function setExcluir($excluir): void {
        $this->excluir = $excluir;
    } 
}
