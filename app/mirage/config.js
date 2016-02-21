export default function() {
this.get('/posts', function() {
  return {
    data: [{
      type: 'posts',
      id: 1,
      attributes: {
        id: 1,
        title: "Hello World!",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createAt: "2010-05-25T12:30:40.299Z"
      }
    },{
      type: 'posts',
      id: 2,
      attributes: {
        id:2,
        title: "ZAZAZAA",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createAt: "2010-05-25T12:30:40.299Z"
      }
    }]
  };
});


}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
// These comments are here to help you get started. Feel free to delete them.

/*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
*/
// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
  Route shorthand cheatsheet
*/
/*
  GET shorthands

  // Collections
  this.get('/contacts');
  this.get('/contacts', 'users');
  this.get('/contacts', ['contacts', 'addresses']);

  // Single objects
  this.get('/contacts/:id');
  this.get('/contacts/:id', 'user');
  this.get('/contacts/:id', ['contact', 'addresses']);
*/

/*
  POST shorthands

  this.post('/contacts');
  this.post('/contacts', 'user'); // specify the type of resource to be created
*/

/*
  PUT shorthands

  this.put('/contacts/:id');
  this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
*/

/*
  DELETE shorthands

  this.del('/contacts/:id');
  this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

  // Single object + related resources. Make sure parent resource is first.
  this.del('/contacts/:id', ['contact', 'addresses']);
*/

/*
  Function fallback. Manipulate data in the db via

    - db.{collection}
    - db.{collection}.find(id)
    - db.{collection}.where(query)
    - db.{collection}.update(target, attrs)
    - db.{collection}.remove(target)

  // Example: return a single object with related models
  this.get('/contacts/:id', function(db, request) {
    var contactId = +request.params.id;

    return {
      contact: db.contacts.find(contactId),
      addresses: db.addresses.where({contact_id: contactId})
    };
  });

*/
