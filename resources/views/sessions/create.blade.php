@extends('layouts.master')
@section('content')
<form method='POST' action="/login">
    {{ csrf_field() }}
    <div class="form-group">
        <input type="text" name="email" id="email" class="form-control" placeholder="email" aria-describedby="helpId">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" name="password" id="password" placeholder="password">
    </div>
    @include('layouts.error')
    <button type="submit">Login</button>
</form>
@endsection
