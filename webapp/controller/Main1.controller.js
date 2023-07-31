sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        var iTimeoutId;

        return Controller.extend("dummy.controller.Main1", {
            onInit: function () {

            },
            onHelloPress: function () {
                let text = this.getView().byId("INP1").getValue();
                if (text != '') {
                    MessageToast.show(text);
                }
                else {
                    MessageToast.show("Hello");
                };


                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                //let sTitle = this.getView().getModel().getProperty("Title");
                let Dumm = oBundle.getText("dummy");
                let Title = oBundle.getText("title");
                let Vari = oBundle.getText("variable", [text])
                MessageBox.show(Title + " " + Vari);

            },

            onFragPress: function () {
                if (!this._pBusyDialog) {
                    this._pBusyDialog = this.loadFragment({
                        name: "dummy.fragment.Frag1"
                    });
                }

                this._pBusyDialog.then(function(oBusyDialog){
                    oBusyDialog.open();
                    this.simulateServerRequest();
                });
            },

            simulateServerRequest: function () {
                iTimeoutId = setTimeout(function() {
                    this._pBusyDialog.then(function(oBusyDialog) {
                        oBusyDialog.close();
                    });
                }.bind(this), 30);
            },

        });

    });
