import ContactModule from './index';
import ContactController from './contacts-list-item.controller';
import ContactComponent from './contacts-list-item.component';
import ContactTemplate from './contacts-list-item.html';

describe('Contact', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    //   let controller = makeController();
    //   expect(controller).to.have.property('name');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(ContactTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContactComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContactTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContactController);
    });
  });
});
