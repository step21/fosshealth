import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from './repo.entity';
import { RepoController } from './repo.controller';
import { FetchService } from './fetch.service';
import { RepoService } from './repo.service';
import { ImportService } from './import.service';
import { GithubService } from './github.service';
import { ConfigModule } from '@nestjs/config';
import { OpensaucedService } from './opensauced.service';
import { ScorecardService } from './scorecard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Repo]), ConfigModule.forRoot()],
  providers: [
    FetchService,
    RepoService,
    ImportService,
    GithubService,
    OpensaucedService,
    ScorecardService,
  ],
  controllers: [RepoController],
})
export class RepoModule {}
