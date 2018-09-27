// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
// require('./bootstrap');
// window.Vue = require('vue');
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// const app = new Vue({
//     el: '#app'
// });
(function() {
    let addLike = () => {
        let likes = document.querySelectorAll('.addlike');
        Array.from(likes).forEach(function(item) {
            let initialCount = Number(item.textContent);
            item.addEventListener('click', function() {
                fetch(`/comments/${item.dataset.id}/likes`)
                    .then(res => res.text())
                    .then(res => {
                        res !== 'exists' ? '' : (item.textContent = initialCount + 1);
                    });
            });
        });
    };
    let chooseAnswer = () => {
        let answers = document.querySelectorAll('.answer');
        Array.from(answers).forEach(function(item) {
            item.addEventListener('click', function(event) {
                console.log('event', event, event.currentTarget);
                let question = event.currentTarget.dataset.question;
                let answer = event.currentTarget.dataset.answer;
                fetch(`/questions/${question}/answers/${answer}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log('response', res);
                        Array.from(answers).forEach(item => {
                            console.log(item);
                            item.style.width = `${res.percent[item.dataset.answer]}%`;
                            item.style.transition = 'all .3s linear';
                            let span = item.querySelector('span');
                            span.classList.remove('off');
                            span.classList.add('on');
                            span.textContent = `${Math.floor(res.percent[item.dataset.answer])}%`;
                        });
                    })
                    .catch(e => console.log(e));
            });
        });
    };
    addLike();
    chooseAnswer();
})();
