import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'node:path';

interface GithubRepo {
  full_name: string;
}

@Injectable()
export class FetchService {
  getItemsToImport(): GithubRepo[] {
    const items = JSON.parse(
      fs.readFileSync(path.join(__dirname, './assets/import.json')).toString(),
    );
    return items.items;
  }
}
