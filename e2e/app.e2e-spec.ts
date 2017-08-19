import { DerbyCustomersAppPage } from './app.po';

describe('derby-customers-app App', () => {
  let page: DerbyCustomersAppPage;

  beforeEach(() => {
    page = new DerbyCustomersAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
