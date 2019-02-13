class CalculatorProcessor {
    constructor(calculator) {
        this._calculator = calculator;

        this.registerOperations();
    }

    registerOperations() {
        this._calculator.additionButton.onclick = function() {
            this.add();
        }.bind(this);

        this._calculator.subtractionButton.onclick = function() {
            this.subtract();
        }.bind(this);

        this._calculator.multiplicationButton.onclick = function() {
            this.multiply();
        }.bind(this);

        this._calculator.divisionButton.onclick = function() {
            this.divide();
        }.bind(this);
    }

    add() {
        var sum = this._calculator.leftOperand + this._calculator.rightOperand;
        this._calculator.render(sum);
    }

    subtract() {
        var subtraction = this._calculator.leftOperand - this._calculator.rightOperand;
        this._calculator.render(subtraction);
    }

    multiply() {
        var multiplication = this._calculator.leftOperand * this._calculator.rightOperand;
        this._calculator.render(multiplication);
    }

    divide() {
        var division = this._calculator.leftOperand / this._calculator.rightOperand;
        this._calculator.render(division);
    }

}

var result = document.getElementById('element');
var lhs = document.getElementById('lhs');
var rhs = document.getElementById('rhs');
var operations = document.getElementsByName('operation');

var calculator = new CalculatorComponent(result, lhs, rhs, operations);
calculator.render('Result will be displayed here');

var processor = new CalculatorProcessor(calculator);
