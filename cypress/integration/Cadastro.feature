#language:pt

Feature: Página de Cadastro de usuários

  Scenario: Acessar a página inicial do sistema
    Given eu acesso a página inicial do sistema
    Then devo visualizar o título: Cadastro de usuários

  Scenario: Visualizar o formulário de cadastro
    Given eu acesso a página inicial do sistema
    When o formulário estiver visível
    Then os campos devem estar vazios


