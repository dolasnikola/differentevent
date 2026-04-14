<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars(trim($data['name'] ?? ''));
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$eventType = htmlspecialchars(trim($data['eventType'] ?? ''));
$date = htmlspecialchars(trim($data['date'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Popunite obavezna polja (ime, telefon, poruka).']);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email adresa nije validna.']);
    exit;
}

$to = 'office@differentevent.rs';
$subject = 'Novi upit sa sajta — ' . $name;

$body = "Novi upit sa kontakt forme na differentevent.rs\n";
$body .= "=============================================\n\n";
$body .= "Ime i prezime: $name\n";
$body .= "Telefon: $phone\n";
$body .= "Email: $email\n";
$body .= "Tip događaja: $eventType\n";
$body .= "Datum događaja: $date\n\n";
$body .= "Poruka:\n$message\n";

$headers = "From: noreply@differentevent.rs\r\n";
$headers .= "Reply-To: " . (!empty($email) ? $email : "noreply@differentevent.rs") . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: DifferentEvent-Website\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Poruka je uspešno poslata.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Greška pri slanju poruke. Pokušajte ponovo.']);
}
