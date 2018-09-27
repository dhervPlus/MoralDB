<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Comment;

class LikesController extends Controller
{
    public function store(Comment $comment)
    {


        $added = $comment->addLike();

        return $added;
    }
}
