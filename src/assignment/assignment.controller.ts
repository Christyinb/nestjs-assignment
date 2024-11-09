import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

    @Get('prime/:number')
  checkPrime(@Param('number') number: string): { isPrime: boolean } {
    // Convert the parameter to a number
    const num = parseInt(number, 10);

    // Handle invalid input, if it's not a number
    if (isNaN(num)) {
      return { isPrime: false }; // Return false if the input is not a valid number
    }

    // Check if the number is prime
    const result = this.isPrime(num);

    return { isPrime: result };
  }

  // Helper method to check if a number is prime
  private isPrime(n: number): boolean {
    if (n <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
    if (n === 2) {
      return true; // 2 is a prime number
    }
    if (n % 2 === 0) {
      return false; // Eliminate even numbers greater than 2
    }

    // Only check for factors from 3 to sqrt(n) (step by 2 to skip even numbers)
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) {
        return false; // n is divisible by i, so it's not prime
      }
    }

    return true; // If no factors were found, the number is prime
  }
}