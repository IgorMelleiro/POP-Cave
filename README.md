# Pop-Cave-Store
Um e-commerce básico de camisetas POP desenvolvido com Vue e Firebase.

# Instalar node_modules
npm install

# Abrir localhost
npm run serve <br>
Utilize outra porta se achar necessário ex: (npm run serve -- --port 3000)

# Utilização do projeto
1° Ao abrir o projeto, adicione os produtos ao carrinho.<br>
2° Clique no icone do carrinho na Navbar para ser direcionado para a página.<br>
3° Realize a compra dos produtos.<br>
4° Clique no dropdown ao lado do carrinho para logar como admin. Usuário: admin  -  Senha: 9999 .<br>
5° Observe o histórico de compras e navegue pelas outras abas de produtos pela home!<br>

# Firebase
AVISO<br>
As instruções a seguir são para caso você queira adicionar o seu próprio Cloud Firestore ao projeto.<br>

1° Crie seu projeto no firebase e inicie o Cloud Firestore.<br>
2° Nas configurações copie o codigo da "Firebase SDK snippet" e cole no lugar do que está presente no arquivo firebase.js<br>
3° Crie uma collection no Cloud Firestore e não se esqueça de mudar o nome dela nas referências db.collection presentes nos arquivos .vue <br>
(ou crie uma collection com o nome 'vue' que já está referenciado)

# Link do Deploy
Vercel -
https://pop-cave-store-obl3ic97g.vercel.app/
