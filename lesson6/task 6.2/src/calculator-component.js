class CalculatorComponent extends Component {
    constructor(result, lhs, rhs, operations) {
        super(result);

        this._lhs = lhs;
        this._rhs = rhs;
        this._operations = operations;
    }

    get leftOperand() {
        return parseFloat(this._lhs.value);
    }

    get rightOperand() {
        return parseFloat(this._rhs.value);
    }

    get additionButton() {
        return this._operations[0];
    }

    get subtractionButton() {
        return this._operations[1];
    }

    get multiplicationButton() {
        return this._operations[2];
    }

    get divisionButton() {
        return this._operations[3];
    }
    // use with input
    // render(text) {
    //     this.element.value = text;
    // }
}
