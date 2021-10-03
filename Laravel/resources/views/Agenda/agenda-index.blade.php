<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset ('css/agenda-estilo.css') }}">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Agenda de compromissos - Cadastrar</title>
</head>
<body>
    <center>
        <div class="col-md-4">
            <div class="row">
                <h4>Cadastre um compromisso</h4>
                <a href="{{ route('agenda.index')}}" class="nav-link">Listar compromissos</a>
                @if ($errors->any())
                    <ul class="navbar-nav">
                        @foreach ($errors->all() as $erro)
                            <li class="nav-item">{{ $erro }}</li>
                        @endforeach
                    </ul>
                @endif
                <form action="{{ route('agenda.store')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-floating mb-2">
                        <input type="text" name="nome_compromisso" class="form-control" id="nome" placeholder="Nome do compromisso">
                        <label for="nome">Nome do compromisso</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="date" name="data" class="form-control" id="data" placeholder="Data">
                        <label for="data">Data</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="data_inicio" class="form-control" id="data_inicio" placeholder="Hora Inicio">
                        <label for="inicio">Hora Início</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="data_termino" class="form-control" id="data_termino" placeholder="Hora Termino">
                        <label for="termino">Hora Término</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" name="local" class="form-control" id="local" placeholder="Local">
                        <label for="local">Local</label>
                    </div>
                    <div class="form-floating mb-2">
                        <select name="nome_status" id="nome_status" class="form-control" aria-placeholder="Status">
                            @foreach ($status as $item)
                                <option value="{{$item->id}}">{{$item->nome_status}}</option>
                            @endforeach
                        </select>
                        <label for="nome_status">Status</label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea name="observacoes" class="form-control" id="observacoes" placeholder="Observações" style="height:100px"></textarea>
                        <label for="obs">Observações</label>
                    </div>
                    <p><button type="submit" class="btn btn-secondary" >Registrar </button></p>
                </form>
            </div> 
            <hr>
        </div>
    </center>
</body>
</html>