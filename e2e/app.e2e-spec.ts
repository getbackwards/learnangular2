import { CliOnePage } from './app.po';

describe('cli-one App', () => {
  let page: CliOnePage;

  beforeEach(() => {
    page = new CliOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
