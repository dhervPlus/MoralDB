@extends('layouts.master')
@section('content')
<h4>Create you own question here</h4>
<form method="POST" action='/questions'>
    {{ csrf_field()}}
    <div class="form-group">
        <label for="questionTitle">Title: </label>
        <input type="text" class="form-control" id="questionTitle" aria-describedby="questionTitle" placeholder="Enter your question"
            name='title'>
    </div>
    <div class="form-group">
        <label for="Description">Description</label>
        <small>if needed...</small>
        <textarea type="text" class="form-control" id="Description" placeholder="Your description..." name='description'></textarea>
    </div>
    <div class="form-group">
        <label>Your Vote:</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="yes" value="yes" checked>
            <label class="form-check-label" for="yes">
                      Yes
                    </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="no" value="yes">
            <label class="form-check-label" for="no">
                      No
                    </label>
        </div>
    </div>
    @include('layouts.error')
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection
