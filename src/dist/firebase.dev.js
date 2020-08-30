"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCjjIcwCn5F6gCXOCST4fPATdTEHvR99wY",
  authDomain: "ig-reels-clone-e2b44.firebaseapp.com",
  databaseURL: "https://ig-reels-clone-e2b44.firebaseio.com",
  projectId: "ig-reels-clone-e2b44",
  storageBucket: "ig-reels-clone-e2b44.appspot.com",
  messagingSenderId: "861898663874",
  appId: "1:861898663874:web:ce985ce8695c23c4f6585b",
  measurementId: "G-GK9WEDF4MH"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();
var _default = db;
exports["default"] = _default;