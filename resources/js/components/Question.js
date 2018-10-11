import Answers from './Answers';

export default class Question {
    constructor(element) {
        this.element = element
        this.id = element.dataset.id;
        this.init();
    }
    init() {
        this.cacheDOM();
        // this.bindEvents();
    }
    cacheDOM() {
        this.answers = this.element.querySelectorAll('.answer');
        new Answers(this.answers, this.id);
    }
    // bindEvents() {
    // }
    render(response) {
        console.log(response)
        this.answers.forEach(item => {
            item.style.width = `${response.percent[item.dataset.name]}%`;
            item.style.transition = 'all .3s linear';
            let span = item.querySelector('.percent');
            span.classList.remove('off');
            span.classList.add('on');
            span.textContent = `${Math.floor(response.percent[item.dataset.name])}%`;
        });
    }
}
