function Component(element) {
    this._element = element;

    this.render = function(text) {
        this._element.innerHTML = `
            <h1>Hello from Component</h1>
            <div>
                <p>${text}</p>
            </div>
        `;
    }
}
