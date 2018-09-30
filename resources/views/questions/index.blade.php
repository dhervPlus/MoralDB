@extends('layouts.master')
@section('content')
<div class="page">
    <section class="container container-main">
        <div class="container-title">
            <h4>Is it socially acceptable</h4>
            <span>most recent</span>
        </div>
        @foreach ($questions as $question)
        <article class="question-item">
            <a href="/questions/{{$question->id}}" class="question-link">
                <div class="question-group">
                    <p class="question-title">{{ $question->description }}</p>

                    <div>
                        {{-- <i class="fas fa-heart"></i> --}}
                        <i class="fas fa-fire"></i>
                        <i class="far fa-heart"></i>
                        <i class="fas fa-concierge-bell"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    {{--
                    <h5 class="question-title_header">{{$question->title}}</h5> --}} {{-- <small>{{ $question->created_at->toFormattedDateString() }}</small>                    --}}
                </div>

                {{--
                <p class="question-body">{{ $question->description }}</p> --}}

                <p class="question-date">{{ $question->created_at->toFormattedDateString() }}</p>

                @foreach ($question->comments as $comment) @if ($loop->index
                < 2) <blockquote class="question-index-comment">
                    - "{{ $comment->comment }}
                    </blockquote>
                    @endif @endforeach



            </a>
        </article>
        @endforeach
    </section>
    @include('questions.aside')
</div>
@endsection
