import MainModule from './index';
import MainController from './main.controller';
import MainComponent from './main.component';
import MainTemplate from './main.html';

describe('Main', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MainModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(MainTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MainComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MainTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MainController);
    });
  });
});
