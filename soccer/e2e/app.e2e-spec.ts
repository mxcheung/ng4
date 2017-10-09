import { SoccerPage } from './app.po';

describe('soccer App', () => {
  let page: SoccerPage;

  beforeEach(() => {
    page = new SoccerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
