# FossFind

## Discover healthy FOSS communities in Web3
FossFind lets developers contribute to FOSS communities with greater impact. 

FOSS Find builds further upon several pre-existing metrics, with the aim to achieve the highest possible quality data- driven insights. Also, automate the dataset that shows a sort of "Leaderboard" of FOSS projects, allows for filtering/weighting of metrics, and takes in new data with a scraper or other data input method automatically.

## How it Works
Project data is scrapped from Git repositories and curated into a table for easy comparision.

## Technology Involved
- Github
- Nestjs Framework (nodejs)
- TypeORM
- Postgres DB
- HTML / CSS
- EJS
- Flask (python)


## Datasource's Involved
- Github API
- https://opensauced.pizza API
- https://github.com/ossf/scorecard CLI-Tool
- https://github.com/chaoss/augur

## Frontend 

to run it:
```
npm install
```
```
npm run dev
```
port:
```
localhost:3003
```

## Backend Nodejs

Scraped Repos with basic data: 

https://fosshealth.onrender.com/repo

Full dataset:

https://fosshealth.onrender.com/repo/raw

to run it:

```
cp .env.example .env
```
and fill values

```
docker compose up
```