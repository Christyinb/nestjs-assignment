import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
    
    // GET endpoint to calculate the Fibonacci sequence up to 'n' terms
    @Get('fibonacci/:n')
    getFibonacciSequence(@Param('n', ParseIntPipe) n: number): { sequence: number[] } {
        // Validate 'n' to ensure it's a positive integer
        if (n <= 0) {
            throw new HttpException('n must be a positive integer', HttpStatus.BAD_REQUEST);
        }

        // Calculate Fibonacci sequence
        const sequence = this.calculateFibonacci(n);

        // Return the result as a JSON object
        return { sequence };
    }

    // Helper function to calculate the Fibonacci sequence
    private calculateFibonacci(n: number): number[] {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, n); // Ensure only 'n' terms are returned
    }
}
