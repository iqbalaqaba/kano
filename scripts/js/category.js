// RANGE SETTING
let rangeInput = document.getElementById("range-budget-input");
let rangeValue = document.getElementById("range-budget-value");
let rangeProgress = document.getElementById("range-budget-progress");
let rangeLength = document.getElementById("range-budget-length").innerText.length;
rangeValue.innerHTML = rangeInput.value;
rangeProgress.style.width = `${rangeInput.value / 10}%`;
rangeInput.oninput = function() {
    rangeValue.innerHTML = this.value;
    rangeProgress.style.width = `${this.value / 10}%`;
}

// SELECT BOX CATEGORY
$('#form-aside label').on('click', function() {
    if($(this).prev().prop('checked') === true) {
        $(this).find('.form-custom-checkbox-box').removeClass('checkbox-box-active');
    } else {
        $(this).find('.form-custom-checkbox-box').addClass('checkbox-box-active');
    }
});