import ContactsListDetailModule from './index';
import ContactsListDetailController from './contacts-list-detail.controller';
import ContactsListDetailComponent from './contacts-list-detail.component';
import ContactsListDetailTemplate from './contacts-list-detail.html';

describe('Contacts-list-detail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactsListDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactsListDetailController();
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
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContactsListDetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContactsListDetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContactsListDetailController);
    });
  });
});
