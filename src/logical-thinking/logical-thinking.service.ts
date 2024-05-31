import { BadRequestException, Injectable } from '@nestjs/common';
import { ListOddNumbersParams } from './params/list-odd-numbers.params';

@Injectable()
export class LogicalThinkingService {
  private _cachedResponse: number[] = [];

  getOddList(params: ListOddNumbersParams) {
    if (params.target % 2 === 0) {
      throw new BadRequestException('target query param should be an odd number');
    }

    const numberIndex = Math.ceil(params.target / 2);

    const remainfreeSlots = numberIndex - this._cachedResponse.length;
    if (remainfreeSlots > 0) {
      let freeSlots = remainfreeSlots;
      const missingElements = [];
      let currentElement = params.target;

      while (freeSlots) {
        missingElements.push(currentElement)
        currentElement -= 2;
        freeSlots--;
      }
      this._cachedResponse.push(...missingElements.reverse());
    }

    return this._cachedResponse.slice(0, numberIndex)
  }
}
