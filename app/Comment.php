<?php
namespace App;

class Comment extends Model
{
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function like()
    {
        return $this->hasMany(Likes::class);
    }
    public function checkLikes() {

        $liked = $this->like()->where(['user_id' => auth()->id()])->exists();
        return $liked;
    }
    public function addLike()
    {
        $exist = $this->like()->where(['comment_id' => $this->id, 'user_id' => auth()->id()])->exists();
        $added = false;
        if (!$exist) {
            $this->like()->create([
                'comment_id' => $this->id,
                'user_id' => auth()->id()
            ]);
            $added = true;
        }
        return $added;
    }
}
