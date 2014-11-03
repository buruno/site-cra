angular.module('templates-app', ['about/about.tpl.html', 'cadastro/cadastro.tpl.html', 'home/home.tpl.html', 'questionario/questionario.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div id=\"leiamais\">\n" +
    "<h1>Objetivos Gerais</h1>\n" +
    "<hr class=\"dotted\" />\n" +
    "<ul>\n" +
    "<li>Planejar e estruturar o projeto do <em>CRA-Centro de Referência Audiovisual</em>, como o grande repositório brasileiro de conteúdos audiovisuais e informações conexas, hoje disponíveis, mas dispersos nos diversos órgãos de cultura da administração federal (Cinemateca Brasileira, Biblioteca Nacional, FUNARTE, etc.), bem como em instituições públicas dos estados e municípios do país. </li>\n" +
    "\n" +
    "<li>Mapear, catalogar e monitorar os conteúdos audiovisuais disponíveis nacionalmente, concentrando o que for possível na estrutura única de armazenamento e busca do CRA, e criando soluções técnicas para o acesso fácil a acervos, midiatecas e bancos de dados remotos.</li>\n" +
    "\n" +
    "<li>Desenvolver conceitos e soluções para um modelo integrado e sustentável de preservação e acesso aos acervos culturais, materializando uma política nacional de digitalização de acervos.</li>\n" +
    "</ul>\n" +
    "<hr />\n" +
    "<h1>Objetivos Específicos</h1>\n" +
    "<hr class=\"dotted\" />\n" +
    "<ul>\n" +
    "<li>Oferecer uma infraestrutura técnica e operacional para o Programa Nacional de Apoio à Cultura (Pronac), em apoio à sua missão de estimular a produção, a distribuição e o acesso aos produtos culturais; proteger e conservar o patrimônio histórico e artístico; promover a difusão da cultura brasileira e a diversidade regional</li>\n" +
    "\n" +
    "<li>Materializar os objetivos do <em>Sistema Nacional de Informações e Indicadores Culturais (SNIIC)</em>, centralizando informações sobre bens culturais e facilitando o acesso de agentes culturais e da sociedade como um todo.</li>\n" +
    "\n" +
    "<li>Apoiar o SNIIC no monitoramento do <em>Plano Nacional de Cultura</em> (PNC), dando a ele uma infraestrutura técnica para coleta, sistematização e interpretação de dados; serviços de busca de dados georreferenciados, estatísticas, indicadores e outras informações relevantes de bens e serviços culturais.</li>\n" +
    "\n" +
    "<li>Fortalecer o Programa Nacional de Cultura, Educação e Cidadania - Cultura Viva, assegurando acesso fácil a conteúdos para os Pontos de Cultura.</li>\n" +
    "\n" +
    "<li>Apoiar as iniciativas do <em>Programa Mais Cultura</em>, fortalecendo a perspectiva da cultura como vetor importante para o desenvolvimento do país, incluído na agenda social, para atuar na redução da pobreza e a desigualdade social.</li>\n" +
    "\n" +
    "<li>Apoiar os Núcleos de <em>Produção Digital (NPDs)</em>, no âmbito do Programa Olhar Brasil, fornecendo conteúdos audiovisuais livres de direitos para uso dos produtores audiovisuais independentes.</li>\n" +
    "\n" +
    "<li>Contribuir para a Meta 31 do <em>Plano Nacional de Cultura</em> (Dotar municípios brasileiros de algum tipo de instituição ou equipamento cultural, entre museu, teatro ou sala de espetáculo, arquivo público ou centro de documentação, cinema e centro cultural, conforme percentuais por tamanho de município)</li>\n" +
    "\n" +
    "<li>Contribuir para a Meta 40 do <em>Plano Nacional de Cultura</em> (Disponibilização na internet de conteúdos de acervo do Centro Técnico do Audiovisual - CTAv e da Cinemateca Brasileira; da Fundação Casa de Rui Barbosa; do Patrimônio Histórico e Artístico Nacional - Iphan; da Fundação Biblioteca Nacional – FBN; e do Centro de Documentação da Fundação Nacional das Artes - Cedoc/Funarte) </li>\n" +
    "\n" +
    "<li>Contribuir para a Meta 40 do <em>Plano Nacional de Cultura</em> (“100% de bibliotecas públicas e 70% de museus e arquivos disponibilizando informações sobre seu acervo no SNIIC”)</li>\n" +
    "\n" +
    "<li>Facilitar o acesso ao catálogo da <em>Programadora Brasil</em> e contribuir para a maior difusão de produtos audiovisuais brasileiros, na rede de exibição do Cine Mais Cultura.</li>\n" +
    "\n" +
    "<li>Abastecer de materiais audiovisuais e contribuir para fomentar a Rede de Laboratórios de Arte e Inovação, em implantação no <em>Programa de Cultura Digital</em> do MinC.</li>\n" +
    "\n" +
    "<li>Oferecer a infraestrutura técnica e a programação para a Rede de Cinemas Universitários Conectados, do <em>Programa de Cultura Digital</em> do MinC.</li>\n" +
    "\n" +
    "<li>Contribuir para o desenvolvimento da <em>Política Nacional de Integração entre Educação e Cultura</em>, apoiando suas ações prioritárias:</li>\n" +
    "\n" +
    "<li>Mais Cultura nas Escolas Agentes de Leitura Mais Educação Cine Educação Pesquisa, mapeamento e georreferenciamento Programa Nacional Biblioteca da Escola – PNBE/ARTES Formação continuada para professores de artes</li>\n" +
    "\n" +
    "<li>Contribuir para as ações de Comunicação para a Cultura, em particular as seguintes iniciativas:</li>\n" +
    "\n" +
    "<li>Promoção de infraestrutura de comunicação, como conexão banda larga e equipamentos tecnológicos, em especial, no contexto da radiodifusão e internet; Disponibilização do conteúdo em plataforma online, que reunirá num ponto da Internet a multiplicidade de produções realizadas, garantindo espaços de circulação, ampliando o acesso dos agentes da cultura aos meios de comunicação, diversificando a programação dos veículos, e ainda, potencializando o uso dos canais alternativos para estimular as redes públicas.</li>\n" +
    "\n" +
    "<li>Estratégia Executiva / Metodologia  A estruturação do <em>CRA-Centro de Referência Audiovisual</em> envolverá as seguintes atividades: Estudos para a implantação de uma estrutura técnica de armazenagem de conteúdos digitais e de tráfego de dados em rede, com alta velocidade e alcance nacional, em parceria com a RNP-Rede Nacional de Ensino e Pesquisa, do Ministério da Ciência, Tecnologia e Inovação.</li>\n" +
    "\n" +
    "<li>Mapeamento dos acervos audiovisuais públicos, integralmente no caso dos acervos vinculados à União e os principais sob responsabilidade dos Estados e Municípios, bem como dos mais significativos acervos privados.</li>\n" +
    "\n" +
    "<li>Gestão junto aos órgãos estatais, públicos e privados detentores de acervos, com vistas à formalização de convênios para a armazenagem, indexação e disponibilização online desses acervos.</li>\n" +
    "\n" +
    "<li>Disponibilização do acervo da <em>Programadora Brasil</em> na estrutura técnica do CRA.</li>\n" +
    "\n" +
    "<li>Articulações junto a detentores de acervos que eventualmente não queiram armazená-los no CRA, de forma a estabelecer padrões de interoperabilidade de seus sistemas técnicos com o do centro.</li>\n" +
    "\n" +
    "<li>Padronização dos catálogos de obras audiovisuais disponíveis nos diversos acervos brasileiros e disponibilização online desses catálogos na estrutura técnica do CRA, de modo a facilitar a consulta e a localização de obras.</li>\n" +
    "\n" +
    "<li>Estudo do modelo jurídico-institucional adequado para a implantação do CRA e a regulação de seu relacionamento com os demais órgãos públicos de arquivamento e gestão de dados, assim como instituições privadas.</li>\n" +
    "\n" +
    "<li>Consolidação de um projeto operacional de implantação progressiva do CRA, com definição de sua estrutura física, técnica e humana, e orçamento geral dos investimentos necessários à sua materialização.</li>\n" +
    "\n" +
    "<li>Instrução de uma Portaria Interministerial, a ser promulgada pelos senhores ministros da Cultura e da Ciência, Tecnologia e Inovação, instituindo e regulamentando o <em>Centro de Referência de Audiovisual</em>. </li>\n" +
    "</ul>\n" +
    "</div>");
}]);

