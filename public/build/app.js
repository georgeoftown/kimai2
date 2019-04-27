(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"+jAj":function(t,e,a){},"/0Im":function(t,e,a){(function(t,e){
/*!
 * This file is part of the Kimai time-tracking app.
 *
 * Main JS application file for Kimai 2. This file should be included in all pages.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
if(void 0===t)throw new Error("Kimai requires jQuery");if("undefined"==typeof moment)throw new Error("Kimai requires moment.js");e.kimai={},e(function(){"use strict";e.kimai={init:function(t){void 0!==t&&(e.kimai.settings=e.extend({},e.kimai.defaults,t)),moment.locale(e.kimai.settings.locale),e(".dropdown-toggle").dropdown(),setTimeout(function(){e("div.alert-success").alert("close")},5e3),this.activateDateRangePicker(".content-wrapper"),this.activateDatePicker(".content-wrapper"),this.activateDateTimePicker(".content-wrapper"),this.activateAjaxFormInModal("a.modal-ajax-form"),e("body").on("change","select[data-related-select]",function(t){var a=e(this).attr("data-api-url").replace("-s-",e(this).val()),i=e(this).attr("data-related-select");e.ajax({url:a,headers:{"X-AUTH-SESSION":!0,"Content-Type":"application/json"},method:"GET",dataType:"json",success:function(t){var a="#"+i,n=e(a),o=e(a+' option[value=""]');n.find("option").remove().end().find("optgroup").remove().end(),0!==o.length&&n.append('<option value="">'+o.text()+"</option>"),e.each(t,function(t,e){n.append('<option value="'+e.id+'">'+e.name+"</option>")}),n.trigger("change"),e(".selectpicker").selectpicker("refresh")}})})},reloadDatatableWithToolbarFilter:function(){var t=e(".toolbar form");e("section.content").append('<div class="overlay"><i class="fas fa-sync fa-spin"></i></div>'),e.ajax({url:t.attr("action"),type:t.attr("method"),data:t.serialize(),success:function(t){e("section.content").replaceWith(e(t).find("section.content"))},error:function(e,a){t.submit()}})},pauseRecord:function(t){e(t+" .pull-left i").hover(function(){var t=e(this).parents("a");t.attr("href",t.attr("href").replace("/stop","/pause")),e(this).removeClass("fa-stop-circle").addClass("fa-pause-circle").addClass("text-orange")},function(){var t=e(this).parents("a");t.attr("href",t.attr("href").replace("/pause","/stop")),e(this).removeClass("fa-pause-circle").removeClass("text-orange").addClass("fa-stop-circle")})},activateDatePicker:function(t){e(t+' input[data-datepickerenable="on"]').each(function(t){var a=e(this).data("format");e(this).daterangepicker({singleDatePicker:!0,showDropdowns:!0,autoUpdateInput:!1,locale:{format:a,firstDay:1,applyLabel:e.kimai.settings.apply,cancelLabel:e.kimai.settings.cancel,customRangeLabel:e.kimai.settings.customRange}}),e(this).on("apply.daterangepicker",function(t,i){e(this).val(i.startDate.format(a)),e(this).trigger("change")})})},activateDateTimePicker:function(t){e(t+' input[data-datetimepicker="on"]').each(function(t){var a=e(this).data("format");e(this).daterangepicker({singleDatePicker:!0,timePicker:!0,timePicker24Hour:e.kimai.settings.twentyFourHours,showDropdowns:!0,autoUpdateInput:!1,locale:{format:a,firstDay:1,applyLabel:e.kimai.settings.apply,cancelLabel:e.kimai.settings.cancel,customRangeLabel:e.kimai.settings.customRange}}),e(this).on("apply.daterangepicker",function(t,i){e(this).val(i.startDate.format(a)),e(this).trigger("change")})})},activateDateRangePicker:function(t){e(t+' input[data-daterangepickerenable="on"]').each(function(t){var a=e(this).data("format"),i=e(this).data("separator"),n={};n[e.kimai.settings.today]=[moment(),moment()],n[e.kimai.settings.yesterday]=[moment().subtract(1,"days"),moment().subtract(1,"days")],n[e.kimai.settings.thisWeek]=[moment().startOf("week"),moment().endOf("week")],n[e.kimai.settings.lastWeek]=[moment().subtract(1,"week").startOf("week"),moment().subtract(1,"week").endOf("week")],n[e.kimai.settings.thisMonth]=[moment().startOf("month"),moment().endOf("month")],n[e.kimai.settings.lastMonth]=[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")],n[e.kimai.settings.thisYear]=[moment().startOf("year"),moment().endOf("year")],n[e.kimai.settings.lastYear]=[moment().subtract(1,"year").startOf("year"),moment().subtract(1,"year").endOf("year")],e(this).daterangepicker({showDropdowns:!0,autoUpdateInput:!1,autoApply:!1,linkedCalendars:!1,locale:{separator:i,format:a,firstDay:1,applyLabel:e.kimai.settings.apply,cancelLabel:e.kimai.settings.cancel,customRangeLabel:e.kimai.settings.customRange},ranges:n,alwaysShowCalendars:!0}),e(this).on("apply.daterangepicker",function(t,i){e(this).val(i.startDate.format(a)+" - "+i.endDate.format(a)),e(this).trigger("change")})})},ajaxFormInModal:function(t){var a="#remote_form_modal .modal-content form",i=e(a),n=e("#remote_form_modal");i.off("submit"),e(t).find("#form_modal .modal-content").length>0&&(n.on("hidden.bs.modal",function(){n.hasClass("modal-danger")&&n.removeClass("modal-danger")}),e(t).find("#form_modal").hasClass("modal-danger")&&n.addClass("modal-danger"),e("#remote_form_modal .modal-content").replaceWith(e(t).find("#form_modal .modal-content")),e.kimai.activateDateTimePicker(a)),e(t).find("div.alert-error").length>0&&e("#remote_form_modal .modal-body").prepend(e(t).find("div.alert-error"));var o=e.fn.modal.Constructor.prototype.enforceFocus;e.fn.modal.Constructor.prototype.enforceFocus=function(){},n.on("hidden.bs.modal",function(){e.fn.modal.Constructor.prototype.enforceFocus=o}),n.on("shown.bs.modal",function(){e(this).find("input[type=text],textarea,select").filter(':not("[data-datetimepicker=on]")').filter(":visible:first").focus().delay(1e3).focus()}),n.modal("show"),(i=e(a)).on("submit",function(t){var o=e(a+" button[type=submit]").button("loading");t.preventDefault(),t.stopPropagation(),e.ajax({url:i.attr("action"),type:i.attr("method"),data:i.serialize(),success:function(t){o.button("reset");var a=e(t).find("#form_modal .modal-content .has-error").length>0,i=e(t).find("#form_modal .modal-content ul.list-unstyled li.text-danger").length>0,r=e(t).find("div.alert-error").length>0;return a||i||r?e.kimai.ajaxFormInModal(t):(e.kimai.reloadDatatableWithToolbarFilter(),n.modal("hide")),!1},error:function(t,e){i.submit()}})})},activateAjaxFormInModal:function(t){e("body").on("click",t,function(t){t.preventDefault(),t.stopPropagation(),e.ajax({url:e(this).attr("href"),success:function(t){e.kimai.ajaxFormInModal(t)},error:function(t,a){window.location=e(this).attr("href")}})})}},e.kimai.defaults={locale:"en",today:"Today",yesterday:"Yesterday",apply:"Apply",cancel:"Cancel",thisWeek:"This week",lastWeek:"Last week",thisMonth:"This month",lastMonth:"Last month",thisYear:"This year",lastYear:"Last year",customRange:"Custom range",twentyFourHours:!0},e.kimai.settings={}})}).call(this,a("EVdn"),a("EVdn"))},"1Wo5":function(t,e,a){(function(t){var e=a("EVdn");t.$=t.jQuery=e,a("MIQu"),a("VSY+"),a("Onkx"),a("DPhY");var i=a("wd/R");t.moment=i,a("tGlX"),a("bpih"),a("nyYc"),a("iYuL"),a("lXzo"),a("jnO4"),a("WxRl"),a("0tRk"),a("eHjp"),a("+jAj"),a("Qiut"),a("vh7O"),a("WySY"),t.$.AdminLTE={},t.$.AdminLTE.options={},a("qG+3"),a("GXK2"),a("NlKh"),a("/0Im"),a("x5RX"),a("UlZr"),a("ImJF"),a("mW8F")}).call(this,a("yLpj"))},GXK2:function(t,e){t.exports="/build/images/default_avatar.png?fc197350"},ImJF:function(t,e){t.exports="/build/images/default_avatar.png?fc197350"},NlKh:function(t,e,a){},UlZr:function(t,e,a){(function(t){t(document).ready(function(){t("body").on("click","div.navigation ul.pagination li a",function(e){var a=t(".toolbar form input[name='page']");if(0!==a.length){e.preventDefault(),e.stopPropagation();var i=t(this).attr("href").split("/"),n=i[i.length-1];return a.val(n),a.trigger("change"),!1}}),t(".toolbar form input").change(function(e){switch(e.target.id){case"page":break;default:t(".toolbar form input#page").val(1)}t.kimai.reloadDatatableWithToolbarFilter()}),t(".toolbar form select").change(function(e){var a=!0;switch(e.target.id){case"customer":t(".toolbar form select#project").length>0&&(a=!1);break;case"project":t(".toolbar form select#activity").length>0&&(a=!1)}t(".toolbar form input#page").val(1),a&&t.kimai.reloadDatatableWithToolbarFilter()})})}).call(this,a("EVdn"))},WySY:function(t,e,a){},mW8F:function(t,e){t.exports="/build/images/signature.png?5f58501e"},x5RX:function(t,e,a){(function(t,e,i){if(t.Cookies=a("p46w"),void 0===e)throw new Error("Kimai requires jQuery");i.datatable={},i(function(){"use strict";i.datatable={saveVisibility:function(t){i(t).find("form").each(function(){var t={},a=i(this).attr("name");i(this).find("input:checkbox").each(function(){t[i(this).attr("name")]=i(this).is(":checked")}),e.isEmptyObject(t)?Cookies.remove(a):Cookies.set(a,JSON.stringify(t),{expires:365})}),i(t).modal("toggle"),i.kimai.reloadDatatableWithToolbarFilter()},resetVisibility:function(t){i(t).find("form").each(function(){var t=i(this).attr("name");Cookies.remove(t)}),i(t).modal("toggle"),i.kimai.reloadDatatableWithToolbarFilter()},changeVisibility:function(t){var e=i("table.dataTable"),a=e.find("th").length-1;if(!(t<0||t>=a)){var n=i(e.find("th").get(t));"none"===n.css("display")?(n.show("ease"),e.find("tr").each(function(){i(i(this).find("td").get(t)).show("ease")})):(n.hide("ease"),e.find("tr").each(function(){i(i(this).find("td").get(t)).hide("ease")}))}}}})}).call(this,a("yLpj"),a("EVdn"),a("EVdn"))}},[["1Wo5","runtime",0,1]]]);