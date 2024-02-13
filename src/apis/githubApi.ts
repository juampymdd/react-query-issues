import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    'Authorization': `token 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`
  }
})