angular.module("cadastro/cadastro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cadastro/cadastro.tpl.html",
    "    <h1>Cadastro</h1>\n" +
    "    <hr />\n" +
    "    <p>\n" +
    "      Cadastre-se para receber notificações e novidades acerca do desenvolvimento do portal.\n" +
    "    </p>\n" +
    "    <hr class=\"dotted\" />\n" +
    "    <form role=\"form\">\n" +
    "      <div class=\"form-group clearfix\">\n" +
    "        <label class=\"col-sm-2\" for=\"cad_nome\">Nome</label>\n" +
    "        <span class=\"col-sm-6\">\n" +
    "          <input type=\"text\" required=\"true\" class=\"form-control\" name=\"cad_nome\"  id=\"cad_nome\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group clearfix\">\n" +
    "        <label class=\"col-sm-2\" for=\"cad_email\">Email</label>\n" +
    "        <span class=\"col-sm-6\">\n" +
    "          <input type=\"email\" required=\"true\" class=\"form-control\" name=\"cad_email\" id=\"cad_email\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-offset-2 col-sm-3\">\n" +
    "        &ensp;<button type=\"submit\" class=\"btn btn-primary btn-block\">Cadastrar</button>\n" +
    "      </div>\n" +
    "    </form>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "    <h1>Introdução</h1>\n" +
    "    <h2>repositório de dados sobre conteúdos audiovisuais brasileiros e informações correlatas.</h2>\n" +
    "    <hr />\n" +
    "    <p>Você acha interessante a criação de um Centro de Referência audiovisual que possa abrigar o mais completo banco de dados  possível sobre acervos audiovisuais brasileiros e informações correlatas existentes?</p>\n" +
    "   <p>Você admite que sua participação ajudando com informações importantes no tocante aos acervos e preservação audiovisual seja uma contribuição essencial para a formulação do projeto?</p>\n" +
    "   <p>Você entende que todas as informações que nos possa transmitir ajudarão na elaboração de um futuro plano de negócios que permitirá ao CRA viabilizar uma série de inciativas úteis a todos os que trabalham com acervos audiovisuais e/ou dependem dos mesmos para novas linhas de ação?</p>\n" +
    "    <strong>Prezado(a) visitante:</strong>\n" +
    "    <p>\n" +
    "      No âmbito dos trabalhos de elaboração do Projeto do Centro de Referência Audiovisual - CRA -, parceria da Secretaria do Audiovisual do MinC com a RNP - Rede Nacional de Ensino e Pesquisa -, do Ministério da Ciência, Tecnologia e Inovação, o CRA foi concebido para tornar-se o grande repositório de dados sobre conteúdos audiovisuais brasilieiros e informações correlatas, hoje disponíveis, mas disperos nos diversos órgãos de cultura da aministração federal (Cinemateca Brasileira, Biblioteca Nacional, FUNARTE, etc), em instituições públicas dos estados e municípios do país, bem como nos mais significativos acervos privados.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Para isso foi implantada uma Unidade Técnica encarregada do gerenciamento executivo do projeto com escritório nas instalações da Cinemateca Brasileira, em São Paulo.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Dentre outras atribuições, a Unidade Técnica tem como missões fazer o levantamento de dados, mapeamento de acervos e a realização de estudos de tecnologia necessários à estruturação do referido projeto de implantação do CRA - <em>Centro de Referência Audiovisual</em>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Neste sentido, este site tem a função de apresentar ao visitante um pouco dos objetivos do projeto e convidar aos diferentes agentes, gestores, responsáveis e arquivistas, detentores e preservadores de acervos audiovisuais para se cadastrarem preenchendo um questionário sucinto, que nos permitirá efetuar um primeiro levantamento com o mapeamento inicial de todos os possíveis acervos audiovisuais existentes em nosso país.\n" +
    "    </p>");
}]);

