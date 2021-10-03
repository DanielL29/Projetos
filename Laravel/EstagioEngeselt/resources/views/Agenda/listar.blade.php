<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset ('css/agenda-estilo.css') }}">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Agenda de compromissos - Compromissos</title>
</head>
<body>
    <div class="container">
        <table class="table table-dark table-striped">
            <thead>
                <tr><h3>Listagem dos compromissos</h3></tr>
                <tr><a href="{{ route('agenda.create') }}" class="nav-link cadastro">Cadastrar outro compromisso</a></tr>
                <tr>
                    <form action="{{ route('agenda.filtro') }}" class="form form-inline" method="POST">
                        @csrf
                        <div class="row listar">
                            <div class="col-md-2">
                                <input type="text" name="filtro_nome" placeholder="Filtrar nomes: " class="form-control">
                            </div>
                            <div class="col-md-2">
                                <input type="date" name="filtro_data" placeholder="Filtrar por data:" class="form-control">
                            </div>
                            <div class="col">
                                <button class="btn btn-secondary" type="submit">Filtrar</button>
                            </div>
                        </div>   
                    </form>
                </tr>
                <tr>
                  <th scope="col">Compromisso</th>
                  <th scope="col">Data do compromisso</th>
                  <th scope="col">Hora do Inicio</th>
                  <th scope="col">Hora do Termino</th>
                  <th scope="col">Local</th>
                  <th scope="col">Status</th> 
                  <th scope="col">Observações</th>
                  <th scope="col">Editar</th>
                  <th scope="col" >Excluir</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($listar as $compromissos)
                <tr>
                    <td>{{ $compromissos->nome_compromisso }}</td>
                    <td>{{ $compromissos->data }}</td>
                    <td>{{ $compromissos->data_inicio }}</td>
                    <td>{{ $compromissos->data_termino }}</td>
                    <td>{{ $compromissos->local }}</td>
                    <td>{{ $compromissos->status }}</td>
                    <td>{{$compromissos->observacoes}}</td>
                    <td><button type="button" class="btn btn-secondary"> <a href="{{ route('agenda.edit', $compromissos->id) }}" class="nav-link cadastro" id="editar">Editar</a></button></td>
                    <td>
                        <form action="{{ route('agenda.destroy', $compromissos->id) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Excluir</button>           
                        </form>
                    </td>
                </tr>
                @endforeach
              </tbody>
        </table>
        <div class="paginate">
            @if (isset($filtros))
                {{$listar->appends($filtros)->links()}}
            @else
                {{$listar->links()}}
            @endif
        </div>
    </div>
</body>
</html>