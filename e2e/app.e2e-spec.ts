import { CsvReaderPage } from './app.po';

describe('csv-reader App', () => {
  let page: CsvReaderPage;

  beforeEach(() => {
    page = new CsvReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
