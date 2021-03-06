<?
header('Content-Type: text/html; charset=utf-8');
?>
<body style="background: url(assets/img/logo-cra-cor.png) center center no-repeat #fff; height: 100%">
<div style="display: none"> 
<?

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
            $key = 'cra_acervo_'.$key_value;
            $val = '?';
        } else {
            $key .= ', '.'cra_acervo_'.$key_value;
            $val .= ',?';
        }
    }
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


$datas = array_filter($_POST);
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
if(sql_insert($datas, $s, "cra_acervo")) {
    $to = "webdesigner@cinemateca.org.br, cra.giba@gmail.com, cra.lidiag@gmail.com";
    $header ="From: ".$_POST[dados_email]." <>\n";
    $header .="Reply-To:  \n";
    $header .="MIME-Version: 1.0\n";
    $header .="Content-Type: text/plain\n";  
    $subject = "[NOVA INSCRIÇÃO] $_POST[dados_id], $_POST[dados_nome]";
    $txt = http_build_query($datas,'',"\n");
    $txt = urldecode($txt);
    if(mail($to,$subject,$txt,$header)){
        ?>
        <script>
        alert("Questionário preenchido com sucesso! Muito obrigado por sua inestimável contribuição.");
        window.location = "http://programadorabrasil.gov.br/cra";
        </script>

        <?
    }
    else {
        ?>
        <script>
        alert("Questionário preenchido com sucesso! Obrigado por sua inestimável contribuição.");
        console.log($txt);
        window.location = "http://programadorabrasil.gov.br/cra";
        </script>

        <?      
    }

}
else {
    $to = "webdesigner@cinemateca.org.br, cra.giba@gmail.com, cra.lidiag@gmail.com";
    $subject = "[ERRO]: $_POST[dados_id], $_POST[dados_nome]";
    $txt = "$datas";
    $header ="From: ".$_POST[dados_email]." <>\n";
    $header .="Reply-To:  \n";
    $header .="MIME-Version: 1.0\n";
    $header .="Content-Type: text/plain\n";  
    mail($to,$subject,$txt,$header);
    ?>
        <script>
        alert("Houve algum erro no processamento de seus dados, por favor tente mais tarde novamente. ");
        window.location = "http://programadorabrasil.gov.br/cra";
        </script>

    <?
}
?>
</div>