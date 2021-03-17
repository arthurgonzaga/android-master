---
title: ViewBinding
date: "07-03-2021"
id: 6
description: O que é, e por que usar-lo ao invés do findViewById?
category: Android
---

No post anterior, usamos a função [_findViewById()_](https://android-master.com.br/findViewById/) para "achar" às views no arquivo XML. No entanto, quando o aplicativo tem views  mais complexas, o _findViewById()_ torna o aplicativo mais lento, porque o Android procura a sua View entre a hierarquia das Views em tempo de execução. Mas, felizmente, existe uma maneira melhor.

## Introdução

O ViewBinding (Vinculação de Views), como o nome já diz, vincula as Views diretamente à Activity, não necessitando o uso do _findViewById()_. Então, ao invés de procurar cada View, o ViewBinding **gera um classe automaticamente**, que contêm todos os componentes de um arquivo de layout em variáveis. Vamos entender mais:

```kotlin
// Usando findViewById
val txtMessagem = findViewById(R.id.txtMessagem) as TextView
val btnMudar = findViewById(R.id.btnMudar) as Button

// Usando ViewBinding
binding.txtMessagem
binding.btnMudar
```
> O binding é uma variável que vincula o que está na UI à sua Activity,

É gerado uma Classe para todos os arquivos de layout, e o nome dessa classe segue o padrão:  
<br>
**NomeDoLayout+Binding**

###### Exemplo:
    Arquivos de Layout: 
        activity_main.xml
        activity_detalhe.xml

    Classes geradas:
        ActivityMainBinding
        ActivityDetalheBinding


## Implementação

Antes de tudo, adicione o `buildFeatures` ao build.gradle (Module):

```
android{
    ...
    buildFeatures{
        viewBinding true
    }
}
```
> Clique em **Sync now** e o ViewBinding estará ativado.

**Agora, para configurar uma instância da classe de ViewBinding para ser usada com uma Activity, siga as seguintes etapas no método onCreate() da Activity:**

1. Chame o método estático `inflate()` incluído na classe de vinculação gerada. Isso cria uma instância da classe de vinculação para a Activity usar.

2. Receba uma referência da View raiz chamando o método binding.root

3. Transmita a visualização raiz para `setContentView()` a fim de torná-la a visualização ativa na tela.

```kotlin
// Declarando a variável binding 
private lateinit var binding: ActivityMainBinding

override fun onCreate(savedInstanceState: Bundle) {
    super.onCreate(savedInstanceState)
    
    // Inicializa a binding passando o layoutInflater como parâmetro
    binding = ActivityMainBinding.inflate(layoutInflater)

    // Definindo a View que será apresentada nessa Activity
    val view = binding.root
    setContentView(view)
}
```

Após essa configuração, podemos usar essa variável para referenciar os componentes presentes no arquivo de layout:

```kotlin
// É executado quando clicado no btnMudar
binding.btnMudar.setOnClickListener {
    // Muda o texto do txtMessagem 
    binding.txtMessagem.text = getText(R.string.novo_texto)
}
```

Nesse último exemplo, o código até ficou mais extenso do que usando findViewById(). Mas quando há muitos componentes, a diferença é clara.  
**Veja esta próximo comparação:**

##### Usando findViewById
```kotlin
// Declarando TODOS os componentes
val txtMessagem = findViewById(R.id.txtMessagem) as TextView
val txtDescricao = findViewById(R.id.txtDescricao) as TextView
val btnMudar = findViewById(R.id.btnMudar) as Button
val btnEditar = findViewById(R.id.btnEditar) as Button

// Usando os componentes
txtMessagem.text = "Hello World"
btnMudar.text = "MUDAR TEXTO"
btnEditar.text = "EDITAR TEXTO"
```
> Há a necessidade de "encontrar" todos os componentes para depois poder usa-los.
##### Usando ViewBinding
```kotlin
// Declarando o binding
val binding = ActivityMainBinding.inflate(layoutInflater)

// Setando a view raiz do binding
setContentView(binding.root)

// Usando os componentes
binding.txtMessagem.text = "Hello World"
binding.btnMudar.text = "MUDAR TEXTO"
binding.btnEditar.text = "EDITAR TEXTO"
```
> Observe que não precisamos declarar todos os componentes para depois poder usar, pois a classe gerada já realiza esse trabalho para a gente.
## Vantagens

* O código é mais curto, mais fácil de ler e de manter do que o código que usa _findViewById()_.

* O sistema Android percorre a hierarquia de Views apenas uma vez para obter cada View, e isso acontece durante a inicialização do aplicativo, não no tempo de execução quando o usuário está interagindo com o aplicativo.

* Como esse tipo de vinculação cria referências diretas a visualizações, não há risco de um null pointer exception devido a um código de visualização inválido. 

* Você obtém segurança de tipo para acessar visualizações. (Segurança de tipo significa que o compilador valida os tipos durante a compilação e gera um erro se você tentar atribuir o tipo errado a uma variável.)

## Conclusão

<image style="width: 300px;
  height: 150px;
  object-fit: cover;" src="sunglasses.gif"/>

Neste post vimos como e porque usar o ViewBinding e entendemos suas vantagens. O uso do ViewBinding é super recomendado, logo, vamos estar usando-o na maioria dos nossos projetos futuros. No próximo post vamos estar desenvolmendo um aplicativo usando os conceitos aplicados até o momento.