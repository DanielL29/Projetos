<?php

namespace App\Http\Controllers;

use App\Http\Requests\AgendaRequest;
use Illuminate\Http\Request;
use App\Models\Agenda;
use App\Models\Status;

class AgendaController extends VarController 
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listar = Agenda::paginate(4);
        $status = Status::all();   

        return view('Agenda.listar', compact('listar', 'status'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $status = Status::all();
        return view('Agenda.agenda-index', [
            'status' => $status,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\AgendaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgendaRequest $request)
    {
        $vetor_cadastro = [
            'nome_compromisso' => $request['nome_compromisso'],
            'data' => $request['data'],
            'data_inicio' => $request['data_inicio'],
            'data_termino' => $request['data_termino'],
            'local' => $request['local'],
            'id_status' => $request['nome_status'],
            'observacoes' => $request['observacoes'],
        ];

        //dd($vetor_cadastro);
        Agenda::create($vetor_cadastro);
        return redirect()->route('agenda.index'); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editar = Agenda::find($id);
        $status = Status::all();

        return view('Agenda.editar', [
            'editar' => $editar,
            'status' => $status,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\AgendaRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AgendaRequest $request, $id)
    {
        $atualizar = Agenda::find($id);
        
        $atualizar->update($request->all());

        //dd($atualizar);

        return redirect()->route('agenda.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $excluir = Agenda::find($id);

        $excluir->delete();

        return redirect()->route('agenda.index');
    }

    /**
     * Filtrandos os compromissos
     * 
     */
    public function filtro(Request $request)
    {
        $filtros = $request->except('_token');
        
        $listar = Agenda::where('nome_compromisso', 'LIKE', "%{$request->filtro_nome}%")
                        ->where('data', 'LIKE', "%{$request->filtro_data}%")
                        ->where('id_status', 'LIKE', "%{$request->filtro_status}%")
                        ->paginate(4);

        $status = Status::all();
                           
        return view('Agenda.listar', [
            'listar' => $listar,
            'filtros' => $filtros,
            'status' => $status,
        ]);
    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function excluir($id)
    {
        $excluir = Agenda::find($id);
        $status = Status::all();

        return view('Agenda.excluir', compact('excluir', 'status'));

    }
}
