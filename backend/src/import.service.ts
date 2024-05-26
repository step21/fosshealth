import { Injectable } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { RepoService } from './repo.service';
import { GithubService } from './github.service';
import { OpensaucedService } from './opensauced.service';
import { ScorecardService } from './scorecard.service';

interface GithubRepo {
  full_name: string;
}

@Injectable()
export class ImportService {
  constructor(
    private fetchService: FetchService,
    private repo: RepoService,
    private githubService: GithubService,
    private opensaucedService: OpensaucedService,
    private scorecardService: ScorecardService,
  ) {}

  async importAll(): Promise<any> {
    const repos = this.fetchService.getItemsToImport();
    for (const repo of repos) {
      const repoData = await this.githubService.getRepo(repo.full_name);
      const releaseCount = await this.githubService.getReleaseCount(
        repo.full_name,
      );
      const scorecardData = await this.scorecardService.getData(repo.full_name);
      const pizzaData = await this.opensaucedService.getData(repo.full_name);
      await this.repo.upsert(repo.full_name, {
        githubRepo: repoData,
        releaseCount,
        opensaucedData: pizzaData,
        scorecardData,
      });
    }
  }
}
