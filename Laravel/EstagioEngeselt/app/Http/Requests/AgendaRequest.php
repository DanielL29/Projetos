<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgendaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->segment(2);

        return [
            'nome_compromisso' => 'required',
            'data' => "required|unique:agendas,data,{$id},id",
            'data_inicio' => 'required|date_format:"H:i"',
            'data_termino' => 'required|date_format:"H:i"|after:data_inicio',
            'local' => 'required',
            'status' => 'required',
            'observacoes' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'nome_compromisso.required' => 'Preencha o nome do compromisso',
            'data.required' => 'Precisa ter a data em que o compromisso aconteceu/vai acontecer',
            'data.unique' => 'Nesta data ja tem um compromisso agendado!',
            'data_inicio.required' => 'Defina o horário inicial do compromisso',
            'data_inicio.date_format' =>  'A hora precisa ter este formato. Exemplo = 00:00',
            'data_termino.required' => 'Defina o horário final do compromisso',
            'data_termino.date_format' =>  'A hora precisa ter este formato. Exemplo = 00:00',
            'data_termino.after' => 'A hora do termino precisa ser após a hora inicial',
            'local.required' => 'Coloque em qual local está marcado seu compromisso',
            'status.required' => 'Defina um status (Agendado, Realizado, Cancelado)',
        ];
    }
}
