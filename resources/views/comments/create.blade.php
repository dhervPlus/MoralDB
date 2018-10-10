<div>

    <div class="comment-create">
        <form method="POST" action="/questions/{{ $question->id }}/comments">
            {{ csrf_field()}}
            <div class="input-textarea">

                <textarea name="comment" id="comment" rows="3"></textarea>
                <label class="comment-label" for="comment">Your comment</label>
            </div>
    @include('layouts.error')
            <button type='submit' class="btn btn-primary">Leave it here</a>
        </form>
    </div>
</div>
