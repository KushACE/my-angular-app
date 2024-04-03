import { Component } from '@angular/core';

@Component({
  selector: 'app-postfix-evaluator',
  templateUrl: './postfix-evaluator.component.html',
  styleUrls: ['./postfix-evaluator.component.css']
})
export class PostfixEvaluatorComponent {
  postfixExpression: string = '';
  result: number | null = null;

  evaluatePostfix(): void {
    const stack: number[] = [];
  
    for (const char of this.postfixExpression) {
      if (!isNaN(Number(char))) {
        stack.push(Number(char));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        if (operand1 === undefined || operand2 === undefined) {
          this.result = null; // Invalid postfix expression
          return;
        }
        switch (char) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          default:
            this.result = null; // Invalid operator
            return;
        }
      }
    }
  
    if (stack.length === 1) {
      this.result = stack.pop() ?? null; // Use nullish coalescing operator to handle undefined case
    } else {
      this.result = null; // Invalid postfix expression
    }
  }
  
}
