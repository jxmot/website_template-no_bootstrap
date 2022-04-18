#!/bin/bash
# This script will combine all of the utilized CSS
# files into a single CSS file. 
#
# NOTE: This file should be customized for the site 
# where not all, or more than the usual CSS files 
# are used. Edit as needed...
cat reseter.css nobs-palettes.css nobs-default.css splash.css cookies.css nobs.css nobs-totop.css nobs-gallery.css nobs-contact.css nobs-lightbox.css > nobs.all.css
ls -la nobs.all.css
# Online minimizers NOT to use - 
#   https://datayze.com/minifier - seems OK for css, but not JS!
