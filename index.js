"use strict";

if (location.protocol === 'http:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

const {
  Fragment,
  useRef,
  useState,
  StrictMode
} = React;

function getPage(page, setPage) {
  if (page) {
    return /*#__PURE__*/React.createElement(Calculator, {
      type: page,
      home: setPage
    });
  }

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Selecciona un modo"), /*#__PURE__*/React.createElement("div", {
    id: "buttons"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('hypotenuse')
  }, "Calcular hipotenusa"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('area')
  }, "Calcular \xE1rea")));
}

function calculate(x, y, type) {
  if (!x || !y) return null;

  if (type === 'hypotenuse') {
    return `La hipotenusa es ${Math.sqrt(x ** 2 + y ** 2)}`;
  }

  return `El área es ${x * y / 2}`;
}

const NumberInput = ({
  children,
  callback
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, children), /*#__PURE__*/React.createElement("input", {
  onChange: event => callback(event.target.value),
  type: "number",
  min: "0"
}));

const Calculator = ({
  home,
  type
}) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Calcular ", type === 'hypotenuse' ? 'hipotenusa' : 'área'), /*#__PURE__*/React.createElement(NumberInput, {
    callback: setX
  }, "Introduce la base"), /*#__PURE__*/React.createElement(NumberInput, {
    callback: setY
  }, "Introduce la altura"), /*#__PURE__*/React.createElement("h3", null, calculate(x, y, type)), /*#__PURE__*/React.createElement("button", {
    onClick: () => home()
  }, "Atr\xE1s"));
};

const App = () => {
  const [page, setPage] = useState();
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Calculareas"), getPage(page, setPage));
};

ReactDOM.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));