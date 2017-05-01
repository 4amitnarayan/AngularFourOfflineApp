import { Ng4CitiPocPage } from './app.po';

describe('ng4-citi-poc App', () => {
  let page: Ng4CitiPocPage;

  beforeEach(() => {
    page = new Ng4CitiPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