angular.module("questionario/questionario.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionario/questionario.tpl.html",
    "<h1>Questionário</h1>\n" +
    "<hr />\n" +
    "<p>\n" +
    "	Aqui é onde você pode cadastrar seu acervo a ser acrescentado em nosso banco de dados.\n" +
    "</p>\n" +
    "<ol id=\"passos\" class=\"list-unstyled clearfix ng-scope\">\n" +
    "	<li ng-class=\"{passo_atual: passo==1}\"><span>1&ordm;</span><br />passo</li>\n" +
    "	<li ng-class=\"{passo_atual: passo==2}\"><span>2&ordm;</span><br />passo</li>\n" +
    "	<li ng-class=\"{passo_atual: passo==3}\"><span>3&ordm;</span><br />passo</li>\n" +
    "	<li ng-class=\"{passo_atual: passo==4}\"><span>4&ordm;</span><br />passo</li>\n" +
    "</ol>\n" +
    "<hr class=\"dotted\" />\n" +
    "<div class=\"ng-scope\" ng-show=\"passo == 1\">\n" +
    "	<form role=\"form\" id=\"form_dados\" name=\"formDados\" class=\"form-horizontal\" novalidate>\n" +
    "		<h2>Dados do acervo</h2>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_id\">Identificação do acervo</label>\n" +
    "		<span class=\"col-sm-8\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.acervo.id\" ng-value=\"dados.catalogacao.id\" name=\"dados_id\" id=\"dados_id\" placeholder=\"\" type=\"text\"  required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_nome\">Nome do arquivo</label>\n" +
    "		<span class=\"col-sm-8\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.acervo.nome\" id=\"dados_nome\" name=\"dados_nome\"  type=\"text\"  required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_endereco\">Endereço</label>\n" +
    "		<span class=\"col-sm-8\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.acervo.endereco\" id=\"dados_endereco\" name=\"dados_endereco\" placeholder=\"\" type=\"text\" required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "			<!-- script combo estados -->\n" +
    "			<label class=\"col-sm-2\" for=\"dados_estado\">Estado</label>\n" +
    "			<span class=\"col-sm-1\">\n" +
    "			<select id=\"dados_estado\" ng-model=\"dados.acervo.estado\" name=\"dados_estado\" combo-estado  required>\n" +
    "			</select>\n" +
    "			</span>\n" +
    "			<label class=\"col-sm-2\" for=\"dados_cidade\">cidade</label>\n" +
    "			<span class=\"col-sm-4\">\n" +
    "			<select class=\"col-sm-12\" ng-model=\"dados.acervo.cidade\" id=\"dados_cidade\" name=\"dados_cidade\"  required>\n" +
    "			</select>\n" +
    "			</span>\n" +
    "			<label class=\"col-sm-1\" for=\"dados_cep\">CEP</label>\n" +
    "			<span class=\"col-sm-2\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.acervo.cep\" id=\"dados_cep\" name=\"dados_cep\" type=\"text\"  required>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<!-- fim script combo estados -->\n" +
    "	<hr class=\"dotted\">\n" +
    "		<h2>Dados do responsável</h2>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_resp-nome\">Responsável</label>\n" +
    "		<span class=\"col-sm-8\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.responsavel.nome\" name=\"dados_nome\" id=\"dados_nome\" placeholder=\"\" type=\"text\"  required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_resp-telefone-ddd\">Telefone</label>\n" +
    "		<span class=\"col-sm-2\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.responsavel.telefone.ddd\" name=\"dados_telefone_ddd\" id=\"dados_telefone_ddd\" placeholder=\"\" type=\"text\"  required>\n" +
    "		</span>\n" +
    "		<span class=\"col-sm-6\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.responsavel.telefone.n\" name=\"dados_telefone_n\" id=\"dados_telefone_n\" placeholder=\"\" type=\"text\" required>\n" +
    "		</span>\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\"  for=\"dados_resp-email\">E-mail</label>\n" +
    "		<span class=\"col-sm-8\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.responsavel.email\" id=\"dados_email\" type=\"email\"  required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"col-sm-4\" for=\"dados_resp-data\">Data do cadastro</label>\n" +
    "		<span class=\"col-sm-2\">\n" +
    "			<input class=\"form-control\" ng-model=\"dados.responsavel.data\" id=\"dados_data\" name=\"dados_data\" placeholder=\"__/__/__\" type=\"text\"  required>\n" +
    "		</span>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<p ng-show=\"formDados.$invalid\" class=\"col-sm-offset-4 bg-warning\">&emsp;Por favor preencha todos os campos acima</p>\n" +
    "		<div class=\"col-sm-offset-4 col-sm-3\">\n" +
    "			<button ng-click=\"mudapasso(1)\" ng-disabled=\"formDados.$invalid\" class=\"btn btn-primary btn-block\">Próximo passo</button>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "<!-- formulário de materiais -->\n" +
    "<div class=\"ng-scope\" ng-show=\"passo == 1\">\n" +
    "	<h2>Detalhamento do tipo de Material</h2>\n" +
    "	<hr class=\"dotted\">\n" +
    "	<form role=\"form\" id=\"form_material\" class=\"form-horizontal\">\n" +
    "		<div class=\"form-group\">\n" +
    "			<label class=\"row\"><input ng-model=\"material.pelicula.show\" ng-value=\"1\" type=\"checkbox\"> Material em <strong>película</strong>?</label>\n" +
    "		</div>\n" +
    "		<div class=\"table-responsive\" ng-show=\"material.pelicula.show\" id=\"show_pelicula\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\" class=\"text-center\">Material</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (pés, horas ou unidades)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: material.bitola}\">\n" +
    "					<td rowspan=\"7\" style=\"vertical-align: middle\">Bitola</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.bitola.mm16.sim}\">\n" +
    "					<td>16mm</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm16.sim\" name=\"material_pelicula_16\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm16.qte\" name=\"material_pelicula_16_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea name=\"material_pelicula_16_obs\" class=\"form-control\"></textarea></td>\n" +
    "				</tr> \n" +
    "				<tr ng-class=\"{success: material.bitola.mm35.sim}\">\n" +
    "					<td>35mm</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm35.sim\" name=\"material_pelicula_35\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm35.qte\" name=\"material_pelicula_35_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.bitola.mm35.obs\" name=\"material_pelicula_35_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.bitola.mm8.sim}\">\n" +
    "					<td>8mm</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm8.sim\" name=\"material_pelicula_8\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm8.qte\" name=\"material_pelicula_8_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea ng-model=\"material.bitola.mm8.obs\" name=\"material_pelicula_8_obs\" class=\"form-control\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.bitola.mms8.sim}\">\n" +
    "					<td>S8mm</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mms8.sim\" name=\"material_pelicula_s8\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mms8.qte\" name=\"material_pelicula_s8_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea ng-model=\"material.bitola.mms8.obs\" name=\"material_pelicula_s8_obs\" class=\"form-control\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.bitola.mm9_5.sim}\">\n" +
    "					<td>9,5mm</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm9_5.sim\" name=\"material_pelicula_95\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.mm9_5.qte\" name=\"material_pelicula_95_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea ng-model=\"material.bitola.mm9_5.obs\" name=\"material_pelicula_95_obs\" class=\"form-control\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.bitola.outros.sim}\">\n" +
    "					<td>Outros (especifique no campo \"observação\")</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.outros.sim\" name=\"material_pelicula_outros\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.bitola.outros.qte\" name=\"material_pelicula_outros_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\"ng-model=\"material.bitola.outros.obs\" name=\"material_pelicula_outros_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.negativo}\">\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Negativo original</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.negativo.cor.sim}\">\n" +
    "					<td>Cor</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.negativo.cor.sim\" name=\"material_pelicula_negativo_cor\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.negativo.cor.qte\" name=\"material_pelicula_negativo_qte_cor\" type=\"text\" /></td>\n" +
    "					<td><textarea ng-model=\"material.negativo.cor.obs\" name=\"material_pelicula_negativo_cor_obs\" class=\"form-control\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.negativo.pb.sim}\">\n" +
    "					<td>pb</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.negativo.pb.sim\" name=\"material_pelicula_negativo_pb\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.negativo.pb.qte\" name=\"material_pelicula_negativo_pb_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.negativo.pb.obs\" name=\"material_pelicula_negativo_pb_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.contratipo}\">\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Contratipo<br>(internegativo)</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.contratipo.cor.sim}\">\n" +
    "					<td>Cor</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.contratipo.cor.sim\" name=\"material_pelicula_contratipo_cor\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.contratipo.cor.qte\" name=\"material_pelicula_contratipo_cor_obs\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.contratipo.cor.obs\" name=\"material_pelicula_contratipo_cor_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.contratipo.pb.sim}\">\n" +
    "					<td>pb</td>\n" +
    "					<td><input class=\"form-control\" type=\"checkbox\" ng-model=\"material.contratipo.pb.sim\" name=\"material_pelicula_contratipo_pb\"></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.contratipo.pb.qte\" name=\"material_pelicula_contratipo_pb_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.contratipo.pb.obs\" name=\"material_pelicula_contratipo_pb_qte\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.interpositivo}\">\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Máster<br>(interpositivo)</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.interpositivo.cor.sim}\">\n" +
    "					<td>Cor</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.interpositivo.cor.sim\" name=\"material_pelicula_interpositivo_cor\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.interpositivo.cor.qte\" name=\"material_pelicula_interpositivo_cor_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.interpositivo.cor.obs\" name=\"material_pelicula_interpositivo_cor_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.interpositivo.pb.sim}\">\n" +
    "					<td>pb</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.interpositivo.pb.sim\" name=\"material_pelicula_interpositivo_pb\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.interpositivo.pb.qte\" name=\"material_pelicula_interpositivo_pb_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.interpositivo.pb.obs\" name=\"material_pelicula_interpositivo_pb_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.copia}\">\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Cópia</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.copia.cor.sim}\">\n" +
    "					<td>Cor</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.copia.cor.sim\" name=\"material_pelicula_copia_cor\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.copia.cor.qte\" name=\"material_pelicula_copia_cor_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.copia.cor.obs\" name=\"material_pelicula_copia_cor_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.copia.pb.sim}\">\n" +
    "					<td>pb</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.copia.pb.sim\" name=\"material_pelicula_copia_pb\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.copia.pb.qte\" name=\"material_pelicula_copia_pb_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.copia.pb.obs\" name=\"material_pelicula_copia_pb_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.pelicula.outros}\">\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Outros<br>(ex: sobras, copião...)</td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.pelicula.outros.cor.sim}\">\n" +
    "					<td>Cor</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.pelicula.outros.cor.sim\" name=\"material_pelicula_outros_cor\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.pelicula.outros.cor.qte\" name=\"material_pelicula_outros_cor_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.pelicula.outros.cor.obs\" name=\"material_pelicula_outros_cor_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.pelicula.outros.pb.sim}\">\n" +
    "					<td>pb</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.pelicula.outros.pb.sim\" name=\"material_pelicula_outros_pb\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.pelicula.outros.pb.qte\" name=\"material_pelicula_outros_pb_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.pelicula.outros.pb.obs\" name=\"material_pelicula_outros_pb_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"form-group\">\n" +
    "		<label class=\"row\"><input ng-model=\"material.video.show\" ng-value=\"1\" type=\"checkbox\"> Material em <strong>vídeo</strong>?</label>\n" +
    "		</div>\n" +
    "		<div class=\"table-responsive\" ng-show=\"material.video.show\" id=\"show_pelicula\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th>Tipo</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (unidades, horas, etc.)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: material.vhs.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">VHS</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.vhs.sim\" name=\"material_vhs\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.vhs.qte\" name=\"material_vhs_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.vhs.obs\" name=\"material_vhs_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.umatic.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Umatic</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.umatic.sim\" name=\"material_umatic\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.umatic.qte\" name=\"material_umatic_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.umatic.obs\" name=\"material_umatic_qte\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.betamax.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Betamax</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.betamax.sim\" name=\"material_betamax\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.betamax.qte\" name=\"material_betamax_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.betamax.obs\" name=\"material_betamax_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.betacam.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Betacam</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.betacam.sim\" name=\"material_betacam\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.betacam.qte\" name=\"material_betacam_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.betacam.obs\" name=\"material_betacam_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.digital.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Digital</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.digital.sim\" name=\"material_digital\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.digital.qte\" name=\"material_digital_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.digital.obs\" name=\"material_digital_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.dvd.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">DVD</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.dvd.sim\" name=\"material_dvd\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.dvd.qte\" name=\"material_dvd_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.dvd.obs\" name=\"material_dvd_qte\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.video.outros.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Outros<br>(especifique no campo \"observação\")</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.video.outros.sim\" name=\"material_video_outros\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" type=\"text\" ng-model=\"material.video.outros.qte\" name=\"material_video_outros_qte\"></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.video.outros.obs\" name=\"material_video_outros_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"form-group\">\n" +
    "			<label class=\"row\"><input ng-model=\"material.outros.show\" ng-value=\"1\" type=\"checkbox\"> Materiais correlatados (<strong>cartazes</strong>, <strong>fotos</strong>, etc)?</label>\n" +
    "		</div>\n" +
    "		<div class=\"table-responsive\" ng-show=\"material.outros.show\" id=\"show_outros\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th>Tipo</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (unidades, caixas, etc.)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: material.documentos.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Documentos</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.documentos.sim\" name=\"material_documentos\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.documentos.qts\" name=\"material_documentos_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.documentos.obs\" name=\"material_documentos_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.fotos.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Fotos</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.fotos.sim\" name=\"material_fotos\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.fotos.qte\" name=\"material_fotos_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.fotos.obs\" name=\"material_fotos_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.cartazes.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Cartazes</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.cartazes.sim\" name=\"material_cartazes\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.cartazes.qte\" name=\"material_cartazes_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.cartazes.obs\" name=\"material_cartazes_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.audios.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Áudios</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.audios.sim\" name=\"material_audios\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.audios.qte\" name=\"material_audios_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.audios.obs\" name=\"material_audios_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: material.correlatados.outros.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Outros<br>(especifique no campo \"observação\")</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.correlatados.outros.sim\" name=\"material_correlatados-outros\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"material.correlatados.outros.qte\" name=\"material_correlatados-outros_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"material.correlatados.outros.obs\" name=\"material_correlatados-outros_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "			 <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <button ng-click=\"mudapasso(1)\" class=\"btn btn-primary\">Próximo passo</button>      \n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "<div class=\"ng-scope\"  ng-show=\"passo == 1\">\n" +
    "	<h2>Informações sobre o acervo</h2>\n" +
    "	<hr class=\"dotted\">\n" +
    "	<form role=\"form\" id=\"form_material\" class=\"form-horizontal\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Catalogação</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Qte. Aproximada (porcentagem)</th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: catalogacao.incorporado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Está incorporado?<br>\n" +
    "						(com número de entrada ou número de tombo e com informações básicas de conteúdo e técnicas referentes ao material levantadas)</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.incorporado.sim\" name=\"acervo_incorporado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.incorporado.qte\" name=\"acervo_incorporado_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"catalogacao.incorporado.obs\" name=\"acervo_incorporado_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: catalogacao.catalogado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Está catalogado? <br>\n" +
    "						(conteúdo descrito, sinopse, ficha técnica e/ou indexação)</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.catalogado.sim\" name=\"acervo_catalogado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.catalogado.qte\" name=\"acervo_catalogado_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"catalogacao.catalogado.obs\" name=\"acervo_catalogado_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: catalogacao.documentado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Está documentado?<br>\n" +
    "						(possui certificação de direito)</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.documentado.sim\" name=\"acervo_documentado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.documentado.qte\" name=\"acervo_documentado_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"catalogacao.documentado.obs\" name=\"acervo_documentado_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: catalogacao.indexado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Está indexado?<br>\n" +
    "						(possui sistema de controle de banco de dados)</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.indexado.sim\" name=\"acervo_indexado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"catalogacao.indexado.qte\" name=\"acervo_indexado_qte\" type=\"text\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"catalogacao.indexado.obs\" name=\"acervo_indexado_obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Banco de dados</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: banco.fichas.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui fichas em papel?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"banco.fichas.sim\" name=\"banco_fichas\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"banco.fichas.obs\" name=\"banco_fichas_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: banco.planilhas.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui planilhas em Excel?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"banco.planilhas.sim\" name=\"banco_planilhas\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"banco.planilhas.obs\" name=\"banco_planilhas_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: banco.base.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui base de dados?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"banco.base.sim\" name=\"banco_base\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"banco.base.obs\" name=\"banco_base_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: banco.internet.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Os dados estão disponíveis na internet?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"banco.internet.sim\" name=\"banco_internet\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"banco.internet.obs\" ></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: banco.publico.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Os dados são de acesso público?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"banco.publico.sim\" name=\"banco_publico\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"banco.publico.obs\" name=\"banco_publico_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Tipo do depósito</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-class=\"{success: deposito.apropriado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui área apropriada para guarda do acervo?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"deposito.apropriado.sim\" name=\"deposito_apropriado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"deposito.apropriado.obs\" name=\"deposito_apropriado_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: deposito.climatizado.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">As áreas estão climatizadas?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"deposito.climatizado.sim\" name=\"deposito_climatizado\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"deposito.climatizado.obs\" name=\"deposito_climatizado_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: deposito.arquivamento.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui condições de arquivamento?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"deposito.arquivamento.sim\" name=\"deposito_arquivamento\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"deposito.arquivamento.obs\" name=\"deposito_arquivamento_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: deposito.embalagens.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui embalagens adequadas?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"deposito.embalagens.sim\" name=\"deposito_embalagens\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"deposito.embalagens.obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				<tr ng-class=\"{success: deposito.mobiliario.sim}\">\n" +
    "					<td style=\"vertical-align: middle\">Possui mobiliário adequado?</td>\n" +
    "					<td><input class=\"form-control\" ng-model=\"deposito.mobiliario.sim\" name=\"deposito_mobiliario\" ng-value=\"sim\" type=\"checkbox\" /></td>\n" +
    "					<td><textarea class=\"form-control\" ng-model=\"deposito.mobiliario.obs\" name=\"deposito_mobiliario_obs\"></textarea></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "			 <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <button ng-click=\"mudapasso(1)\" class=\"btn btn-primary\">Próximo passo</button>      \n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "<div class=\"ng-scope\" ng-show=\"passo > 0\">\n" +
    "	<form name=\"formFinal\" action=\"enviar.php\" method=\"POST\">\n" +
    "	<h2>Resumo do formulário</h2>\n" +
    "	<hr />\n" +
    "	<p>Confira as informações preenchidas e retorne aos passos anteriores para alterá-las</p>\n" +
    "	<hr class=\"dotted\" />\n" +
    "	<div class=\"ng-scope\" ng-show=\"passo == 1\">\n" +
    "		<h2>Dados Gerais</h2>\n" +
    "		<hr />\n" +
    "			<h3>Acervo</h3>\n" +
    "			<p><strong>Identificação:</strong> {{dados.acervo.id}}<input value=\"{{dados.acervo.id}}\" type=\"hidden\" name=\"dados_id\" ></p>\n" +
    "			<p><strong>Nome do arquivo:</strong> {{dados.acervo.nome}}<input tvalue=\"{{dados.acervo.nome}}\" ype=\"hidden\" name=\"dados_nome\" ></p>\n" +
    "			<p><strong>Endereço:</strong> {{dados.acervo.endereco}}<input value=\"{{dados.acervo.endereco}}\" type=\"hidden\" name=\"dados_endereco\" ></p>\n" +
    "			<p><strong>Cidade:</strong> {{dados.acervo.cidade}}<input value=\"{{dados.acervo.cidade}}\" type=\"hidden\" name=\"dados_cidade\" ></p>\n" +
    "			<p><strong>Estado:</strong> {{dados.acervo.estado}}<input value=\"{{dados.acervo.estado}}\" type=\"hidden\" name=\"dados_estado\" ></p>\n" +
    "			<p><strong>CEP:</strong> {{dados.acervo.cep}}<input value=\"{{dados.acervo.cep}}\" type=\"hidden\" name=\"dados_cep\" ></p>\n" +
    "			<hr class=\"dotted\" />\n" +
    "			<h3>Responsável</h3>\n" +
    "			<p><strong>Responsável:</strong> {{dados.responsavel.nome}}<input value=\"{{dados.acervo.responsavel}}\" type=\"hidden\" name=\"dados_responsavel\" ></p>\n" +
    "			<p><strong>Telefone:</strong> ({{dados.responsavel.telefone.ddd}}) {{dados.responsavel.telefone.n}}<input value=\"({{dados.responsavel.telefone.ddd}}) {{dados.responsavel.telefone.n}}\" type=\"hidden\" name=\"dados_telefone\" ></p>\n" +
    "			<p><strong>Email:</strong> {{dados.responsavel.email}}<input value=\"{{dados.acervo.email}}\" type=\"hidden\" name=\"dados_email\" ></p>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\" />\n" +
    "		<h2>Material do acervo</h2>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<h3>Material em película</h3>\n" +
    "		<div class=\"table-responsive\" id=\"show_pelicula\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\" class=\"text-center\">Material</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (pés, horas ou unidades)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"7\" style=\"vertical-align: middle\">Bitola</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>16mm</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.mm16.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_16\" ></p></td>\n" +
    "					<td><p>{{material.bitola.mm16.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_16_qte\"></p></td>\n" +
    "					<td><p>{{material.bitola.mm16.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_16_obs\"></p></td>\n" +
    "				</tr> \n" +
    "				<tr>\n" +
    "					<td>35mm</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.mm35.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_35\" ></p></td>\n" +
    "					<td><p>{{material.bitola.mm35.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_35_qte\"></p></td>\n" +
    "					<td><p>{{material.bitola.mm35.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_35_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>8mm</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.mm8.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_8\" ></p></td>\n" +
    "					<td><p>{{material.bitola.mm8.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_8_qte\"></p></td>\n" +
    "					<td><p>{{material.bitola.mm8.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_8_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>S8mm</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.mms8.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_s8\" ></p></td>\n" +
    "					<td><p>{{material.bitola.mms8.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_s8_qte\"></p></td>\n" +
    "					<td><p>{{material.bitola.mms8.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_s8_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>9,5mm</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.mm9_5.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_95\" ></p></td>\n" +
    "					<td><p>{{material.bitola.mm9_5.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_95\"></p></td>\n" +
    "					<td><p>{{material.bitola.mm9_5.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_95_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Outros (especifique no campo \"observação\")</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.bitola.outros.sim}\"><input type=\"hidden\" name=\"material_pelicula_bitola_outros\" ></p></td>\n" +
    "					<td><p>{{material.bitola.outros.qte}}<input type=\"hidden\" name=\"material_pelicula_bitola_outros_qte\"></p></td>\n" +
    "					<td><p>{{material.bitola.outros.obs}}<input type=\"hidden\" name=\"material_pelicula_bitola_outros_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Negativo original</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Cor</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.negativo.cor.sim}\"><input type=\"hidden\" name=\"material_pelicula_negativo_cor\" ></p></td>\n" +
    "					<td><p>{{material.negativo.cor.qte}}<input type=\"hidden\" name=\"material_pelicula_negativo_qte_cor\"></p></td>\n" +
    "					<td><p>{{material.negativo.cor.obs}}<input type=\"hidden\" name=\"material_pelicula_negativo_cor_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>pb</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.negativo.pb.sim}\"><input type=\"hidden\" name=\"material_pelicula_negativo_pb\" ></p></td>\n" +
    "					<td><p>{{material.negativo.pb.qte}}<input type=\"hidden\" name=\"material_pelicula_negativo_pb_qte\"></p></td>\n" +
    "					<td><p>{{material.negativo.pb.obs}}<input type=\"hidden\" name=\"material_pelicula_negativo_pb_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Contratipo<br>(internegativo)</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Cor</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.contratipo.cor.sim}\"><input type=\"hidden\" name=\"material_pelicula_contratipo_cor\" ></p></td>\n" +
    "					<td><p>{{material.contratipo.cor.qte}}<input type=\"hidden\" name=\"material_pelicula_contratipo_cor_obs\"></p></td>\n" +
    "					<td><p>{{material.contratipo.cor.obs}}<input type=\"hidden\" name=\"material_pelicula_contratipo_cor_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>pb</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.contratipo.pb.sim}\"><input type=\"hidden\" name=\"material_pelicula_contratipo_pb\"></p></td>\n" +
    "					<td><p>{{material.contratipo.pb.qte}}<input type=\"hidden\" name=\"material_pelicula_contratipo_pb_qte\"></p></td>\n" +
    "					<td><p>{{material.contratipo.pb.obs}}<input type=\"hidden\" name=\"material_pelicula_contratipo_pb_qte\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Máster<br>(interpositivo)</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Cor</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.interpositivo.co.sim}\"><input type=\"hidden\" name=\"material_pelicula_interpositivo_cor\" ></p></td>\n" +
    "					<td><p>{{material.interpositivo.cor.qte}}<input type=\"hidden\" name=\"material_pelicula_interpositivo_cor_qte\"></p></td>\n" +
    "					<td><p>{{material.interpositivo.cor.obs}}<input type=\"hidden\" name=\"material_pelicula_interpositivo_cor_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>pb</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.interpositivo.pb.sim}\"><input type=\"hidden\" name=\"material_pelicula_interpositivo_pb\" ></p></td>\n" +
    "					<td><p>{{material.interpositivo.pb.qte}}<input type=\"hidden\" name=\"material_pelicula_interpositivo_pb_qte\"></p></td>\n" +
    "					<td><p>{{material.interpositivo.pb.obs}}<input type=\"hidden\" name=\"material_pelicula_interpositivo_pb_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Cópia</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Cor</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.copia.cor.sim}\"><input type=\"hidden\" name=\"material_pelicula_copia_cor\" ></p></td>\n" +
    "					<td><p>{{material.copia.cor.qte}}<input type=\"hidden\" name=\"material_pelicula_copia_cor_qte\"></p></td>\n" +
    "					<td><p>{{material.copia.cor.obs}}<input type=\"hidden\" name=\"material_pelicula_copia_cor_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>pb</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.copia.pb.sim}\"><input type=\"hidden\" name=\"material_pelicula_copia_pb\" ></p></td>\n" +
    "					<td><p>{{material.copia.pb.qte}}<input type=\"hidden\" name=\"material_pelicula_copia_pb_qte\"></p></td>\n" +
    "					<td><p>{{material.copia.pb.obs}}<input type=\"hidden\" name=\"material_pelicula_copia_pb_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td rowspan=\"3\" style=\"vertical-align: middle\">Outros<br>(ex: sobras, copião...)</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>Cor</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.pelicula.outros.co.sim}\"><input type=\"hidden\" name=\"material_pelicula_outros_cor\" ></p></td>\n" +
    "					<td><p>{{material.pelicula.outros.cor.qte}}<input type=\"hidden\" name=\"material_pelicula_outros_cor_qte\"></p></td>\n" +
    "					<td><p>{{material.pelicula.outros.cor.obs}}<input type=\"hidden\" name=\"material_pelicula_outros_cor_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>pb</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.pelicula.outros.pb.sim}\"><input type=\"hidden\" name=\"material_pelicula_outros_pb\" ></p></td>\n" +
    "					<td><p>{{material.pelicula.outros.pb.qte}}<input type=\"hidden\" name=\"material_pelicula_outros_pb_qte\"></p></td>\n" +
    "					<td><p>{{material.pelicula.outros.pb.obs}}<input type=\"hidden\" name=\"material_pelicula_outros_pb_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"form-group\">\n" +
    "		<h3>Material em video</h3>\n" +
    "		<div class=\"table-responsive\" id=\"show_pelicula\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th>Tipo</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (unidades, horas, etc.)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">VHS</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.vhs.sim}\"><input type=\"hidden\" name=\"material_video_vhs\" ></p></td>\n" +
    "					<td><p>{{material.vhs.qte}}<input type=\"hidden\" name=\"material_video_vhs_qte\"></p></td>\n" +
    "					<td><p>{{material.vhs.obs}}<input type=\"hidden\" name=\"material_video_vhs_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Umatic</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.umatic.sim}\"><input type=\"hidden\" name=\"material_video_umatic\" ></p></td>\n" +
    "					<td><p>{{material.umatic.qte}}<input type=\"hidden\" name=\"material_video_umatic_qte\"></p></td>\n" +
    "					<td><p>{{material.umatic.obs}}<input type=\"hidden\" name=\"material_video_umatic_qte\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Betamax</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.betamax.sim}\"><input type=\"hidden\" name=\"material_video_betamax\" ></p></td>\n" +
    "					<td><p>{{material.betamax.qte}}<input type=\"hidden\" name=\"material_video_betamax_qte\"></p></td>\n" +
    "					<td><p>{{material.betamax.obs}}<input type=\"hidden\" name=\"material_video_betamax_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Betacam</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.betacam.sim}\"><input type=\"hidden\" name=\"material_video_betacam\" ></p></td>\n" +
    "					<td><p>{{material.betacam.qte}}<input type=\"hidden\" name=\"material_video_betacam_qte\"></p></td>\n" +
    "					<td><p>{{material.betacam.obs}}<input type=\"hidden\" name=\"material_video_betacam_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Digital</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.digita.sim}\"><input type=\"hidden\" name=\"material_video_digital\" ></p></td>\n" +
    "					<td><p>{{material.digital.qte}}<input type=\"hidden\" name=\"material_video_digital_qte\"></p></td>\n" +
    "					<td><p>{{material.digital.obs}}<input type=\"hidden\" name=\"material_video_digital_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">DVD</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.dvd.sim}\"><input type=\"hidden\" name=\"material_video_dvd\" ></p></td>\n" +
    "					<td><p>{{material.dvd.qte}}<input type=\"hidden\" name=\"material_video_dvd_qte\"></p></td>\n" +
    "					<td><p>{{material.dvd.obs}}<input type=\"hidden\" name=\"material_video_dvd_qte\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Outros</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.video.outros.sim}\"><input type=\"hidden\" name=\"material_video-outros\" ></p></td>\n" +
    "					<td><p>{{material.video.outros.qte}}<input type=\"hidden\" name=\"material_video_outros_qte\"></p></td>\n" +
    "					<td><p>{{material.video.outros.obs}}<input type=\"hidden\" name=\"material_video_outros_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"form-group\">\n" +
    "		<h3>Materiais correlatados</h3>\n" +
    "		<div class=\"table-responsive\" id=\"show_outros\">\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th>Tipo</th>\n" +
    "				<th></th>\n" +
    "				<th>Qte. Aproximada (unidades, caixas, etc.)</th>\n" +
    "				<th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Documentos</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.documentos.sim}\"><input value=\"{{material.documentos.sim}}\"type=\"hidden\" name=\"material_correlatados_documentos\" ></p></td>\n" +
    "					<td><p>{{material.documentos.qts}}<input value=\"{{material.documentos.qts}}\" type=\"hidden\" name=\"material_correlatados_documentos_qte\"></p></td>\n" +
    "					<td><p>{{material.documentos.obs}}<input value=\"{{material.documentos.obs}}\" type=\"hidden\" name=\"material_correlatados_documentos_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Fotos</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.fotos.sim}\"><input type=\"hidden\" name=\"material_correlatados_fotos\" ></p></td>\n" +
    "					<td><p>{{material.fotos.qte}}<input type=\"hidden\" name=\"material_correlatados_fotos_qte\"></p></td>\n" +
    "					<td><p>{{material.fotos.obs}}<input type=\"hidden\" name=\"material_correlatados_fotos_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Cartazes</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.cartazes.sim}\"><input type=\"hidden\" name=\"material_correlatados_cartazes\" ></p></td>\n" +
    "					<td><p>{{material.cartazes.qte}}<input type=\"hidden\" name=\"material_correlatados_cartazes_qte\"></p></td>\n" +
    "					<td><p>{{material.cartazes.obs}}<input type=\"hidden\" name=\"material_correlatados_cartazes_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Áudios</p></td>\n" +
    "					<td ng-class=\"{'bg-success': material.audios.sim}\"><input type=\"hidden\" name=\"material_correlatados_audios\" ></p></td>\n" +
    "					<td><p>{{material.audios.qte}}<input type=\"hidden\" name=\"material_correlatados_audios_qte\"></p></td>\n" +
    "					<td><p>{{material.audios.obs}}<input type=\"hidden\" name=\"material_correlatados_audios_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Outros</td>\n" +
    "					<td ng-class=\"{'bg-success': material.correlatados.outros.sim}\"><input type=\"hidden\" name=\"material_correlatados-outros\" ></p></td>\n" +
    "					<td><p>{{material.correlatados.outros.qte}}<input type=\"hidden\" name=\"material_correlatados_outros_qte\"></p></td>\n" +
    "					<td><p>{{material.correlatados.outros.obs}}<input type=\"hidden\" name=\"material_correlatados_outros_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<h2>Informações sobre o acervo</h2>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Catalogação</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Qte. Aproximada (porcentagem)</th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Está incorporado?<br>\n" +
    "						(com número de entrada ou número de tombo e com informações básicas de conteúdo e técnicas referentes ao material levantadas)</p></td>\n" +
    "					<td ng-class=\"{'bg-success': catalogacao.incorporado.sim}\"><input type=\"hidden\" name=\"acervo_incorporado\" ></p></td>\n" +
    "					<td><p>{{catalogacao.incorporado.qte}}<input type=\"hidden\" name=\"acervo_incorporado_qte\"></p></td>\n" +
    "					<td><p>{{catalogacao.incorporado.obs}}<input type=\"hidden\" name=\"acervo_incorporado_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Está catalogado? <br>\n" +
    "						(conteúdo descrito, sinopse, ficha técnica e/ou indexação)</p></td>\n" +
    "					<td ng-class=\"{'bg-success': catalogacao.catalogado.sim}\"><input type=\"hidden\" name=\"acervo_catalogado\" ></p></td>\n" +
    "					<td><p>{{catalogacao.catalogado.qte}}<input type=\"hidden\" name=\"acervo_catalogado_qte\"></p></td>\n" +
    "					<td><p>{{catalogacao.catalogado.obs}}<input type=\"hidden\" name=\"acervo_catalogado_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Está documentado?<br>\n" +
    "						(possui certificação de direito)</p></td>\n" +
    "					<td ng-class=\"{'bg-success': catalogacao.documentado.sim}\"><input type=\"hidden\" name=\"acervo_documentado\" ></p></td>\n" +
    "					<td><p>{{catalogacao.documentado.qte}}<input type=\"hidden\" name=\"acervo_documentado_qte\"></p></td>\n" +
    "					<td><p>{{catalogacao.documentado.obs}}<input type=\"hidden\" name=\"acervo_documentado_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Está indexado?<br>\n" +
    "						(possui sistema de controle de banco de dados)</p></td>\n" +
    "					<td ng-class=\"{'bg-success': catalogacao.indexado.sim}\"><input type=\"hidden\" name=\"acervo_indexado\" ></p></td>\n" +
    "					<td><p>{{catalogacao.indexado.qte}}<input type=\"hidden\" name=\"acervo_indexado_qte\"></p></td>\n" +
    "					<td><p>{{catalogacao.indexado.obs}}<input type=\"hidden\" name=\"acervo_indexado_obs\" ></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Banco de dados</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui fichas em papel?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': banco.fichas.sim}\"><input type=\"hidden\" name=\"banco_fichas\" ></p></td>\n" +
    "					<td><p>{{banco.fichas.obs}}<input type=\"hidden\" name=\"banco_fichas_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui planilhas em Excel?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': banco.planilhas.sim}\"><input type=\"hidden\" name=\"banco_planilhas\" ></p></td>\n" +
    "					<td><p>{{banco.planilhas.obs}}<input type=\"hidden\" name=\"banco_planilhas_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui base de dados?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': banco.base.sim}\"><input type=\"hidden\" name=\"banco_base\" ></p></td>\n" +
    "					<td><p>{{banco.base.obs}}<input type=\"hidden\" name=\"banco_base_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Os dados estão disponíveis na internet?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': banco.internet.sim}\"><input type=\"hidden\" name=\"banco_internet\" ></p></td>\n" +
    "					<td><p>{{banco.internet.obs}}</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Os dados são de acesso público?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': banco.publico.sim}\"><input type=\"hidden\" name=\"banco_publico\" ></p></td>\n" +
    "					<td><p>{{banco.publico.obs}}<input type=\"hidden\" name=\"banco_publico_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "		<hr class=\"dotted\">\n" +
    "		<div class=\"table-responsive\">\n" +
    "			<h3>Tipo do depósito</h3>\n" +
    "			<table class=\"table table-condensed table-striped table-bordered\">\n" +
    "				<thead>\n" +
    "				<tr><th colspan=\"2\"></th>\n" +
    "				<th>Observações</th>\n" +
    "				</tr></thead>\n" +
    "				<tbody>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui área apropriada para guarda do acervo?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': deposito.apropriado.sim}\"><input type=\"hidden\" name=\"deposito_apropriado\" ></p></td>\n" +
    "					<td><p>{{deposito.apropriado.obs}}<input type=\"hidden\" name=\"deposito_apropriado_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">As áreas estão climatizadas?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': deposito.climatizado.sim}\"><input type=\"hidden\" name=\"deposito_climatizado\" ></p></td>\n" +
    "					<td><p>{{deposito.climatizado.obs}}<input type=\"hidden\" name=\"deposito_climatizado_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui condições de arquivamento?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': deposito.arquivamento.sim}\"><input type=\"hidden\" name=\"deposito_arquivamento\" ></p></td>\n" +
    "					<td><p>{{deposito.arquivamento.obs}}<input type=\"hidden\" name=\"deposito_arquivamento_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui embalagens adequadas?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': deposito.embalagens.sim}\"><input type=\"hidden\" name=\"deposito_embalagens\" ></p></td>\n" +
    "					<td><p>{{deposito.embalagens.obs}}</p></td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td style=\"vertical-align: middle\">Possui mobiliário adequado?</p></td>\n" +
    "					<td ng-class=\"{'bg-success': deposito.mobiliario.sim}\"><input type=\"hidden\" name=\"deposito_mobiliario\" ></p></td>\n" +
    "					<td><p>{{deposito.mobiliario.obs}}<input type=\"hidden\" name=\"deposito_mobiliario_obs\"></p></td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "		<div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "			 <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <input type=\"submit\" class=\"btn btn-success\" value=\"Enviar dados\"/></button>     \n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>");
}]);
