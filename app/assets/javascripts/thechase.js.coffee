#= require_tree ./mixins
#= require_tree ./controllers
#= require_tree ./templates
#= require_tree ./routes
#= require_tree ./models
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./components
#= require ./router



Thechase.ApplicationStore = DS.Store.extend
  # Override the default adapter with the `DS.ActiveModelAdapter` which
  # is built to work nicely with the ActiveModel::Serializers gem.
  adapter: DS.ActiveModelAdapter