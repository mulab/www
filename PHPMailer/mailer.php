<?php
    header("Content-type: text/html; charset=utf-8");
    date_default_timezone_set('Asia/Shanghai');

    require("class.phpmailer.php"); //下载的文件必须放在该文件所在目录
    $mail = new PHPMailer(); //建立邮件发送类
    $mail->CharSet = 'utf8';
    //$address = "mulab.thu@gmail.com";
    //$address = "glassices@gmail.com";
    //$address = "aluex.cpp@gmail.com";
    $address = "labmu_thu@163.com";
    $mail->IsSMTP(); // 使用SMTP方式发送
    $mail->Host = "smtp.gmail.com"; // 您的企业邮局域名
    $mail->SMTPAuth = true; // 启用SMTP验证功能
    $mail->Username = "battleglassices@gmail.com"; // 邮局用户名(请填写完整的email地址)
    $mail->Password = "dota2iswonderful"; // 邮局密码
    $mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
    $mail->Port = 465;
    $mail->From = "battleglassices@gmail.com"; //邮件发送者email地址
    $mail->FromName = "student";
    $mail->AddAddress("$address", "labmu");//收件人地址，可以替换成任何想要接收邮件的email信箱,格式是AddAddress("收件人email","收件人姓名")
    //$mail->AddReplyTo("", "");
     
    //$mail->AddAttachment("/var/tmp/file.tar.gz"); // 添加附件
    //$mail->IsHTML(true); // set email format to HTML //是否使用HTML格式
    $username = $_POST['user_name'];
    $usernumber = $_POST['user_number'];
    $userdepartment = $_POST['user_department'];
    $usergender = $_POST['user_gender'];
    $userwords = $_POST['user_words'];

     
    $mail->Subject = "学生留言邮件"; //邮件标题
    $mail->Body = "姓名: " . $username . "<br>学号: " . $usernumber . "<br>院系: " . $userdepartment . "<br>性别: " . $usergender . "<br>留言: " . $userwords; //邮件内容
    $mail->AltBody = "This is the body in plain text for non-HTML mail clients"; //附加信息，可以省略
     
    if(!$mail->Send()) {
        echo 0;
    }
    else {
        echo 1;
    }
?>
