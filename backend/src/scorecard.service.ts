import { exec } from 'child_process';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

export interface ScorecardData {
  date: string;
  repo: Repo;
  scorecard: Scorecard;
  score: number;
  checks: Check[];
  metadata: any;
}

export interface Repo {
  name: string;
  commit: string;
}

export interface Scorecard {
  version: string;
  commit: string;
}

export interface Check {
  details?: string[];
  score: number;
  reason: string;
  name: string;
  documentation: Documentation;
}

export interface Documentation {
  url: string;
  short: string;
}

@Injectable()
export class ScorecardService {
  constructor(private config: ConfigService) {}

  public async getData(repoName: string): Promise<ScorecardData> {
    const result = await new Promise<string>((resolve, reject) => {
      exec(
        `/usr/src/app/dist/scorecard --show-details --format=json --repo=https://github.com/${repoName}`,
        { env: { GITHUB_AUTH_TOKEN: this.config.getOrThrow('GH_TOKEN') } },
        (error, stdout, stderr) => {
          if (error || stderr) {
            return reject(error);
          }
          resolve(stdout);
        },
      );
    });
    return JSON.parse(result) as unknown as ScorecardData;
  }
}
