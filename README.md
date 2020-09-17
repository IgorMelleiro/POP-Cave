# Pop-Cave-Store
Um e-commerce básico de camisetas POP desenvolvido com Vue e Firebase.

# Instalar node_modules
npm install

# Abrir localhost
npm run serve 
Utilize outra porta se achar necessario ex: (npm run serve -- --port 3000)

# Utilização do projeto
1° Ao abrir o projeto, adicione os produtos ao carrinho.
2° Clique no icone do carrinho na Navbar para ser direcionado para a página.
3° Realize a compra dos produtos.
4° Clique no dropdown ao lado do carrinho para logar como admin. Usuário: admin  -  Senha: 9999 .
5° Observe o histórico de compras e navegue pelas outras abas de produtos pela home!

# Firebase
AVISO
As instruções a seguir são para caso você queira adicionar o seu proprico Cloud Firestore ao projeto.

1° Crie seu projeto no firebase e inicie o Cloud Firestore.
2° Nas configurações copie o codigo da "Firebase SDK snippet" e cole no lugar do que está presente no arquivo firebase.js
3° Crie uma collection no Cloud Firestore e não se esqueça de mudar o nome dela nas referências db.collection presentes nos arquivos .vue 
(ou crie uma collection com o nome 'vue' que já está referenciado)
