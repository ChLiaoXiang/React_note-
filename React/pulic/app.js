"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MyApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    _this.DeleteAll = _this.DeleteAll.bind(_assertThisInitialized(_this));
    _this.DiceRoll = _this.DiceRoll.bind(_assertThisInitialized(_this));
    _this.AddOptions = _this.AddOptions.bind(_assertThisInitialized(_this));
    _this.handRemove = _this.handRemove.bind(_assertThisInitialized(_this));
    _this.state = {
      options: ['张三', '李四', '王五']
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: "DeleteAll",
    value: function DeleteAll() {
      this.setState(function (pre) {
        // pre 上一个数据
        return {
          options: []
        };
      });
    }
  }, {
    key: "DiceRoll",
    value: function DiceRoll() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: "AddOptions",
    value: function AddOptions(option) {
      var _this2 = this;

      if (option == "") {
        return "输入得内容不能为空！";
      } else if (this.state.options.includes(option)) {
        return "输入得信息不能重复！ 请检查后输入。";
      } else {
        this.setState(function () {
          return {
            options: _this2.state.options.concat([option])
          };
        });
      }
    }
  }, {
    key: "handRemove",
    value: function handRemove(index) {
      this.setState(function (pre) {
        return {
          options: pre.options.filter(function (val, i) {
            return i !== index;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Head, null), React.createElement(Btns, {
        DeleteAll: this.DeleteAll,
        DiceRoll: this.DiceRoll,
        disaBled: this.state.options.length > 0 ? false : true
      }), React.createElement(Options, {
        options: this.state.options,
        handRemove: this.handRemove
      }), React.createElement(FormOption, {
        AddOptions: this.AddOptions
      }));
    }
  }]);

  return MyApp;
}(React.Component); //头部组件


var Head =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Head, _React$Component2);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, _getPrototypeOf(Head).apply(this, arguments));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "This is My React Demo !!! "), React.createElement("h2", null, "Determination to learn !!! "), React.createElement("hr", null));
    }
  }]);

  return Head;
}(React.Component); //按钮组


var Btns =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Btns, _React$Component3);

  function Btns() {
    _classCallCheck(this, Btns);

    return _possibleConstructorReturn(this, _getPrototypeOf(Btns).apply(this, arguments));
  }

  _createClass(Btns, [{
    key: "render",
    value: function render() {
      console.log(this);
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.props.DeleteAll
      }, " DeleteAll "), React.createElement("button", {
        onClick: this.props.DiceRoll,
        disabled: this.props.disaBled
      }, " DiceRoll "));
    }
  }]);

  return Btns;
}(React.Component); // 函数是的方式会加载的更快！


var Options = function Options(props) {
  return React.createElement("div", null, props.options.length === 0 && React.createElement("p", null, "\u8BF7\u6DFB\u52A0\u4E00\u4E2A\u9009\u9879"), React.createElement("ul", null, props.options.map(function (item, index) {
    return React.createElement("li", {
      key: index
    }, React.createElement("span", null, item, " "), React.createElement("button", {
      onClick: function onClick() {
        props.handRemove(index);
      }
    }, " remove "));
  })));
};

var FormOption =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(FormOption, _React$Component4);

  function FormOption(props) {
    var _this3;

    _classCallCheck(this, FormOption);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(FormOption).call(this, props));
    _this3.formAddOption = _this3.formAddOption.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(FormOption, [{
    key: "formAddOption",
    value: function formAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      var error = this.props.AddOptions(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.formAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option",
        autoComplete: "off"
      }), React.createElement("button", null, " AddOption ")));
    }
  }]);

  return FormOption;
}(React.Component);

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('app'));