import { Injectable } from '@nestjs/common';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

export type GithubRepo =
  RestEndpointMethodTypes['repos']['get']['response']['data'];

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor(config: ConfigService) {
    this.octokit = new Octokit({ auth: config.getOrThrow('GH_TOKEN') });
  }

  private ownerRepo(name: string): { owner: string; repo: string } {
    const [owner, repo] = name.split('/');
    return { owner, repo };
  }

  async getRepo(name: string): Promise<GithubRepo> {
    const result = await this.octokit.rest.repos.get({
      ...this.ownerRepo(name),
    });
    return result.data;
  }

  async getReleaseCount(name: string): Promise<number> {
    const result = await this.octokit.rest.repos.listReleases({
      ...this.ownerRepo(name),
      per_page: 100,
    });
    return result.data.length;
  }
}
