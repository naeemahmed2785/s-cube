import { SCubePage } from './app.po';

describe('s-cube App', () => {
  let page: SCubePage;

  beforeEach(() => {
    page = new SCubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
