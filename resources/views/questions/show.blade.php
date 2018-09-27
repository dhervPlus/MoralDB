@extends('layouts.master')
@section('content')
<section class="question">
        <h4 class="lead">{{$question->title}}</h4>
        <h3>{{ $question->description}}</h3>
        <hr>
        <div data-percent={{ $percent['yes'] }} data-answer='yes' data-question={{ $question->id }} class="alert alert-success answer" role="alert">
            Yes <span class='percent off'>{{ floor((int)$percent['yes']) }}%</span> </div>
        <div data-percent={{ $percent['no'] }} data-answer='no' data-question={{ $question->id }} class="alert alert-danger answer" role="alert">
            No <span class='percent off'>{{ floor((int)$percent['no']) }}%</span></div>
        <hr>
        <div class='comments'>
            <ul class='list-group'>
                @foreach ($question->comments as $comment)
                <li class="list-group-item d-flex-inline">
                    <img style='max-height: 60px' class="img-thumbnail" src={{ asset( 'images/'.$comment->user->picture) }}>
                    <div class="d-flex align-items-end justify-content-between ml-auto">
                        <strong style='display: inline-block' class="mh-100">
                                    {{$comment->created_at->diffForHumans()}}:&nbsp;
                                </strong> {{$comment->comment}}
                        <div class="ml-auto"><i data-id={{ $comment->id }} class="addlike fa fa-arrow-circle-up text-success">{{ count($comment->like) }} </i></div>
                    </div>
                </li>
                @endforeach
            </ul>
        </div>
        <hr>
        <div class="card">
            <div class="card-header">
                Leave a comment
            </div>
            <div class="card-body">
                <form method="POST" action="/questions/{{ $question->id }}/comments">
                    {{ csrf_field()}}
                    <div class="form-group">
                        <label for="comment"></label>
                        <textarea class="form-control" name="comment" id="comment" rows="3"></textarea>
                    </div>
            @include('layouts.error')
                    <button type='submit' class="btn btn-primary">Leave it here</a>
                </form>
            </div>
        </div>
</section>

@endsection


