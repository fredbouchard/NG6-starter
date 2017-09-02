//contacts.svc.js
const contactsService = $http => {
  let data = [];

  const get = () => {
    return $http.get('/app/data/contacts.json')
      .then(resp => data = resp.data)
      .catch(e => {
        console.error('Fail to get data', e);
      });
  };

  return {get};
};

//Inject $http provider for minification.
contactsService.$inject = ['$http'];

//export contactsService module after injection.
export {contactsService};
