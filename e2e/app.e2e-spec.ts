import { TodoTestPage } from './app.po';

describe('todo-test App', () => {
  let page: TodoTestPage;

  beforeEach(() => {
    page = new TodoTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
