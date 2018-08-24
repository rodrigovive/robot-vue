export default {
  bind: (element, binding) => {
    if (binding.arg !== 'position') return;
    element.style.position = 'absolute';
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    // Object.keys()
  },
};
