const {JSX} = require('mana')

const Checkbox = params =>
  <input type='checkbox'
         checked={params.cursor.value}
         onClick={toggle}
         {...params}/>

function toggle(event) {
  this.params.cursor.update(!this.params.checked)
  event.preventDefault()
}

export default Checkbox
