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
    _this.addUserList = _this.addUserList.bind(_assertThisInitialized(_this));
    _this.deleteUser = _this.deleteUser.bind(_assertThisInitialized(_this));
    _this.state = {
      userList: ['张三', '李四', '王五']
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: "addUserList",
    value: function addUserList(uName) {
      //做一个验证
      if (uName === '') {
        return '输入的内容不能为空！';
      } else if (this.state.userList.includes(uName)) {
        return '输入的内容重复，请重新输入！';
      } else {
        this.setState(function (pre) {
          return {
            userList: pre.userList.concat([uName])
          };
        });
      }
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(i) {
      this.setState(function (pre) {
        return {
          userList: pre.userList.filter(function (item, index) {
            return i !== index;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(List, {
        userList: this.state.userList,
        deleteUser: this.deleteUser
      }), React.createElement(AddUser, {
        addUserList: this.addUserList
      }));
    }
  }]);

  return MyApp;
}(React.Component);

var List = function List(props) {
  return React.createElement("div", null, React.createElement("ul", null, //其中注意的是 onClick 中返回的是个函数如果直接写就执行返回的是执行的结果 
  props.userList.map(function (item, index) {
    return React.createElement("li", {
      key: index
    }, React.createElement("span", null, item), React.createElement("button", {
      onClick: function onClick() {
        props.deleteUser(index);
      }
    }, " x "));
  })));
};

var AddUser =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddUser, _React$Component2);

  function AddUser(props) {
    var _this2;

    _classCallCheck(this, AddUser);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddUser).call(this, props));
    _this2.FormAddUser = _this2.FormAddUser.bind(_assertThisInitialized(_this2)); //注意

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddUser, [{
    key: "FormAddUser",
    value: function FormAddUser(e) {
      e.preventDefault(); //注意

      var uName = e.target.elements.userName.value; //注意

      var error = this.props.addUserList(uName); //注意

      this.setState(function () {
        return {
          error: error //验证  注意

        };
      });
      e.target.elements.userName.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.FormAddUser
      }, React.createElement("input", {
        type: "text",
        name: "userName",
        autoComplete: "off"
      }), React.createElement("button", null, "addUser")));
    }
  }]);

  return AddUser;
}(React.Component);

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('app'));