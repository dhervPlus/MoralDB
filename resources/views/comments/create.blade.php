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
