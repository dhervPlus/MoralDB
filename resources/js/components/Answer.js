
export default class Answer {
    constructor(element, parent, render) {
        this.element = element
        this.parent = parent
        this.render = render
        this.name = element.dataset.name
        this.init();
    }
    init() {
        // this.cacheDOM();
        this.bindEvents();
        console.log(this)
    }
    cacheDOM() {
    }
    bindEvents() {
        this.element.addEventListener('click', this.onClick.bind(this))
    }
    onClick() {
        fetch(`/questions/${this.parent}/answers/${this.name}`)
            .then(response => response.json())
            .then(response => {
                this.render(response);
            })
            .catch(e => console.log(e));
    }
}
