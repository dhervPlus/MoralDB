import Answer from './Answer';
export default class Answers {
    constructor(elements, id) {
        this.elements = elements
        this.id = id
        this.init();
    }
    init() {
        this.cacheDOM();
        // this.bindEvents();
    }
    cacheDOM() {
        this.elements.forEach(answer => new Answer(answer, this.id, this.render.bind(this)))
    }
    render(response) {
        this.elements.forEach(answer => {
            answer.style.width = `${response.percent[answer.dataset.name]}%`;
            answer.style.transition = 'all .3s linear';
            let span = answer.querySelector('.percent');
            span.classList.remove('off');
            span.classList.add('on');
            span.textContent = `${Math.floor(response.percent[answer.dataset.name])}%`;
        });
    }
}
