class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.channels = {};
  }

  async channel(id, videos) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id,
      },
    });

    if (response.data.items[0].hasOwnProperty('snippet')) {
      response.data.items[0].channelInfo = response.data.items[0].snippet;
      delete response.data.items[0].snippet;
    }
    return (this.channels = { ...response.data.items[0], ...videos });
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 24,
        regionCode: 'KR',
      },
    });
    this.finallist = [];
    response.data.items.map((item) =>
      this.finallist.push(this.channel(item.snippet.channelId, item))
    );
    return Promise.all(this.finallist).then((values) => values);
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet, statistics',
        maxResults: 24,
        type: 'video',
        q: query,
      },
    });

    const changedId = [];
    response.data.items.map((item) =>
      changedId.push({ ...item, id: item.id.videoId })
    );

    this.finallist = [];
    changedId.map((item) =>
      this.finallist.push(this.channel(item.snippet.channelId, item))
    );
    return Promise.all(this.finallist).then((values) => values);
  }
}

export default Youtube;
