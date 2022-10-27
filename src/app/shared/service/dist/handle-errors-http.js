"use strict";
exports.__esModule = true;
exports.HandleErrorsHttp = void 0;
var rxjs_1 = require("rxjs");
var HandleErrorsHttp = /** @class */ (function () {
    function HandleErrorsHttp() {
    }
    // ERROR MSG
    HandleErrorsHttp.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('(Handle Error en service) An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            alert(error.error.Message);
            console.error("Backend returned code " + error.status + " " + error.statusText + ", " +
                ("body was: " + error.error));
        }
        // Return an observable with a user-facing error message.
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    return HandleErrorsHttp;
}());
exports.HandleErrorsHttp = HandleErrorsHttp;
