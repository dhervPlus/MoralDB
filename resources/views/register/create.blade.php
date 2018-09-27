@extends('layouts.master')
@section('content')
<h1>Registration</h1>
<hr>
<form method='POST' action="/register">
    {{ csrf_field() }}
    <div class="form-group">
        <label for="name"></label>
        <input type="text" name="name" id="name" class="form-control" placeholder="Name" aria-describedby="helpId" required>
    </div>
    <div class="form-group">
        <label for="email"></label>
        <input type="email" name="email" id="email" class="form-control" placeholder="Email" aria-describedby="helpId" required>
    </div>
    <div class="form-group">
        <label for="password"></label>
        <input type="password" name="password" id="password" class="form-control" placeholder="Password" aria-describedby="helpId" required>
    </div>
    <div class="form-group">
        <label for="password_confirmation"></label>
        <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" required>
    </div>
    @include('layouts.error')
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection
