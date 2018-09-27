<?php
namespace App;

use Carbon\Carbon;

class Question extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
    public function addComment($comment)
    {
        $this->comments()->create([
            'comment' => $comment,
            'user_id' => auth()->id()
        ]);
    }
    public function addAnswer($type){
        $exists = $this->answers()->where('user_id', auth()->id())->exists();
        if(!$exists) {
            $this->answers()->create([
                'user_id' => auth()->id(),
                'question_id' => $this->id,
                'type' => $type
            ]);
        }
        return $this->getPercent();

    }
     public function getPercent() {
        $yes = $this->answers()->where('type', 'yes')->count();
        $no = $this->answers()->where('type', 'no')->count();
        $total = $yes + $no;
        $percent = ['yes' => $total ? $yes/$total * 100 : 0, 'no' => $total ? $no/$total * 100 : 0];
        $answers = $this->answers()->get();
        $return = [
            'answers' => $answers,
            'percent' => $percent
        ];
        return $return;
    }

    public function scopeFilter($query, $filters)
    {

        if (!empty($filters) && $month = $filters['month']) {
           $query->whereMonth('created_at', Carbon::parse($month)->month);
        }
    }
    static public function archives()
    {
        return static::selectRaw('day(created_at) as day,
        monthName(created_at) as month,
        count(*) as published')->groupBy('day', 'month')->orderByRaw('min(created_at) desc')->get()->toArray();
    }
}
