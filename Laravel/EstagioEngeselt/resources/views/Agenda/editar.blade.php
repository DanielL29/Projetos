<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset ('css/agenda-estilo.css') }}">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Agenda de compromissos - Editar</title>
</head>
<body>
    <center>
        <div class="col-md-4">
            <div class="row">
                <h4 class="edit">Atualizar compromisso</h4>
                @if ($errors->any())
                    <ul class="navbar-nav">
                        @foreach ($errors->all() as $erro)
                            <li class="nav-item">{{ $erro }}</li>
                        @endforeach
                    </ul>
                @endif
                <form action="{{ route('agenda.update', $editar->id)}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="form-floating mb-2">
                        <input type="text" name="nome_compromisso" class="form-control" id="nome"  placeholder="Nome do compromisso" value="{{$editar->nome_compromisso}}">
                        <label for="nome">Nome do compromisso</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="date" name="data" class="form-control" id="data" value="{{$editar->data}}">
                        <label for="data">Data</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="data_inicio" class="form-control" placeholder="Hora Início" id="inicio" value="{{$editar->data_inicio}}">
                        <label for="inicio">Hora Início</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="data_termino" class="form-control" id="termino" placeholder="Hora Término" value="{{$editar->data_termino}}">
                        <label for="termino">Hora Término</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="local" class="form-control" id="local" placeholder="Local" value="{{$editar->local}}">
                        <label for="local">Local</label>
                    </div>
                    <div class="form-floating mb-2">
                        <select name="status" class="form-select" id="status">
                            <option selected>{{$editar->status}}</option>
                            <option value="Agendado">Agendado</option>
                            <option value="Realizado">Realizado</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                        <label for="status"> Status Atual </label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea name="observacoes" class="form-control" id="obs" placeholder="Observações" style="height:100px">{{$editar->observacoes}}</textarea>
                        <label for="obs">Observações</label>
                    </div>
                    <p><input type="submit" class="btn btn-secondary" value="Atualizar"></p>
                </form>
            </div>
            <hr>
        </div>
    </center>
</body>
</html>