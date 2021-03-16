import { useVideosSearch } from '../useVideosSearch';
import { items } from '../../mock/youtube-videos-mock.json';

describe('Test on useVideoSearch', () => {
  it("Check hook's return value is not undefined", () => {
    const videos = useVideosSearch();
    expect(videos).not.toBe(undefined);
  });

  it("Check promise's value as long as mock data", () => {
    const videos = useVideosSearch();

    videos.then((result) => {
      expect(result.length).toBe(items.length);
    });
  });
});
