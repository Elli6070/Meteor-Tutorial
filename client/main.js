import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.clicker.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.clicker.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.clicker.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  },
});
