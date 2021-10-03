<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset ('css/agenda-estilo.css') }}">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Agenda de compromissos - Excluir</title>
</head>
<body>
  <div class="container">
    <div class="col-md-4">
      <h3>Excluir compromisso</h3>
    </div>
    <form action="{{ route('agenda.destroy', $excluir->id)}}" class="form form-inline" method="POST">
      @csrf
      @method('DELETE')
      <div class="col-md-4">
        <ul class="list-group">
          <li class="list-group-item"><span class="atrib">Nome:</span> {{$excluir->nome_compromisso}}</li>
          <li class="list-group-item"><span class="atrib">Data:</span> {{$excluir->data}}</li>
          <li class="list-group-item"><span class="atrib">Hora Inicio:</span> {{$excluir->data_inicio}}</li>
          <li class="list-group-item"><span class="atrib">Hora Termino:</span> {{$excluir->data_termino}}</li>
          <li class="list-group-item"><span class="atrib">Local:</span> {{$excluir->local}}</li>
          <li class="list-group-item"><span class="atrib">Status:</span> {{$excluir->status->nome_status}}</li>
          <li class="list-group-item"><span class="atrib">Observações:</span> {{$excluir->observacoes}}</li>
        </ul>
        <div class="alert alert-danger">
          <h5>Deseja excluir este compromisso?</h5>
        </div>
        <div class="col excluir-btn">
          <button type="submit" class="btn btn-danger">Excluir</button> 
          <a href="{{ route('agenda.index')}}">
            <button type="button" class="btn btn-secondary">Voltar</button> 
          </a>
        </div>
      </div> 
    </form>    
  </div>
     

    
</body>
</html>