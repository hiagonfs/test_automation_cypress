@cadastro_usuarios
Feature: Cadastro de usuários

  Background:
    Given eu acesso a página inicial do sistema

  @acesso_pagina_inicial
  Scenario: Acessar a página inicial do sistema
    Then devo visualizar o título: Cadastro de usuários

  @usuario_basico
  Scenario: Cadastrar usuario válido e com sucesso
    When inserir o nome
    And inserir o email
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar as informações do usuário cadastrado

  @excluir_usuario
  Scenario: Excluir usuario cadastrado no sistema
    When inserir o nome
    And inserir o email
    And inserir a senha
    And pressiono o botao Cadastrar
    And visualizar as informações do usuário cadastrado
    And clicar no botão excluir
    Then o usuario deve ser apagado da tabela


  @usuario_nome_vazio
  Scenario: Cadastrar usuário com nome vazio
    When inserir o email
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo Nome é obrigatório.

  @usuario_email_vazio
  Scenario: Cadastrar usuário com email vazio
    When inserir o nome
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo E-mail é obrigatório.

  @usuario_senha_vazia
  Scenario: Cadastrar usuário com senha vazia
    When inserir o nome
    And inserir o email
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: O campo Senha é obrigatório.

  @usuario_nome_incompleto
  Scenario: Cadastrar usuário com nome incompleto
    When inserir o nome incompleto
    And inserir o email
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: Por favor, insira um nome completo.

  @usuario_email_invalido
  Scenario: Cadastrar usuário com email invalido
    When inserir o nome
    And inserir o email invalido
    And inserir a senha
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: Por favor, insira um e-mail válido.

  @usuario_senha_incompleta
  Scenario: Cadastrar usuário com senha incompleta
    When inserir o nome
    And inserir o email
    And inserir a senha incompleta
    And pressiono o botao Cadastrar
    Then devo visualizar a mensagem: A senha deve conter ao menos 8 caracteres.