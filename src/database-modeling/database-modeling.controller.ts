import { Controller, Get, InternalServerErrorException, Response, StreamableFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReadableStream } from 'node:stream/web';
import { Readable } from 'stream';

@ApiTags('forth exercise')
@Controller('database-modeling')
export class DatabaseModelingController {
  @Get()
  async getFile(
    @Response({ passthrough: true }) res: any
): Promise<StreamableFile> {
    const response = await fetch('https://riseofrequirementsbucket.s3.amazonaws.com/master/database-diagram.pdf');

    if (!response.body) throw new InternalServerErrorException('image not found');

    res.set({
      'Content-Type': 'application/pdf',
    })

    return new StreamableFile(Readable.fromWeb(response.body as ReadableStream<Uint8Array>));
  }
}
