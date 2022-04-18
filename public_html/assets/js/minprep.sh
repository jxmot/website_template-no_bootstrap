#!/bin/bash
# This script will combine all of the utilized JS
# files into a single JS file. 
#
# NOTE: This file should be customized for the site 
# where not all, or more than the usual JS files 
# are used. Edit as needed...
cat utils.js cookies.js getbrowser.js nobs-images.js nobs-logo.js nobs-devdebug.js splash.js nobs.js nobs-contact.js nobs-lightbox.js totop.js > nobs.all.js
ls -la nobs.all.js
# Online minimizers NOT to use - 
#   https://datayze.com/minifier : fails simple stuff, including html tags inside of comments
