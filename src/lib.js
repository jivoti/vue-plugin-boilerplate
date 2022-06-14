import VCustomPlugin from './components/VCustomPlugin'

// Declare install function executed by Vue.use()
function install(Vue, options) {
  // Don't install more than once
  if (install.installed) {
    return
  }

  install.installed = true

  // Override default options
  for (let k in options) {
    if (VCustomPlugin.props.hasOwnProperty(k)) {
      VCustomPlugin.props[k].default = options[k]
    }
  }

  // Register component
  Vue.component(VCustomPlugin.props.tagName.default, VCustomPlugin)
}

export default {
  install
}
