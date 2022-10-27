"use strict";
exports.__esModule = true;
exports.ChangeShowSourcePerPage = void 0;
function ChangeShowSourcePerPage(options, event) {
    options.showPerPage = event;
    options.source.setPaging(1, options.showPerPage);
}
exports.ChangeShowSourcePerPage = ChangeShowSourcePerPage;
