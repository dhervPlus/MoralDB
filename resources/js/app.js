import Comment from './components/Comment';
import Question from './components/Question';
(function() {
    class App {
        constructor() {
            this.init()
        }
        init() {
            document.querySelectorAll('.comment').forEach(comment => new Comment(comment))
            document.querySelectorAll('.question').forEach(question => new Question(question));
        }
    }
    new App();
})();
