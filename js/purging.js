function submitForm() {
    // Get the value of the input field
    var filenamevalue = document.getElementById("filenameInput").value;
    var daystokeepbkpfileValue = document.getElementById("daystokeepbkpfileInput").value;
    var lopathValue = document.getElementById("lopathInput").value;
    var logbkppathValue = document.getElementById("logbkppathInput").value;


    //

    var formContent0 = "<p>#!/bin/bash<br><br>" +
        "#### Your Configurations #### <br>" +
        "curdate=$(date '+%Y-%m-%d %H:%M:%S')<br>" +
        "date1=$(date -d '-1 day' '+%Y%m%d') # Change the time format according to your file name<br>" +
        'logName="' + filenamevalue + '"<br>' +
        'logDir="' + lopathValue + '"<br>' +
        'logBkpDir="' + logbkppathValue + '"<br><br>' +
        'logs=$logName$date1*<br>' +
        'compressName="$logName$date1.tgz"<br>' +
        '#### Compressing Logs ####<br>' +
        'cd "$logDir"<br>' +
        'fileCount=$(ls -l $logs 2>/dev/null | wc -l)<br>' +
        'if [[ $fileCount -gt 0 ]]; then<br>' +
        '   echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Compress Process Started"<br>' +
        '   tar -cvzf "$compressName" $logs && {<br>' +
        '        wait<br>' +
        '        mv "$compressName" "$logBkpDir"<br>' +
        '        rm $logs<br>' +
        '   echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Process Completed"<br>' +
        '} || echo "Compression failed"<br>' +
        'else<br>' +
        'echo "No Files to compress"<br>' +
        'fi<br><br>'
        ;

    var formContent1 = "<p>#!/bin/bash<br><br>" +
        "#### Your Configurations #### <br>" +
        "curdate=$(date '+%Y-%m-%d %H:%M:%S')<br>" +
        "date1=$(date -d '-1 day' '+%Y%m%d') # Change the time format according to your file name<br>" +
        "date" + daystokeepbkpfileValue + "=$(date -d '-" + daystokeepbkpfileValue + " day' '+%Y%m%d') # Change the time format according to your file name<br>" +
        'logName="' + filenamevalue + '"<br>' +
        'logDir="' + lopathValue + '"<br>' +
        'logBkpDir="' + logbkppathValue + '"<br><br>' +
        'logs=$logName$date1*<br>' +
        'compressName="$logName$date1.tgz"<br>' +
        'bkpLogs=$logName$date' + daystokeepbkpfileValue + '*<br><br>' +
        '#### Compressing Logs ####<br>' +
        'cd "$logDir"<br>' +
        'fileCount=$(ls -l $logs 2>/dev/null | wc -l)<br>' +
        'if [[ $fileCount -gt 0 ]]; then<br>' +
        '   echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Compress Process Started"<br>' +
        '   tar -cvzf "$compressName" $logs && {<br>' +
        '        wait<br>' +
        '        mv "$compressName" "$logBkpDir"<br>' +
        '        rm $logs<br>' +
        '   echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Process Completed"<br>' +
        '} || echo "Compression failed"<br>' +
        'else<br>' +
        'echo "No Files to compress"<br>' +
        'fi<br><br>'
        ;

    var formContent2 = '#### Backup Logs Removal ####<br>' +
        'cd "$logBkpDir"<br>' +
        'fileCount=$(ls -l $bkpLogs 2>/dev/null | wc -l)<br>' +
        'if [[ $fileCount -gt 0 ]]; then<br>' +
        'echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Remove Backup Logs Process Started"<br>' +
        'rm $bkpLogs && {<br>' +
        '    wait<br>' +
        '    echo "$(date ' + "'+%Y-%m-%d %H:%M:%S')" + ' Process Completed"<br>' +
        '} || { echo "Failed to remove log files"; exit 1; }<br>' +
        'else<br>' +
        'echo "No files to remove"<br>' +
        'fi<br>' +
        "curdate=$(date '+%Y-%m-%d %H:%M:%S')<br>" +
        'echo $curdate<br>'
        ;

    var footerLine = 'echo " ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== "<br>';

    if (filenamevalue === '' || logbkppathValue === '' || lopathValue === '') {
        alert('Fields are empty!');
    } else {
        if (filenamevalue !== '' && logbkppathValue !== '' && lopathValue !== '') {
            if (daystokeepbkpfileValue === '') {
                // var contentToCopy = formContent0 + footerLine;
                document.getElementById("scriptoutput").innerHTML = formContent0 + footerLine;

            } else {
                if (daystokeepbkpfileValue >= 2) {
                    document.getElementById("scriptoutput").innerHTML = formContent1 + formContent2 + footerLine;
                }
                // var contentToCopy = formContent1 + formContent2 + footerLine;
                else {
                    alert('Days should be more than 1 !');
                }

            }
        }
    }


    // document.getElementById('copyButton').addEventListener('click', function () {

    // navigator.clipboard.writeText(contentToCopy)
    // .then(() => {
    //     alert('Content copied to clipboard!');
    // })
    // .catch(err => {
    //     console.error('Could not copy text: ', err);
    // });
}