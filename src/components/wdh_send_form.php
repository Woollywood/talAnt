<?php
	$response = array();

	$subject = $_POST['theme'];

	$email = "";
	$name = "";
	$tel = "";

	if (!empty($_POST['email'])) {
		$email = "email: " . $_POST['email'] . "\r\n";
	}

	if (!empty($_POST['name'])) {
		$name = "name: " . $_POST['name'] . "\r\n";
	}

	if (!empty($_POST['tel'])) {
		$tel = "tel: " . $_POST['tel'] . "\r\n";
	}

	$url = "url: " . $_POST['url'] . "\4\n";

	$message = $email . $name . $tel . $url;

	if(mail('talamagin@mail.ru', $subject, $message)){
		array_push($response, ['success' => 'true']);
		echo json_encode($response);
	}
	else{
		array_push($response, ['success' => 'false']);
		echo json_encode($response);
	}
?>