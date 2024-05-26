import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

export interface OpensaucedData {
  id: number;
  size: number;
  issues: number;
  stars: number;
  forks: number;
  watchers: number;
  subscribers: number;
  network: number;
  is_fork: boolean;
  is_private: boolean;
  is_template: boolean;
  is_archived: boolean;
  is_disabled: boolean;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  node_id: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  mirror_url: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  license: string;
  url: string;
  homepage: string;
  topics: string[];
  votesCount: number;
  submissionsCount: number;
  stargazersCount: number;
  starsCount: number;
  opened_issues_count: number;
  closed_issues_count: number;
  issues_velocity_count: number;
  open_prs_count: number;
  pr_active_count: number;
  merged_prs_count: number;
  spam_prs_count: number;
  draft_prs_count: number;
  closed_prs_count: number;
  pr_velocity_count: number;
  fork_velocity: number;
  activity_ratio: number;
  contributor_confidence: number;
  health: number;
  last_pushed_at: string;
  last_main_pushed_at: string;
}

@Injectable()
export class OpensaucedService {
  async getData(repoName: string): Promise<OpensaucedData> {
    const response = await fetch(
      `https://api.opensauced.pizza/v2/repos/${repoName}?range=30`,
    );
    if (response.status != 200) {
      throw new Error('response not 200');
    }
    const data = await response.json();
    return data as unknown as OpensaucedData;
  }
}
