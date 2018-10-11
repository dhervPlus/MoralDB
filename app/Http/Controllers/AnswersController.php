<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Question;

class AnswersController extends Controller
{
    public function store(Question $question, $type) {
       return $question->addAnswer($type);

    }
    public function index() {
        $questions = Question::has('answers')->get();
        return view('answers.index', compact('questions'));
    }
}
