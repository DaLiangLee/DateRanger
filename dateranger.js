// ==============================================================================
//
// This file is part of the Calendar picker.
//
// Create by Martin li <martinonlyone@outlook.com>
// Copyright (c) 2019-2029 martinonlyone@outlook.com
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//
// ==============================================================================

// offset
let currentWeek = 0;
let currentMonth = 0;
$(function () {
    // select change
    $('#btnChangeRanger').on('change', function () {
        var cVal = $(this).val();
        changeRanger(cVal);
    });
});

function changeRanger(cVal) {
    if (cVal == 0) {
        if (!$("#week_container").hasClass('hide')) {
            $("#week_container").addClass('hide');
        }
        if (!$("#month_container").hasClass('hide')) {
            $("#month_container").addClass('hide');
        }
        spliceUrl();
    } else if (cVal == 1) {
        // week
        if ($("#week_container").hasClass('hide')) {
            $("#week_container").removeClass('hide');
        }
        if (!$("#month_container").hasClass('hide')) {
            $("#month_container").addClass('hide');
        }
        changeWeek(0);
    } else if (cVal == 2) {
        // month
        if ($("#month_container").hasClass('hide')) {
            $("#month_container").removeClass('hide');
        }
        if (!$("#week_container").hasClass('hide')) {
            $("#week_container").addClass('hide');
        }
        // default display curent month
        changeMonth(0);
    }
}
// get last week
function getLastWeekDays() {
    currentWeek = currentWeek - 1;
    changeWeek(currentWeek);
}

// get next week
function getNextWeekDays() {
    currentWeek = currentWeek + 1;
    changeWeek(currentWeek);
}

// Month
function getLastMonth() {
    currentMonth = currentMonth - 1;
    changeMonth(currentMonth);
}

function getNextMonth() {
    currentMonth = currentMonth + 1;
    changeMonth(currentMonth);
}

function changeWeek(offset) {
    var date = getStartAndEndDays(offset, 'week');
    $('#reportrange span').html("<b>Week: </b>" + moment(date[0]).format('MMM D') + ' - ' + moment(date[1]).format(
        'MMM D YYYY'));
}

function changeMonth(offset) {
    var date = getStartAndEndDays(offset, 'month');
    var displayMonth = moment(date[0]).format("MMM YYYY");
    $('#month span').html("<b>Month:</b>" + displayMonth);
}

function getStartAndEndDays(offset, type) {
    // offset
    // type  week, month
    var starts = "";
    var ends = "";
    var date = [];
    if (offset > 0) {
        starts = moment().startOf(type).add(offset, type).toDate();
        ends = moment().endOf(type).add(offset, type).endOf(type).toDate();
    } else {
        starts = moment().startOf(type).subtract(Math.abs(offset), type).toDate();
        ends = moment().endOf(type).subtract(Math.abs(offset), type).endOf(type).toDate();
    }
    date.push(starts, ends);
    return date;

}