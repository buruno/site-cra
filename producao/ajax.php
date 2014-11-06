<?
header('Content-Type: text/html; charset=utf-8');
function bindParameters(&$statement, &$params) {
  $args   = array();
  $args[] = implode('', array_values($params));

  foreach ($params as $paramName => $paramType) {
    $args[] = &$params[$paramName];
    $params[$paramName] = null;
  }
  call_user_func_array(array(&$statement, 'bind_param'), $args);
}
mysqli_report(MYSQLI_REPORT_ALL);
function sql_insert ($data, $typeDef, $table) {
    include('variables.php');
    $mysqli = mysqli_connect("$host", "$user", "$pass", "programadorabr"); 
    $keys = array_keys($data);
    $vals = array_values($data);
    $key = '';
    $val = '';
    $type = '';
    foreach($keys AS $key_value) {
        if($key == '') {
            $key = 'cra_cadastro_'.$key_value;
            $val = '?';
        } else {
            $key .= ', '.'cra_cadastro_'.$key_value;
            $val .= ',?';
        }
    }
   // echo $key.'<br />'.$val; 
    $stmt = $mysqli->prepare("INSERT INTO $table ($key) values ($val)");
    if ($stmt !== false) {

        for($i = 0; $i < count($typeDef); $i++) {
            /* Set params value for binding */
            $params[$keys[$i]] = $typeDef[$i];
        }

        /* Bind our params */
        bindParameters($stmt, $params);

        for($i = 0; $i < count($typeDef); $i++) {
            /* Set params for query */
            $params[$keys[$i]] = utf8_decode($vals[$i]);
        }
        
        /* Execute the prepared Statement */
        if(!$stmt->execute() ) { printf("Execute Statement Error: %s\n", $stmt->error); exit; }

        /* Close the statement */
        $stmt->close();
        return true;
    } 
    else {
        /* Error */
        die ("Mysql Error: " . $mysqli->error);
        return false;
    }
};

$json  = json_decode(file_get_contents("php://input"));
$datas = array();
foreach($json as $key =>$value) {
    $datas[$key] = rawurldecode($value);
};
$datas = array_filter($datas);
array_walk(
    $datas,
    function (&$entry) {
        $entry = rawurldecode($entry);
    }
);
$n = count($datas);
$s = array();
for($z = 0; $z < $n; $z++) {
    array_push($s,'s');
}
if(sql_insert($datas, $s, "cra_cadastro")) {
    $to = "webdesigner@cinemateca.org.br, cra.giba@gmail.com, cra.lidiag@gmail.com";
    $subject = "[NOVO CADASTRO] $datas[nome], $datas[email]";
    $txt = "nome: $datas[nome]\nemail: $datas[email]";
    $headers = "From: $datas[email]" . "\r\n";
    if(mail($to,$subject,$txt,$headers)){
        return true;
    };
}
else {
    $to = "webdesigner@cinemateca.org.br, cra.giba@gmail.com, cra.lidiag@gmail.com";
    $subject = "[ERRO] $datas[nome], $datas[email]";
    $txt = "nome: $datas[nome]\nemail: $datas[email]";
    $headers = "From: $datas[email]" . "\r\n";
    mail($to,$subject,$txt,$headers);
    return false;
}
?>
