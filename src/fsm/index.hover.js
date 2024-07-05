const StateMachine = require("javascript-state-machine");

const fsm = new StateMachine({
  init: "show",
  transitions: [
    {
      name: "show",
      from: "hide",
      to: "show",
    },
    {
      name: "hide",
      from: "show",
      to: "hide",
    },
  ],
  methods: {
    onShow: function () {
      console.log("I am showing");
    },
    onHide: function () {
      console.log("I am hiding");
    },
  },
});

fsm.hide();
console.log(fsm.state);
