import FilterbarModule from './index';
import FilterbarController from './filterbar.controller';
import FilterbarComponent from './filterbar.component';
import FilterbarTemplate from './filterbar.html';

describe('Filterbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FilterbarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FilterbarController();
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
    //   expect(FilterbarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FilterbarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FilterbarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FilterbarController);
    });
  });
});
