function Typer(element, input, output) {
    Component.apply(this, [element]);

    this.textInput = input;
    this.textOutput = output;

    var baseRender = this.render;
    this.render = function(text) {
        this.textInput.oninput = function(event) {
            this.textOutput.innerHTML = this.textInput.value;
        }.bind(this);

        baseRender.apply(this, [text]);
    }
}

var element = document.getElementById('element')
var input = document.getElementById('input');
var output = document.getElementById('output');

var typer = new Typer(element, input, output);
typer.render('JavaScript is awesome.');
