@extends('layouts.master')
@section('content')
<section>
    <div class="question" data-id={{ $question->id }}>
        <div class="answers-container">
            <h4 class="question-title question-title-show">{{ $question->title }} {{ $question->description }}</h4>
    @include('answers.show')
        </div>
        <ul class='comments'>
            @foreach ($question->comments as $comment)
    @include('comments.show') @endforeach
        </ul>
    </div>
    <hr>
    @include('comments.create')
</section>
@endsection
