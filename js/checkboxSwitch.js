const switchInput = document.getElementById('flexSwitchCheckChecked');
const daystokeepbkpfileInput = document.getElementById('daystokeepbkpfileInput');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        daystokeepbkpfileInput.disabled = false;
        daystokeepbkpfileInput.setAttribute('required', '');
    } else {
        daystokeepbkpfileInput.disabled = true;
        daystokeepbkpfileInput.removeAttribute('required');
    }
});

daystokeepbkpfileInput.addEventListener('input', function() {
    if (daystokeepbkpfileInput.value <= 0) {
        daystokeepbkpfileInput.setCustomValidity('Please enter a value greater than 0.');
    } else {
        daystokeepbkpfileInput.setCustomValidity('');
    }
});


function toggleInfo() {
    var infoContent = document.getElementById("infoContent");
    if (infoContent.style.display === "block") {
        infoContent.style.display = "none";
    } else {
        infoContent.style.display = "block";
    }
}

function copyColumnContent() {
    var column = document.querySelector('.column');
    var content = column.innerText;
    navigator.clipboard.writeText(content)
        .then(() => {
            alert('Column content copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}