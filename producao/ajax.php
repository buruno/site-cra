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
    $txt = "nome: $datas[nome]\nemail: $datas[email]\ntelefone: $datas[telefone]";
    $header ="From: ".$datas[email]."<>\r\n";
    $header .="Reply-To:  \n";
    $header .="MIME-Version: 1.0"."\r\n";
    $header .="Content-type:text/html;charset=UTF-8"."\r\n";  
    if(mail($to,$subject,$txt,$header)){
        $to = $datas[email];
        $subject = "[CRA - Centro de Referência Audiovisual] Mensagem Automática";
        $txt = "Caro(a) representante de acervo audiovisual ou colaborador,\n\nMuito obrigado por se cadastrar no site do CRA - Centro de Referência Audiovisual. Sua contribuição será essencial para a formulação do mais completo banco de dados sobre conteúdos audiovisuais do país. \n\nCaso haja qualquer dúvida no preenchimento do questionário, entre em contato conosco.\n Estamos disponíveis por email e telefone:\n\n\tcra.giba@gmail.com\n\tcra.lidiag@gmail.com\n\t(11) 3512 6111\n\tramal 236 ou 239\n\nObrigado e até breve.\nAtt,";
        $header ="From: cra.giba@gmail.com <Contato - CRA>"."\r\n";
        $header .="Reply-To: cra.giba@gmail.com , cra.lidiag@gmail.com"."\r\n";
        $header .="Content-type:text/html;charset=UTF-8"."\r\n";  
        mail($to,$subject,$txt,$header);
        return true;
    };
}
else {
    $to = "webdesigner@cinemateca.org.br, cra.giba@gmail.com, cra.lidiag@gmail.com";
    $subject = "[ERRO] $datas[nome], $datas[email]";
    $txt = "nome: $datas[nome]\nemail: $datas[email]\ntelefone: $datas[telefone]";
    $header ="From: ".$datas[email]." <>\n";
    $header .="Reply-To:  \n";
    $header .="MIME-Version: 1.0\n";
    $header .="Content-type:text/html;charset=UTF-8\n";  
    mail($to,$subject,$txt,$header);
    echo "erro no banco";
    return false;
}
?>
