<div>

    <div class="comment-create">
        <form method="POST" action="/questions/{{ $question->id }}/comments">
            {{ csrf_field()}}
            <div class="input-textarea">

                <textarea auto-resize name="comment" id="comment"></textarea>
                <label class="comment-label" for="comment">Your comment</label>
            </div>
    @include('layouts.error')
            <button type='submit' class="button-login">Leave it here</a>
        </form>
    </div>
</div>
