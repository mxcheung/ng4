import { Ng4RestapiDropdownPage } from './app.po';

describe('ng4-restapi-dropdown App', () => {
  let page: Ng4RestapiDropdownPage;

  beforeEach(() => {
    page = new Ng4RestapiDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
