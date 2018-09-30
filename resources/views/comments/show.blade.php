<li class="comment" data-id={{ $comment->id }} >
    <div>
        <img src={{ asset( 'images/'.$comment->user->picture) }}>
    </div>
    <div class="comment-body">
        <div>
            <div class="comment-head">
                <p class="comment-author">{{ $comment->user->name }}</p>
                <p class="comment-date">
                    posted {{ $comment->created_at->diffForHumans() }}
                </p>
            </div>
            <p>
                {{ $comment->comment }}
            </p>
        </div>
        <div class="comment-like">
            <span class="comment-count"> {{ count($comment->like) }}</span>
            {{-- {{ $comment->like()->where(['user_id', auth()->id()]) }} --}}
            @if  (    $comment->checkLikes()  )
            <i data-id={{ $comment->id }} class="comment-icon fas fa-thumbs-up"></i>
            @else
            <i  class="comment-icon far fa-thumbs-up"></i>
            @endif
        </div>
    </div>
</li>
