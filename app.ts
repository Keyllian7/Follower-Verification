import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || '';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
  console.error('Error: GITHUB_USERNAME or GITHUB_TOKEN not configured.');
  process.exit(1);
}

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

async function getFollowing(username: string): Promise<string[]> {
  const following: string[] = [];
  let page = 1;

  while (true) {
    const { data } = await api.get(`/users/${username}/following`, {
      params: { per_page: 100, page },
    });

    if (data.length === 0) break;
    following.push(...data.map((user: any) => user.login));
    page++;
  }

  return following;
}

async function getFollowers(username: string): Promise<string[]> {
  const followers: string[] = [];
  let page = 1;

  while (true) {
    const { data } = await api.get(`/users/${username}/followers`, {
      params: { per_page: 100, page },
    });

    if (data.length === 0) break;
    followers.push(...data.map((user: any) => user.login));
    page++;
  }

  return followers;
}

async function checkNonFollowers() {
  try {
    const following = await getFollowing(GITHUB_USERNAME);
    const followers = await getFollowers(GITHUB_USERNAME);

    const nonFollowers = following.filter((user) => !followers.includes(user));

    console.log('Users you follow but who don\'t follow you back:');
    console.log(nonFollowers);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

checkNonFollowers();
