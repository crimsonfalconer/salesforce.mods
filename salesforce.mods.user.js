// ==UserScript==
// @name         Salesforce.Mods
// @namespace    https://github.com/crimsonfalcon/salesforce.mods
// @version      2
// @description  Salesforce.Mods
// @author       Mark Harvey
// @include      https://*.salesforce.com/0052800*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL       https://github.com/crimsonfalconer/salesforce.mods/raw/master/salesforce.mods.user.js
// @downloadURL     https://github.com/crimsonfalconer/salesforce.mods/raw/master/salesforce.mods.user.js
// @updateVersion   2
// @homepageURL     https://github.com/crimsonfalconer/salesforce.mods
// @supportURL      https://github.com/crimsonfalconer/salesforce.mods/issues
// ==/UserScript==

(function() {
    'use strict';
    console.log('Salesforce.Mods');
    $("input[name='assignLicenses']").after('<input id="RemoveAllLicenses" type="button" class="btn" value="Remove All Licenses">');
    $("#RemoveAllLicenses").click(RemoveAllPackageLicenses);
})();

function RemoveAllPackageLicenses()
{
    if( window.confirm('Are you sure you want to remove all package licenses for this user?'))
    {
        $("a[href*='deleteredirect.jsp'][title*='Remove']").each(function( index ) {
            console.log($(this).attr('title') + ' - ' + $(this).attr('href'));
            $.get($(this).attr('href'));
        });
    }
}
