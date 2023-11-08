Neste documento você encontrará a arquitetura do projeto e informações adicionais sobre o mesmo.
Em caso de duvida, entrar em contato pelo jetBrains.

Raiz do projeto : Arquivos de configuração das extensões e pasta SRC;

#SRC:
src/server.ts : Arquivo responsavel por rodar a API(via Express)

#DATABASE:

src/database : Pasta responsavel por lidar com o banco de dados e com as tabelas
src/database/migrations : Pasta responsavel por lidar com as migrations do DB

#ENTITIES:

src/entities : Pasta responsavel por definir as entidades do projeto, que serão gerenciadas pelo typeORM

#MODULES:

src/modules : Pasta responsavel por lidar com os modulos da aplicação EX: Users, Monitorias
src/modules/users : Pasta responsavel por lidar com a classe User
src/modules/nomeDoModulo/repositories : Pasta responsavel por lidar com os repositorios do projeto(INTERFACES)
    src/modules/nomeDoModulo/repositories/implementations : Implementação das interfaces de repositories
src/modules/nomeDoModulo/services : Pasta responsavel por executar servicos EX: Enviar email, consumir API
src/modules/nomeDoModulo/useCases : Pasta responsavel por lidar com os useCases do app
    src/modules/nomeDoModulo/useCases/nomeDoUseCase : Pasta que lida com o UseCase e o Controller do UseCase

#ROUTES:

src/routes : Pasta responsavel por lidar com as rotas da API

#SHARED:

src/shared : Pasta que lida com dados/componentes utilizados por toda a aplicação
src/shared/container : Pasta que lida com os container do typeORM

Informações adicionais sobre a arquitetura:
    Para instalar as dependencias execute yarn install
    Para executar as migrations execute yarn typeorm migration:run
    Para rodar a API execute yarn dev
    No arquivo ormconfig.json está as configurações do typeORM
    No arquivo swagger.json  está a configuração da documentação da API
    No arquivo .env encontram-se as variaveis de ambiente do projeto
    O projeto irá utilizar TypeScript como linguagem principal
    O projeto irá utilizar pro padrão o yarn para gerenciar as dependencias
    O projeto irá utilizar o Prettier e o ESlint para padronizar o codigo
    O projeto busca aplicar os padrões da arquitetura SOLID


    
