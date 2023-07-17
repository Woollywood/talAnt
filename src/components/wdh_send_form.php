<?php
	$response = array();

	$subject = "Заявка с сайта";
	$message = "Заказ звонка";

	$email = $_POST['email'] . "\r\n";
	$name = $_POST['name'] . "\r\n";
	$tel = $_POST['tel'] . "\r\n";

	$additional_headers = "From: talAnt@site.ru\r\n" . "Reply-to: " . $email . "name: " . $name . "phone: " . $tel;

	if(mail($_POST['email'], $subject, $message, $additional_headers)){
		array_push($response, ['success' => 'true', 'email' => $_POST['email']]);
		echo json_encode($response);
	}
	else{
		array_push($response, ['success' => 'false']);
		echo json_encode($response);
	}
?>