/*
    Utility functions: a generic collection that isn't specific 
    to the context of its use.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// look for a specifc query parameter, and if it exists
// return its value.
function getQueryParam(param) {
    var arg = null;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param === item.split("=")[0]) {
            arg = item.split("=")[1];
        }
    });
    return ((arg === undefined) || (arg === '') ? null : arg);
};
