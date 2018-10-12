export default class Search {
    constructor(element) {
        this.element = element;
        this.state = {
            value: '',
            focus: false
        };
        this.init();
    }
    init() {
        console.log('init');
        this.bindEvents();
    }
    cacheDOM() {
        this.form = document.querySelector('form[name="search"]')
    }
    bindEvents() {
        this.element.addEventListener('focus', this.onToggleFocus.bind(this))
        this.element.addEventListener('blur', this.onToggleFocus.bind(this))
        this.element.addEventListener('change', this.onChange.bind(this));
        this.element.addEventListener('keypress', this.onKeyPress.bind(this));
    }
    onChange(event) {
        let value = event.target.value;
        let state = { ...this.state, value };
        this.state = {...state}
    }
    onToggleFocus() {
        let focus = !this.state.focus
        let state = {...this.state, focus}
        this.state = {...state}
        console.log(this.state)
    }
    onKeyPress(event) {
        let focus = this.state.focus;
        console.log(focus, event.keyCode)
        if(focus) {
            if(event.keyCode === 13) {
                console.log('here')
                // this.onChange(event)
                // this.actionSearch()
                this.form.submit()
            }
        }
        return
    }
    actionSearch() {
        console.log('action')
        fetch('/questions/search', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({...this.state}),
        }).then(response => console.log(response))
    }
    render() {}
}
