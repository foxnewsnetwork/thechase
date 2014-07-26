// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets//sprockets-directives) for details
// about supported directives.
//
//= require underscore
//= require jquery
//= require jquery_ujs
//= require jquery.ui.effect.all
//= require timeago/jquery.timeago
//= require jquery_typeahead
//= require foundation
//= require modernizr
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./thechase

// for more details see: http://emberjs.com/guides/application/
Thechase = Ember.Application.create();
$(document).foundation();
$(document).ready( function() { $(".no-script").hide(); } ) ;