sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "../model/formatter"
    ],
    function(BaseController, formatter) {
      "use strict";
  
      return BaseController.extend("dummy.controller.App", {
        formatter: formatter,
        onInit() {
        }
      });
    }
  );
  