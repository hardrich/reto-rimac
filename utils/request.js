/**
 * By Richard Principe Quiroz
 * Validar y ejecutar parseo correcto
 */
const parseWith = (parser) => (text) => {
  if (!parser) {
    throw new Error('parser');
  }

  if (!text) {
    throw new Error('text');
  }
  return parser(text);
};

module.exports = {
  parseWith
};
