# needs oss-red-flag-checker to be installed (binary ossrfc)
import subprocess
from config import *

def run_ossrfc(repo_url):
    command = f"ossrfc --json --token {github_access_token} -r {repo_url}"
    
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    
    if result.returncode == 0:
        return result.stdout
    else:
        return f"error: {result.stderr}"


if __name__ == '__main__':
    print(run_ossrfc("https://github.com/freeCodeCamp/freeCodeCamp"))