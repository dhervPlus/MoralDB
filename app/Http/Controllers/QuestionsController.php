<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Question;
use App\Answer;

use Carbon\Carbon;

class QuestionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }
    public function index()
    {
        $questions = Question::latest()->filter(request(['month']))->get();
        // return $archives;
        // $answers = Answer::select('question_id', DB::raw('count(*) as total'))->groupBy('question_id')->orderBy('total', 'desc')->get();

        // $popular = $answers->mapWithKeys(function($item) {
        //     $id = $item['question_id'];

        //     $key = Question::find($id);

        //     return [ 'question' => $key];
        // });

        // $popular->all();

        $popular = Question::withCount('answers')->orderBy('answers_count', 'desc')->limit(5)->get();
        return view('questions.index', compact('questions', 'popular'));
    }
    public function show(Question $question)
    {
        $get = $question->getPercent();
        $percent = $get['percent'];
        $answer = $get['answers'];
        $exist = $get['exist'];
        // dd($answer);
        return view('questions.show', compact('question', 'percent', 'answer', 'exist'));
    }
    public function create()
    {
        return view('questions.create');
    }
    public function store()
    {
        $this->validate(request(), [
            'title' => 'required',
            'description' => 'required'
        ]);
        auth()->user()->publish(
            new Question(request(['title', 'description', auth()->id()]))
        );
        return redirect('/');
    }
    public function search(Request $request)
    {
        // get string search
        $value = $request->input('search');
        return redirect('/questions/results?q=' . $value);
        // return all matches

        // return redirect()->route('questions/search?page=', [$matches]);
    }
    public function results(Request $request)
    {
          // search question table 'description' by text
        $questions = Question::where('description', 'LIKE', "%{$request['q']}%")->paginate(3);
        $questions->withPath('/questions/results?q=' . $request['q'] );
        return view('questions.search', compact('questions'));
        // return all matches

        // return redirect()->route('questions/search?page=', [$matches]);
    }

    public function showSearch($matches)
    {
        dd($matches);
    }
}
