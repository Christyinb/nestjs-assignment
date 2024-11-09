import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

    @Get('factorial/:number')
    getFactorial(@Param('number') number: string): { factorial: number | string } {
      // Convert the parameter to a number
      const num = parseInt(number, 10);

      // Check if the number is a valid integer
      if (isNaN(num)) {
        return { factorial: 'Invalid input, please provide a valid number' };
      }

      // Check for negative input, as factorial is undefined for negative numbers
      if (num < 0) {
        return { factorial: 'Factorial is not defined for negative numbers' };
      }

      // Calculate the factorial of the number
      const result = this.calculateFactorial(num);

      return { factorial: result };
    }

    // Helper method to calculate factorial using iteration (for efficiency)
    private calculateFactorial(n: number): number {
      if (n === 0 || n === 1) {
        return 1; // 0! = 1 and 1! = 1
      }

      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }

      return factorial;
    }

}