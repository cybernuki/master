import { Injectable } from '@nestjs/common';
import { CalculateSineParams } from './params/calculate-sine.params';

@Injectable()
export class NomenclatureService {
  calculateSine(params: CalculateSineParams) {
    const {sumA, sumB, times} = params;

    const sum = sumA + sumB;
    const product = sum * times;
    const sin = Math.sin(product);

    return sin;
  }
}
