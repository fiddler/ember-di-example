import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveWidget() {
      this.store.createRecord('widget', this.getProperties('title','value'));
      this.setProperties({
        title: '',
        value: ''
      });
    }
  }
});
