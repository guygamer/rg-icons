/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'rg-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rg-deluge': '&#xe609;',
		'rg-qbittorrent': '&#xe60a;',
		'rg-transmission': '&#xe60b;',
		'rg-utorrent': '&#xe60c;',
		'rg-btn': '&#xe600;',
		'rg-getstrike': '&#xe601;',
		'rg-htpc': '&#xe602;',
		'rg-ka': '&#xe603;',
		'rg-kodi': '&#xe604;',
		'rg-norbits': '&#xe605;',
		'rg-nzbget': '&#xe606;',
		'rg-sabnzbd': '&#xe607;',
		'rg-yts': '&#xe608;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rg-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
