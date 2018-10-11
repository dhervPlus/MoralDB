@extends('layouts.master')
@section('content')
<div class="page">
    <section class="container container-main">
        <div class="container-title">
            <h4>Is it socially acceptable</h4>
            <span>most recent</span>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($questions as $q)
                <tr>
                    <td>{{$q->answers[0]->created_at}}</td>
                    <td>{{$q->description}}</td>
                    <td style="background-color:{{$q->answers[0]->type == 'yes' ? 'lightgreen' : 'lightred'}}">{{$q->answers[0]->type}}</td>
                    <td><a href="/questions/{{$q->id}}">Link</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </section>
</div>
@endsection
