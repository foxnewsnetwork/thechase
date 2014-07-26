class Thechase.ApplicationRoute extends Ember.Route
  renderTemplate: ->
    @_super()
    @render 'header',
      outlet: 'header'
      into: 'application'