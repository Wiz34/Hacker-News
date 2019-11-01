import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebase.io.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;


export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(data => data);
  return result;
}