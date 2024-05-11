const switchInput = document.getElementById('flexSwitchCheckChecked');
const daystokeepbkpfileInput = document.getElementById('daystokeepbkpfileInput');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        daystokeepbkpfileInput.disabled = false;
    } else {
        daystokeepbkpfileInput.disabled = true;
    }
});