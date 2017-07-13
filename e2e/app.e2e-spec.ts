import { ProgressBarPage } from './app.po';

describe('progress-bar App', () => {
  let page: ProgressBarPage;

  beforeEach(() => {
    page = new ProgressBarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
