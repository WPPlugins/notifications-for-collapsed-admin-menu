function c2c_maybe_highlight_comments_icon() {
	var target = jQuery('.awaiting-mod:first .pending-count');
	if (! target.length)
		return;
	var parent = target.parents('#menu-comments');
	var css_class = 'collapsed-with-pending';
	var i = target.text();

	i > 0 ?
		parent.addClass(css_class) :
		parent.removeClass(css_class);
}
function c2c_maybe_highlight_plugins_icon() {
	var target = jQuery('.plugin-count:first');
	var parent = target.parents('#menu-plugins');
	var css_class = 'collapsed-with-pending';
	var i = target.text();

	i > 0 ?
		parent.addClass(css_class) :
		parent.removeClass(css_class);
}
function c2c_maybe_highlight() {
	c2c_maybe_highlight_comments_icon();
	c2c_maybe_highlight_plugins_icon();
}
jQuery(document).ready(function($) {
	c2c_maybe_highlight();
	$('#awaiting-mod').ajaxSuccess(function() {
		setTimeout('c2c_maybe_highlight()', 1000);
	});
});