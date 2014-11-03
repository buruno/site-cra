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
    "    <h2>repositório de dados sobre conteúdos audiovisuais brasileiros e informações conexas.</h2>\n" +
    "    <hr />\n" +
    "    <p>Você acha interessante a criação de um Centro de Referência audiovisual que possa abrigar o mais completo banco de dados  possível sobre acervos audiovisuais brasileiros e informações conexas existentes?</p>\n" +
    "   <p>Você admite que sua participação ajudando com informações importantes no tocante aos acervos e preservação audiovisual seja uma contribuição essencial para a formulação do projeto?</p>\n" +
    "   <p>Você entende que todas as informações que nos possa transmitir ajudarão na elaboração de um futuro plano de negócios que permitirá ao CRA viabilizar uma série de inciativas úteis a todos os que trabalham com acervos audiovisuais e/ou dependem dos mesmos para novas linhas de ação?</p>\n" +
    "    <strong>Prezado(a) visitante:</strong>\n" +
    "    <p>\n" +
    "      No âmbito dos trabalhos de elaboração do Projeto do Centro de Referência Audiovisual - CRA -, parceria da Secretaria do Audiovisual do MinC com a RNP - Rede Nacional de Ensino e Pesquisa -, do Ministério da Ciência, Tecnologia e Inovação, o CRA foi concebido para tornar-se o grande repositório de dados sobre conteúdos audiovisuais brasilieiros e informações conexas, hoje disponíveis, mas disperos nos diversos órgãos de cultura da aministração federal (Cinemateca Brasileira, Biblioteca Nacional, FUNARTE, etc), em instituições públicas dos estados e municípios do país, bem como nos mais significativos acervos privados.\n" +
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
    "    <hr />\n" +
    "    <p>\n" +
    "      Aqui é onde você pode cadastrar seu acervo a ser acrescentado em nosso banco de dados.\n" +
    "    </p>\n" +
    "    <ol id=\"passos\" class=\"list-unstyled clearfix ng-scope\">\n" +
    "      <li ng-class=\"{passo_atual: passo==1}\"><span>1&ordm;</span><br />passo</li>\n" +
    "      <li ng-class=\"{passo_atual: passo==2}\"><span>2&ordm;</span><br />passo</li>\n" +
    "      <li ng-class=\"{passo_atual: passo==3}\"><span>3&ordm;</span><br />passo</li>\n" +
    "      <li ng-class=\"{passo_atual: passo==4}\"><span>4&ordm;</span><br />passo</li>\n" +
    "    </ol>\n" +
    "    <hr class=\"dotted\" />\n" +
    "    <div class=\"ng-scope\" ng-if=\"passo == 1\">\n" +
    "      <form role=\"form\" id=\"form_dados\" class=\"form-horizontal\">\n" +
    "        <h2>Dados do acervo</h2>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_acervo-id\">Identificação do acervo</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.acervo.id\" ng-value=\"dados.acervo.id\" name=\"dados_acervo-id\" id=\"dados_acervo-id\" placeholder=\"\" type=\"text\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_acervo-nome\">Nome do arquivo</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.acervo.nome\" id=\"dados_acervo-nome\" name=\"dados_acervo-nome\"  type=\"text\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_acervo-endereco\">Endereço</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.acervo.endereco\" id=\"dados_acervo-endereco\" name=\"dados_acervo-endereco\" placeholder=\"\" type=\"text\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <!-- script combo estados -->\n" +
    "          <label class=\"col-sm-2\" for=\"dados_acervo-estado\">Estado</label>\n" +
    "          <span class=\"col-sm-1\">\n" +
    "          <select id=\"dados_acervo-estado\" ng-model=\"dados.acervo.estado\" name=\"dados_acervo-estado\" combo-estado>\n" +
    "          </select>\n" +
    "          </span>\n" +
    "          <label class=\"col-sm-2\" for=\"dados_acervo-cidade\">cidade</label>\n" +
    "          <span class=\"col-sm-4\">\n" +
    "          <select class=\"col-sm-12\" ng-model=\"dados.acervo.cidade\" id=\"dados_acervo-cidade\" name=\"dados_acervo-cidade\">\n" +
    "          </select>\n" +
    "          </span>\n" +
    "          <label class=\"col-sm-1\" for=\"dados_acervo-cep\">CEP</label>\n" +
    "          <span class=\"col-sm-2\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.acervo.cep\" id=\"dados_acervo-cep\" name=\"dados_acervo-cep\" type=\"text\">\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <!-- fim script combo estados -->\n" +
    "      <hr class=\"dotted\">\n" +
    "        <h2>Dados do responsável</h2>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_resp-nome\">Responsável</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.resp.nome\" name=\"dados_resp-nome\" id=\"dados_resp-nome\" placeholder=\"\" type=\"text\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_resp-telefone-ddd\">Telefone</label>\n" +
    "        <span class=\"col-sm-2\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.resp.telefone.ddd\" name=\"dados_resp-telefone-ddd\" id=\"dados_resp-telefone\" placeholder=\"\" type=\"text\">\n" +
    "        </span>\n" +
    "        <span class=\"col-sm-6\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.resp.telefone.n\" name=\"dados_resp-telefone-n\" id=\"dados_resp-telefone-n\" placeholder=\"\" type=\"text\">\n" +
    "        </span>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\"  for=\"dados_resp-email\">E-mail</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.resp.email\" id=\"dados_resp-email\" type=\"email\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"dados_resp-data\">Data do cadastro</label>\n" +
    "        <span class=\"col-sm-2\">\n" +
    "          <input class=\"form-control\" ng-model=\"dados.resp.data\" id=\"dados_resp-data\" name=\"dados_resp-data\" placeholder=\"__/__/__\" type=\"text\">\n" +
    "        </span>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"col-sm-offset-4 col-sm-3\">\n" +
    "         <button ng-click=\"mudapasso(1)\" class=\"btn btn-primary btn-block\">Próximo passo</button>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <!-- formulário de materiais -->\n" +
    "    <div class=\"ng-scope\" ng-if=\"passo == 2\">\n" +
    "      <h2>Detalhamento do tipo de Material</h2>\n" +
    "      <hr class=\"dotted\">\n" +
    "      <form role=\"form\" id=\"form_material\" class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"row\"><input ng-model=\"material.pelicula.show\" value=\"1\" type=\"checkbox\"> Material em <strong>película</strong>?</label>\n" +
    "        </div>\n" +
    "        <div class=\"table-responsive\" ng-show=\"material.pelicula.show\" id=\"show_pelicula\">\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr ng-class=\"{success: CHK}\"><th colspan=\"2\" class=\"text-center\">Material</th>\n" +
    "            <th></th>\n" +
    "            <th>Qte. Aproximada (pés, horas ou unidades)</th>\n" +
    "            <th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: material.bitola}\">\n" +
    "              <td rowspan=\"7\" style=\"vertical-align: middle\">Bitola</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.bitola.16mm.true}\">\n" +
    "              <td>16mm</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.16mm.true\" name=\"material_bitola-16mm\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.16mm.qte\" name=\"material_bitola-16mm-qte\" type=\"text\"></td>\n" +
    "              <td><textarea name=\"material_bitola-16mm-obs\" class=\"form-control\"></textarea></td>\n" +
    "            </tr> \n" +
    "            <tr ng-class=\"{success: material.bitola.35mm.true}\">\n" +
    "              <td>35mm</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.35mm.true\" name=\"material_bitola-35mm\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.35mm.qte\" name=\"material_bitola-35mm-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.bitola.35mm.obs\" name=\"material_bitola-35mm-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.bitola.8mm.true}\">\n" +
    "              <td>8mm</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.8mm.true\" name=\"material_bitola-8mm\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.8mm.qte\" name=\"material_bitola-8mm-qte\" type=\"text\"></td>\n" +
    "              <td><textarea ng-model=\"material.bitola.8mm.obs\" name=\"material_bitola-8mm-obs\" class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.bitola.s8mm.true}\">\n" +
    "              <td>S8mm</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.s8mm.true\" name=\"material_bitola-s8mm\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.s8mm.qte\" name=\"material_bitola-s8mm-qte\" type=\"text\"></td>\n" +
    "              <td><textarea ng-model=\"material.bitola.s8mm.obs\" name=\"material_bitola-s8mm-obs\" class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.bitola.9_5mm.true}\">\n" +
    "              <td>9,5mm</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.9_5mm.true\" name=\"material_bitola-9.5mm\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.9_5mm.qte\" name=\"material_bitola-9.5mm\" type=\"text\"></td>\n" +
    "              <td><textarea ng-model=\"material.bitola.9_5mm.obs\" name=\"material_bitola-9.5mm-obs\" class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.bitola.outros.true}\">\n" +
    "              <td>Outros (especifique no campo \"observação\")</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.outros.true\" name=\"material_bitola-outros\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.bitola.outros.qte\" name=\"material_bitola-outros-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\"ng-model=\"material.bitola.outros.obs\" name=\"material_bitola-outros-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.negativo}\">\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Negativo original</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.negativo.cor.true}\">\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.negativo.cor.true\" name=\"material_negativo-cor\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.negativo.cor.qte\" name=\"material_negativo-qte-cor\" type=\"text\"></td>\n" +
    "              <td><textarea ng-model=\"material.negativo.cor.obs\" name=\"material_negativo-cor-obs\" class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.negativo.pb.true}\">\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.negativo.pb.true\" name=\"material_negativo-pb\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.negativo.pb.qte\" name=\"material_negativo-pb-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.negativo.pb.obs\" name=\"material_negativo-pb-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.contratipo}\">\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Contratipo<br>(internegativo)</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.contratipo.cor.true}\">\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.contratipo.cor.true\" name=\"material_contratipo-cor\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.contratipo.cor.qte\" name=\"material_contratipo-cor-obs\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.contratipo.cor.obs\" name=\"material_contratipo-cor-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.contratipo.pb.true}\">\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" ng-model=\"material.contratipo.pb.true\" name=\"material_contratipo-pb\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.contratipo.pb.qte\" name=\"material_contratipo-pb-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.contratipo.pb.obs\" name=\"material_contratipo-pb-qte\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.interpositivo}\">\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Máster<br>(interpositivo)</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.interpositivo.cor.true}\">\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.interpositivo.co.truer\" name=\"material_interpositivo-cor\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.interpositivo.cor.qte\" name=\"material_interpositivo-cor-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.interpositivo.cor.obs\" name=\"material_interpositivo-cor-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.interpositivo.pb.true}\">\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.interpositivo.pb.true\" name=\"material_interpositivo-pb\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.interpositivo.pb.qte\" name=\"material_interpositivo-pb-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.interpositivo.pb.obs\" name=\"material_interpositivo-pb-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.copia}\">\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Cópia</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.copia.cor.true}\">\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.copia.cor.true\" name=\"material_copia-cor\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.copia.cor.qte\" name=\"material_copia-cor-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" nd-model=\"material_copia-cor-obs\" name=\"material_copia-cor-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.copia.pb.true}\">\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.copia.pb.true\" name=\"material_copia-pb\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.copia.pb.qte\" name=\"material_copia-pb-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" nd-model=\"material.copia-pb.obs\" name=\"material_copia-pb-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.pelicula.outros}\">\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Outros<br>(ex: sobras, copião...)</td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.pelicula.outros.cor.true}\">\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.pelicula.outros.co.truer\" name=\"material-pelicula-outros-cor\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.pelicula.outros.cor.qte\" name=\"material-pelicula-outros-cor-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.pelicula.outros.cor.obs\" name=\"material-pelicula-outros-cor-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.pelicula.outros.pb.true}\">\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.pelicula.outros.pb.true\" name=\"material-pelicula-outros-pb\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.pelicula.outros.pb.qte\" name=\"material-pelicula-outros-pb-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.pelicula.outros.pb.obs\" name=\"material-pelicula-outros-pb-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"form-group\">\n" +
    "        <label class=\"row\"><input ng-model=\"material.video.show\" value=\"1\" type=\"checkbox\"> Material em <strong>vídeo</strong>?</label>\n" +
    "        </div>\n" +
    "        <div class=\"table-responsive\" ng-show=\"material.video.show\" id=\"show_pelicula\">\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr><th>Tipo</th>\n" +
    "            <th></th>\n" +
    "            <th>Qte. Aproximada (unidades, horas, etc.)</th>\n" +
    "            <th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: material.vhs.true}\">\n" +
    "              <td style=\"vertical-align: middle\">VHS</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.vhs.true\" name=\"material_vhs\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.vhs.qte\" name=\"material_vhs-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.vhs.obs\" name=\"material_vhs-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.umatic.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Umatic</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.umatic.true\" name=\"material_umatic\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.umatic.qte\" name=\"material_umatic-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.umatic.obs\" name=\"material_umatic-qte\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.betamax.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Betamax</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.betamax.true\" name=\"material_betamax\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.betamax.qte\" name=\"material_betamax-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.betamax.obs\" name=\"material_betamax-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.betacam.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Betacam</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.betacam.true\" name=\"material_betacam\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.betacam.qte\" name=\"material_betacam-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.betacam.obs\" name=\"material_betacam-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.digital.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Digital</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.digita.truel\" name=\"material_digital\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.digital.qte\" name=\"material_digital-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.digital.obs\" name=\"material_digital-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.dvd.true}\">\n" +
    "              <td style=\"vertical-align: middle\">DVD</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.dvd.true\" name=\"material_dvd\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.dvd.qte\" name=\"material_dvd-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.dvd.obs\" name=\"material_dvd-qte\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.video.outros.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Outros<br>(especifique no campo \"observação\")</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.video.outros.true\" name=\"material_video-outros\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" ng-model=\"material.video.outros.qte\" name=\"material_video-outros-qte\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.video.outros.obs\" name=\"material_video-outros-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"row\"><input ng-model=\"material.outros.show\" value=\"1\" type=\"checkbox\"> Materiais correlatados (<strong>cartazes</strong>, <strong>fotos</strong>, etc)?</label>\n" +
    "        </div>\n" +
    "        <div class=\"table-responsive\" ng-show=\"material.outros.show\" id=\"show_outros\">\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr ng-class=\"{success: CHK}\"><th>Tipo</th>\n" +
    "            <th></th>\n" +
    "            <th>Qte. Aproximada (unidades, caixas, etc.)</th>\n" +
    "            <th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: material.documentos.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Documentos</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.documentos.true\" name=\"material_documentos\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.documentos.qts\" name=\"material_documentos-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.documentos.obs\" name=\"material_documentos-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.fotos.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Fotos</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.fotos.true\" name=\"material_fotos\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.fotos.qte\" name=\"material_fotos-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.fotos.obs\" name=\"material_fotos-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.cartazes.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Cartazes</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.cartazes.true\" name=\"material_cartazes\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.cartazes.qte\" name=\"material_cartazes-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.cartazes.obs\" name=\"material_cartazes-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.audios.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Áudios</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.audios.true\" name=\"material_audios\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.audios.qte\" name=\"material_audios-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.audios.obs\" name=\"material_audios-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: material.correlatados.outros.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Outros<br>(especifique no campo \"observação\")</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.correlatados.outros.true\" name=\"material_correlatados-outros\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"material.correlatados.outros.qte\" name=\"material_correlatados-outros-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"material.correlatados.outros.obs\" name=\"material_correlatados-outros-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "           <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <button ng-click=\"mudapasso(1)\" class=\"btn btn-primary\">Próximo passo</button>      \n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"ng-scope\" ng-if=\"passo == 3\">\n" +
    "      <h2>Informações sobre o acervo</h2>\n" +
    "      <hr class=\"dotted\">\n" +
    "      <form role=\"form\" id=\"form_material\" class=\"form-horizontal\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <h3>Catalogação</h3>\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr><th colspan=\"2\"></th>\n" +
    "            <th>Qte. Aproximada (porcentagem)</th>\n" +
    "            <th>Observações</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: acervo.incorporado.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Está incorporado?<br>\n" +
    "                (com número de entrada ou número de tombo e com informações básicas de conteúdo e técnicas referentes ao material levantadas)</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.incorporado.true\" name=\"acervo_incorporado\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.incorporado.qte\" name=\"acervo_incorporado-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"acervo.incorporado.obs\" name=\"acervo_incorporado-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: acervo.catalogado.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Está catalogado? <br>\n" +
    "                (conteúdo descrito, sinopse, ficha técnica e/ou indexação)</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.catalogado.true\" name=\"acervo_catalogado\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.catalogado.qte\" name=\"acervo_catalogado-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"acervo.catalogado.obs\" name=\"acervo_catalogado-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: acervo.documentado.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Está documentado?<br>\n" +
    "                (possui certificação de direito)</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.documentado.true\" name=\"acervo_documentado\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.documentado.qte\" name=\"acervo_documentado-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"acervo.documentado.obs\" name=\"acervo_documentado-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: acervo.indexado.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Está indexado?<br>\n" +
    "                (possui sistema de controle de banco de dados)</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.indexado.true\" name=\"acervo_indexado\" type=\"checkbox\"></td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"acervo.indexado.qte\" name=\"acervo_indexado-qte\" type=\"text\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"acervo.indexado.obs\" name=\"acervo_indexado-obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <h3>Banco de dados</h3>\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr><th colspan=\"2\"></th>\n" +
    "            <th>Observações</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: banco.fichas.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui fichas em papel?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"banco.fichas.true\" name=\"banco_fichas\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"banco.fichas.obs\" name=\"banco_fichas-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: banco.planilhas.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui planilhas em Excel?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"banco.planilhas.true\" name=\"banco_planilhas\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"banco.planilhas.obs\" name=\"banco_planilhas-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: banco.base.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui base de dados?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"banco.base.true\" name=\"banco_base\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"banco.base.obs\" name=\"banco_base-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: banco.internet.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Os dados estão disponíveis na internet?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"banco.internet.true\" name=\"banco_internet\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"banco.internet.obs\" ></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: banco.publico.true}\">\n" +
    "              <td style=\"vertical-align: middle\">Os dados são de acesso público?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"banco.publico.true\" name=\"banco_publico\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"banco.publico.obs\" name=\"banco_publico-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <hr class=\"dotted\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <h3>Tipo do depósito</h3>\n" +
    "          <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "            <thead>\n" +
    "            <tr><th colspan=\"2\"></th>\n" +
    "            <th>Observações</th>\n" +
    "            </tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-class=\"{success: deposito.apropriado}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui área apropriada para guarda do acervo?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"deposito.apropriado\" name=\"deposito_apropriado\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"deposito.apropriado.obs\" name=\"deposito_apropriado-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: deposito.climatizado}\">\n" +
    "              <td style=\"vertical-align: middle\">As áreas estão climatizadas?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"deposito.climatizado\" name=\"deposito_climatizado\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"deposito.climatizado.obs\" name=\"deposito_climatizado-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: deposito.arquivamento}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui condições de arquivamento?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"deposito.arquivamento\" name=\"deposito_arquivamento\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"deposito.arquivamento.obs\" name=\"deposito_arquivamento-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: deposito.embalagens}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui embalagens adequadas?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"deposito.embalagens\" name=\"deposito_embalagens\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"deposito.embalagens.obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr ng-class=\"{success: deposito.mobiliario}\">\n" +
    "              <td style=\"vertical-align: middle\">Possui mobiliário adequado?</td>\n" +
    "              <td><input class=\"form-control\" ng-model=\"deposito.mobiliario\" name=\"deposito_mobiliario\" type=\"checkbox\"></td>\n" +
    "              <td><textarea class=\"form-control\" ng-model=\"deposito.mobiliario.obs\" name=\"deposito_mobiliario-obs\"></textarea></td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "           <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <button ng-click=\"mudapasso(1)\" class=\"btn btn-primary\">Próximo passo</button>      \n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"ng-scope\" ng-if=\"passo == 4\">\n" +
    "      <h2>Resumo do formulário</h2>\n" +
    "      <p>Confira as informações preenchidas e retorne aos passos anteriores para alterá-las</p>\n" +
    "      <div>\n" +
    "      {{dados}}\n" +
    "      </div>\n" +
    "      <div>\n" +
    "      {{material}}\n" +
    "      </div>\n" +
    "      <div>\n" +
    "      {{acervo}}\n" +
    "      </div>\n" +
    "      <div>\n" +
    "      {{banco}}\n" +
    "      </div>\n" +
    "      <div>\n" +
    "      {{deposito}}\n" +
    "      </div>\n" +
    "        <div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "           <button ng-click=\"mudapasso(-1)\" class=\"btn btn-warning\">Passo anterior</button> <button ng-click=\"mudapasso(1)\" class=\"btn btn-success\">Enviar dados</button>     \n" +
    "        </div>\n" +
    "\n" +
    "    </div>");
}]);
