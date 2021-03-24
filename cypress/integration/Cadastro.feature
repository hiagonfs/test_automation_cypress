Feature: Página de Cadastro de usuários

  Scenario: Acessar a página inicial do sistema
    Given eu acesso a página inicial do sistema
    Then devo visualizar o título: Cadastro de usuários

  Scenario: Cadastrar usuário com nome vazio
    Given eu acesso a página inicial do sistema
    When inserir o email
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo Nome é obrigatório.

  Scenario: Cadastrar usuário com email vazio
    Given eu acesso a página inicial do sistema
    When inserir o nome
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo E-mail é obrigatório.

  Scenario: Cadastrar usuário com senha vazia
    Given eu acesso a página inicial do sistema
    When inserir o nome
    And inserir o email
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo Senha é obrigatório.