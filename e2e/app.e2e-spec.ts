import { AngularDynamicComponentsPage } from './app.po';

describe('angular-dynamic-components App', () => {
  let page: AngularDynamicComponentsPage;

  beforeEach(() => {
    page = new AngularDynamicComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
