var VirtualNode = require('create/node')

function Checkbox(cursor){
  if (!(this instanceof Checkbox)) return new Checkbox(cursor)
  this.cursor = cursor
  this.properties = {
    checked: cursor.value,
    className: 'toggle',
    type: 'checkbox'
  }
}

Checkbox.prototype = Object.create(VirtualNode.prototype, {
  constructor: {value: Checkbox},
  tagName: {value: 'input'},
  events: {value: {click: toggle}}
})

function toggle(event){
  this.cursor.update(!this.cursor.value)
  event.preventDefault()
}

module.exports = Checkbox

