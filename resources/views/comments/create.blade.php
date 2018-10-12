<div>

    <div class="comment-create">
        <form method="POST" action="/questions/{{ $question->id }}/comments">
            {{ csrf_field()}}
            <div class="input-container">

                <textarea auto-resize name="comment" id="comment" class="input-textarea input-text input"></textarea>
                <label class="input-label" for="comment">Your comment</label>
            </div>
    @include('layouts.error')
            <button type='submit' class="button-login">Leave it here</a>
        </form>
    </div>
</div>
