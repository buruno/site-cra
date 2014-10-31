angular.module('templates-app', ['about/about.tpl.html', 'cadastro/cadastro.tpl.html', 'home/home.tpl.html', 'questionario/questionario.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("cadastro/cadastro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cadastro/cadastro.tpl.html",
    "    <h1>Cadastro</h1>\n" +
    "    <hr />\n" +
    "    <p>\n" +
    "      Cadastre-se para receber notificações e novidades acerca do desenvolvimento do portal.\n" +
    "    </p>\n" +
    "    <hr />\n" +
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
    "    <hr />\n" +
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
    "    <ol class=\"list-unstyled clearfix\" id=\"passos\" >\n" +
    "      <li class=\"passo_atual\"><span>1&ordm;</span><br />passo</li>\n" +
    "      <li><span>2&ordm;</span><br />passo</li>\n" +
    "      <li><span>3&ordm;</span><br />passo</li>\n" +
    "      <li><span>4&ordm;</span><br />passo</li>\n" +
    "    </ol>\n" +
    "    <hr class=\"dotted\" />\n" +
    "    <form role=\"form\" class=\"form-horizontal\">\n" +
    "      <h2>Dados do acervo</h2>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Identificação do acervo</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Nome do arquivo</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Endereço</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2\" for=\"exampleInputPassword1\">Estado</label>\n" +
    "          <span class=\"col-sm-1\">\n" +
    "            <select >\n" +
    "              <option>SP</option>\n" +
    "            </select>\n" +
    "          </span>\n" +
    "          <label class=\"col-sm-2\" for=\"exampleInputPassword1\">cidade</label>\n" +
    "          <span class=\"col-sm-4\">\n" +
    "            <select class=\"col-sm-12\">\n" +
    "              <option>São José dos Campos</option>\n" +
    "            </select>\n" +
    "          </span>\n" +
    "          <label class=\"col-sm-1\" for=\"exampleInputPassword1\">CEP</label>\n" +
    "          <span class=\"col-sm-2\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    <hr class=\"dotted\" />\n" +
    "      <h2>Dados do responsável</h2>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Responsável</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Telefone</label>\n" +
    "        <span class=\"col-sm-2\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "        <span class=\"col-sm-6\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">E-mail</label>\n" +
    "        <span class=\"col-sm-8\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Data do cadastro</label>\n" +
    "        <span class=\"col-sm-2\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"__/__/__\" />\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-offset-4 col-sm-3\">\n" +
    "        &ensp;<button type=\"submit\" class=\"btn btn-primary btn-block\">Próximo passo</button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <br />\n" +
    "    <hr />\n" +
    "    <h2>Detalhamento do tipo de Material</h2>\n" +
    "     <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-8\">Material em <strong>película</strong>? <input type=\"checkbox\" /></label>\n" +
    "     </div>\n" +
    "      <div class=\"table-responsive hide\" id=\"pelicula\" >\n" +
    "        <form role=\"form\" class=\"form-horizontal\">\n" +
    "        <table class=\"table table-condensed table-striped table-bordered\">\n" +
    "          <thead>\n" +
    "            <th>Material</th>\n" +
    "            <th>Tipo</th>\n" +
    "            <th></th>\n" +
    "            <th>Qte. Aproximada (pés, horas ou unidades)</th>\n" +
    "            <th>Observações (qualidade, organização, conteúdo, etc)</th>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"7\" style=\"vertical-align: middle\">Bitola</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>16mm</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>35mm</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>8mm</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>S8mm</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>9,5mm</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Outros (especifique no campo \"observação\")</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Negativo original</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Contratipo<br />(internegativo)</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Máster<br />(interpositivo)</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Cópia</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td rowspan=\"3\" style=\"vertical-align: middle\">Outros<br />(ex: sobras, copião...)</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>Cor</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>pb</td>\n" +
    "              <td><input class=\"form-control\" type=\"checkbox\" /></td>\n" +
    "              <td><input class=\"form-control\" type=\"text\" /></td>\n" +
    "              <td><textarea class=\"form-control\"></textarea></td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </form>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-8\">Material em <strong>vídeo</strong>? <input type=\"checkbox\" /></label>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-8\">Materiais correlatos (cartazes, fotos, etc)? <input type=\"checkbox\" /></label>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "");
}]);
