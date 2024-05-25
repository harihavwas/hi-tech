function submitForm() {
    // Get the value of the input field
    var appnameValue = document.getElementById("appnameInput").value;
    var scriptpathValue = document.getElementById("scriptpathInput").value;

    var formContent0 = "<p>#!/bin/bash<br>"+
"#*/5 * * * * sh " + scriptpathValue + "/AppHealth.sh >> " + scriptpathValue + "/appHealthlog.log<br><br>"+

'lines="===== ===== ===== ===== ===== ===== ===== ===== ===== ====="<br>'+
'dotlines="--------------------"<br>'+
'appsInput="' + appnameValue + '"<br>'+
'path="' + scriptpathValue + '"<br>'+
'missingApps="missingApps.txt"<br>'+
'runningAppsPID="runningAppsPID.txt"<br>'+
"date0=$(date '+%Y-%m-%d %H:%M:%S')<br><br>"+

"echo $lines >> $path/$runningAppsPID<br>"+
"echo $date0 >> $path/$runningAppsPID<br>"+
"echo $dotlines >> $path/$runningAppsPID<br><br>"+

'IFS=", " read -r -a apps <<< "$appsInput"<br><br>'+

'for app in "\${apps[@]}"; do<br>'+
"    pid=$(ps -Aef | grep $app | grep -v grep | awk '{print $2}')<br>"+
"    echo $pid : $app >> $path/$runningAppsPID<br>"+
"    pid=$(ps -Aef | grep $app | grep -v grep | awk '{print $2}' | wc -l)<br>"+
 "   javaCount=$((javaCount + $app$pid))<br>"+
'    if [ $pid -lt 1 ]; then echo "$date0 -- Missing $app" >> $missingApps; fi<br>'+
'done<br><br>'+

'echo "$date0 -- Script Executed !!"<br></p>';


    if (appnameValue === '' || scriptpathValue === '') {
        alert('Fields are empty!');
    }
    else {
        document.getElementById("scriptoutput").innerHTML = formContent0;
    }
}