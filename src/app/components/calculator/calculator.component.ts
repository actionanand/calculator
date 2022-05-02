import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttonVals = ['1', '2', '3', '/', '4', '5', '6', 'X', '7', '8', '9', '-', '(', ')', '0', '+', 'Del', '.', '=', '%', 'AC'];

  operands = ['X', '/', '+', '%', '-', '='];
  parentheses = ['(', ')'];
  actionBtns = ['Del', 'AC']

  inputVals = '';
  prevOperand = '';
  curOperand = '';
  prevParenthhesis = '';
  curParenthesis = '';
  prevValue = '';
  curValue = '';
  isPrevValueOperand = false;
  isOperandOrValueAllowed = false;

  constructor() { }

  ngOnInit(): void {
  }

  getInput(e:any, val: string) {
    e.preventDefault();

    if(this.operands.indexOf(val) !== -1) {
      val == 'X' ? this.curOperand = '*' : this.curOperand = val;
      val == '=' ? this.computeTheExp() : this.operandLogic();
      this.isPrevValueOperand = true;
    } else if (this.parentheses.indexOf(val) !== -1) {
        this.curParenthesis = val;
        this.parenthesesLogic();
        this.isPrevValueOperand = false;
    } else if (this.actionBtns.indexOf(val) !== -1) {
        this.actionLogic(val);
        this.isPrevValueOperand = false;
    } else {
        this.curValue = val;
        this.valueLogic();
        this.isPrevValueOperand = false;
    }

    // if(val == 'X') {
    //   this.inputVals += "*";
    // }
    // else if(val == "=" && this.inputVals == '.') {
    //   alert("Please enter a valid mathematical expression.");
    // }
    // else if(val == "=") {
    //   this.inputVals = eval(this.inputVals);
    // }
    // else if(val == "c") {
    //   this.inputVals = this.inputVals.slice(0,this.inputVals.length-1);
    // }
    // else {
    //   this.inputVals += val;
    // }
  }

  operandLogic() {
    if (this.prevOperand == this.curOperand) {
      return;
    } else if (this.isPrevValueOperand) {
      this.actionLogic('Del');
    }
    this.inputVals += this.curOperand;
    this.prevOperand = this.curOperand;
    this.prevParenthhesis = '';
    this.prevValue = '';
  }

  parenthesesLogic() {
    if (this.curParenthesis == this.prevParenthhesis) {
      return;
    }
    this.inputVals += this.curParenthesis;
    this.prevParenthhesis = this.curParenthesis;
    this.prevOperand = '';
    this.prevValue = '';
  }

  valueLogic() {
    if(this.prevValue == this.curValue && this.prevValue == '.') {
      return;
    }
    this.inputVals += this.curValue;
    this.prevValue = this.curValue;
    this.prevOperand = '';
    this.prevParenthhesis = '';
  }

  computeTheExp() {
    this.inputVals = eval(this.inputVals);
    this.prevOperand = '';
    this.prevParenthhesis = '';
    this.prevValue = '';
  }

  actionLogic(actionIn: string) {
    if (actionIn == 'Del') {
      this.inputVals = this.inputVals.slice(0, -1);
    } else {
      this.inputVals = '';
      this.prevOperand = '';
      this.prevParenthhesis = '';
      this.prevValue = '';
    }
  }

}
