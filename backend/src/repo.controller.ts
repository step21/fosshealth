import { Controller, Get } from '@nestjs/common';
import { RepoService } from './repo.service';
import { ImportService } from './import.service';
import { ConfigService } from '@nestjs/config';

@Controller('/repo')
export class RepoController {
  constructor(
    private readonly repoService: RepoService,
    private readonly importService: ImportService,
    private config: ConfigService,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.repoService.findAllMapped();
  }

  @Get('/raw')
  async getAllRaw(): Promise<any> {
    return await this.repoService.findAll();
  }

  @Get('/import-all')
  async import(): Promise<any> {
    await this.importService.importAll();
    return { result: 'ok' };
  }
}
