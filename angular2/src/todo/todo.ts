export default class Todo {
    active: boolean;
    text: string;
    id: number;

    constructor(text: string, id: number, active: boolean = true) {
        this.text = text;
        this.id = id;
        this.active = active;
    }

    toggle() {
        this.active = !this.active;
    }
}
