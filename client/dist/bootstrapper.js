System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('resources/index');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBQWdCLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQ3BCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUU3QixXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDeEMiLCJmaWxlIjoiYm9vdHN0cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==