import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "AC"];
const operators = ['/', '*', '-', '+', "=", "."];
const operatorsId = ["divide", "multiply", "subtract", "add", "equals", "decimal"];
const ids = [
"zero",
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"clear"];


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id[this.props.index] };

  }
  render() {
    return /*#__PURE__*/React.createElement("button", { value: this.props.name, onClick: () => {this.props.handleClick(this.props.name);}, key: this.props.id, id: this.state.id }, this.props.name);
  }}
;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      numbers: numbers,
      ids: ids,
      operators: operators,
      operatorsId: operatorsId };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(arg) {
    const noRepeat = this.state.display[this.state.display.length - 1]; //not to repeat operators
    const argToString = arg.toString();

    if (typeof arg === typeof 1) {
      if (this.state.display == "0") {//if state is 0 it will change 
        return this.setState({ display: argToString });
      }
      this.setState({ display: this.state.display + argToString });
    } else if (arg == "AC") {
      this.setState({ display: "0" });
    } else if (noRepeat == "-" && typeof arg != "number") {
      return;
    } else if (/[\+\*\/]/.test(argToString) && /[\+\-\*\/]/.test(noRepeat)) {
      this.setState({ display: this.state.display.slice(0, -1) + argToString });
    } else if (arg == "+" && arg != noRepeat || arg == "-" && arg != noRepeat || arg == "*" && arg != noRepeat || arg == "/" && arg != noRepeat) {
      this.setState({ display: this.state.display + argToString });
    } else if (arg == "." && noRepeat != ".") {
      const splitted = this.state.display.split(/[\+\-\*\/]/);
      const last = splitted.slice(-1)[0];
      if (!last.includes(".")) {
        this.setState({ display: this.state.display + argToString });
      }
    } else if (arg == "=" && arg != noRepeat && this.state.display.length > 1) {
      this.setState({ display: eval(this.state.display) });
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.display), /*#__PURE__*/

      React.createElement("div", { id: "numberContainer" },
      this.state.numbers.map((arg, index) => /*#__PURE__*/React.createElement(Buttons, { handleClick: this.handleClick, index: index, id: this.state.ids, name: arg }))), /*#__PURE__*/

      React.createElement("div", { id: "opsContainer" },
      this.state.operators.map((arg, index) => /*#__PURE__*/React.createElement(Buttons, { handleClick: this.handleClick, index: index, id: this.state.operatorsId, name: arg })))));



  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));


/* es imistvs rom nishnebi sheicvalops sxva nishnis dawerisas 
else if(/[\+\*\/]/.test(argToString)&&/[\+\-\*\/]/.test(noRepeat)){
      
     this.setState({display:this.state.display.slice(0,-1)+argToString});
      
    }
*/