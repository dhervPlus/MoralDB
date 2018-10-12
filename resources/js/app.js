import Comment from './components/Comment';
import Question from './components/Question';
import Search from './components/Search';
(function() {
    class App {
        constructor() {
            this.init()
        }
        init() {
            document.querySelectorAll('.comment').forEach(comment => new Comment(comment))
            document.querySelectorAll('.question').forEach(question => new Question(question));
            document.querySelectorAll('input[type="search"]').forEach(search => new Search(search))
        }
    }
    new App();
})();
(function() {
        function domReady (f) { /in/.test(document.readyState) ? setTimeout(domReady,16,f) : f() }
        function resize (event) {
          event.target.style.height = 'auto';
          event.target.style.height = event.target.scrollHeight+'px';
        }
        /* 0-timeout to get the already changed text */
        function delayedResize (event) {
          window.setTimeout(resize, 0, event);
        }
        domReady(function () {
          var textareas = document.querySelectorAll('textarea[auto-resize]')
          for (var i = 0, l = textareas.length; i < l; ++i) {
            var el = textareas.item(i)
            el.addEventListener('change',  resize, false);
            el.addEventListener('focus', resize, false);
            el.addEventListener('blur', resize, false);
            el.addEventListener('cut',     delayedResize, false);
            el.addEventListener('paste',   delayedResize, false);
            el.addEventListener('drop',    delayedResize, false);
            el.addEventListener('keydown', delayedResize, false);
          }
        })
})()
