function sendUserInfo()
{
	var msg = document.user_info;
	var userName = msg.user_name.value;
	var userMail= msg.user_mail.value;
    var userMobile = msg.user_mobile.value;
	var userDepartment = msg.user_department.value;
	var userGender;
	if (msg.user_gender.item(0).checked == true)
		userGender = "男";
	else if (msg.user_gender.item(1).checked == true)
		userGender = "女";
    else
        userGender = "其它";
	var userWords = msg.user_words.value;
	
	if (userName == "") {
		alert("Please input your name.");
		return;
	}
	if (userMail== "") {
		alert("Please input your student number.");
		return;
	}
    if (userMobile == "") {
        alert("Please input your mobile.");
        return;
    }
	if (userDepartment == "") {
		alert("Please input your department.");
		return;
	}
    if (userWords == "") {
        alert("Please input your leave words.");
        return;
    }
	var postStr = "user_name="+userName+"&user_mail="+userMail+"&user_mobile="+userMobile+"&user_department="+userDepartment+"&user_gender="+userGender+"&user_words="+userWords;
	var xmlhttp = false;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (! xmlhttp) {
		alert("Submit Failed.");
		return;
	}
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if (xmlhttp.responseText == "1")
				alert("Submitted successfully!");
			else
				alert("Submit Failed.");
		}
	}

	xmlhttp.open("POST", "PHPMailer/mailer.php", true);
	xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xmlhttp.send(postStr);

}

