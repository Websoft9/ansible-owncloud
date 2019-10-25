(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{214:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("We collect the most common troubleshooting of using ownCloud for your reference:")]),e._v(" "),r("blockquote",[r("p",[e._v("Many troubleshooting is closely related to the Server, if you can confirm troubleshooting is related to Cloud Platform, please refer to "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Platform Documentation"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"owncloud-redirects-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#owncloud-redirects-error","aria-hidden":"true"}},[e._v("#")]),e._v(" ownCloud Redirects Error")]),e._v(" "),r("p",[e._v("Check your "),r("code",[e._v(".htaccess")]),e._v(" file in your application root directory, make sure there not any cycle redirects settings")]),e._v(" "),r("h4",{attrs:{id:"database-service-could-not-be-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-service-could-not-be-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Database service could not be started?")]),e._v(" "),r("p",[e._v("Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started")]),e._v(" "),r("p",[e._v("It is recommended to first check through the command.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# restart mysql service\nsystemctl restart mysql\n\n# view disk space\ndf -lh\n\n# view memory rate\nfree -lh\n")])])]),r("h4",{attrs:{id:"phpmyadmin-page-access-blank"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-page-access-blank","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin page access blank?")]),e._v(" "),r("p",[e._v("Please try another browser, such as chrome or firefox. If the phpMyAdmin can be opened normally before, and now appears to be incomplete or blank, it is recommended to clean up the browser cache, cookies and other information")]),e._v(" "),r("h4",{attrs:{id:"phpmyadmin-timeout-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-timeout-errors","aria-hidden":"true"}},[e._v("#")]),e._v(" PhpMyAdmin Timeout Errors")]),e._v(" "),r("p",[e._v("If you try to import a zipped database, you might see a timeout error because phpMyAdmin takes too long to execute the script.To fix this:")]),e._v(" "),r("ul",[r("li",[e._v("Set the max_execution_time of "),r("code",[e._v("php.ini")]),e._v(" to larger value")]),e._v(" "),r("li",[e._v("Try to import the file again.")])]),e._v(" "),r("p",[e._v("Remember to change the ExecTimeLimit setting back to its original value once the import process ends.")]),e._v(" "),r("h4",{attrs:{id:"website-pictures-loading-very-slowly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#website-pictures-loading-very-slowly","aria-hidden":"true"}},[e._v("#")]),e._v(" Website pictures loading very slowly?")]),e._v(" "),r("p",[e._v("Please make sure that your brandwith of Server is more than 5M")]),e._v(" "),r("h4",{attrs:{id:"apache-httpd-service-restart-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-service-restart-error","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache httpd service restart error")]),e._v(" "),r("p",[e._v("Please make sure the vhost.conf is correct for you, and you can track and analyze log files from "),r("em",[e._v("/var/log/httpd")])])])},[],!1,null,null,null);t.default=o.exports}}]);