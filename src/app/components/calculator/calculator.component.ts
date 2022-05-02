import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttonVals = ['1','2','3','/','4','5','6','X','7','8','9','-','(',')','0','+','c','.','=','%'];

  operands = ['X', '/', '+', '%', '-', '='];
  parentheses = ['(', ')'];
  actionBtns = ['c']

  inputVals = '';
  prevOperand = '';
  curOperand = '';
  prevParenthhesis = '';
  curParenthesis = '';
  prevValue = '';
  curValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  getInput(e:any, val: string) {
    e.preventDefault();

    if(this.operands.indexOf(val) !== -1) {
      val == 'X' ? this.curOperand = '*' : this.curOperand = val;
      this.operandLogic();
      console.log('Operand ', val);
    } else if (this.parentheses.indexOf(val) !== -1) {
      this.curParenthesis = val;
      this.parenthesesLogic();
      console.log('parentheses Button ', val);
    } else {
      this.curValue = val;
      this.valueLogic();
      console.log('Other ', val);
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
      console.log('Same operand')
      return;
    }
    console.log('diff operand')
    this.inputVals += this.curOperand;
    this.prevOperand = this.curOperand;
    this.prevParenthhesis = '';
    this.prevValue = '';
  }

  parenthesesLogic() {
    if (this.curParenthesis == this.prevParenthhesis) {
      console.log('Same parenthesis')
      return;
    }
    console.log('diff parenthes')
    this.inputVals += this.curParenthesis;
    this.prevParenthhesis = this.curParenthesis;
    this.prevOperand = '';
    this.prevValue = '';
  }

  valueLogic() {
    if(this.prevValue == this.curValue && this.prevValue == '.') {
      console.log('again dot')
      return;
    }
    this.inputVals += this.curValue;
    this.prevValue = this.curValue;
    this.prevOperand = '';
    this.prevParenthhesis = '';
  }

}
