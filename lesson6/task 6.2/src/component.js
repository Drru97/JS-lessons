class Component {
    constructor(element) {
        this.element = element;
    }

    render(text) {
        this.element.innerHTML = `
            <h1>Hello from Component</h1>
            <div>
                <p>${text}</p>
            </div>
        `;
    }
}
