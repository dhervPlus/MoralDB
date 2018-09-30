export default class Comment {
    constructor(element) {
        this.element = element;
        this.id = element.dataset.id;
        this.init();
    }
    init() {
        this.cacheDOM();
        this.bindEvents();
    }
    cacheDOM() {
        this.like = this.element.querySelector('.comment-like')
        this.count = this.element.querySelector('.comment-count')
        this.icon = this.element.querySelector('.comment-icon')
        this.countNum = Number(this.count.textContent)
    }
    bindEvents() {
        this.like.addEventListener('click', this.addLike.bind(this));
    }
    render() {
        this.countNum += 1
        this.count.textContent = this.countNum;
        this.icon.classList.replace('far', 'fas')
    }
    addLike() {
        fetch(`/comments/${this.id}/likes`)
            .then(response => response.json())
            .then(({added}) => {
                added ? this.render() : '';
            });
    }}
