sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'dummy/model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
"use strict";


return Controller.extend("dummy.controller.Table", {
    formatter: formatter,

    onInit: function () {
        // set explored app's demo model on this sample
        var oViewModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(oViewModel, "view");
        //this.getView().
    },
    onFilterProduct: function(oEvent){
       var aFilter = [];
       var sQuery = oEvent.getParameter("query");
       if (sQuery) {
            aFilter.push(new Filter("ProductId", FilterOperator.Contains, sQuery));
       }

       var oList = this.byId("idTable");
       var oBinding = oList.getBinding("items");
       oBinding.filter(aFilter);
    },

    onItemClick: function(oEvent){
        var oItem = oEvent.getSource();
        var oRouter = this.getOwnerComponent().getRouter();

        oRouter.navTo("detail", {
            productPath: window.encodeURIComponent(oItem.getBindingContext("product").getPath().substr(1))
        });
    }
});

});