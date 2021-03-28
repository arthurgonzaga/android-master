---
title: Componentes
date: "06-02-2021"
id: 3
description: Entendendo suas funcionalidades
---

Quando geramos um projeto no Android Studio, observamos que automaticamente é gerado um arquivo de layout com um `TextView`. Nesse post apresentarei alguns dos componentes do android, como o **_TextView_**, e suas funcionalidades essenciais.

## Conceitos básicos

Bom, todo componente no android é representado por uma Tag no arquivo de layout. Veja um Exemplo:

```kotlin
<ComponenteExemplo  
    
    ...

    />
```

Dentro do componente é possível adicionar várias propiedades que varia de componente para componente. No entanto, algumas propiedades são obrigatórias em todos os componentes, como o `android:layout_width` e o `android:layout_height`, que determinam o tamanho da largura e da altura, respectivamente. Ambos recebem os valores **"wrap\_content"**, **"match\_parent"** ou **"um valor fixo"**.

1. **"wrap_content"**
    * Define o tamanho _(largura e da altura)_ do componente baseado no seu conteudo. Ou seja, quanto maior o seu conteúdo, maior o componente.

2. **"match_parent"**
    * Preenche o tamanho total do componente pai. Ou seja, vai se expandir até que preencha todo o tamanho do pai.

3. **"100dp"**
    * A tela é medida em DP _(ou DIP - Density Independent Pixels)_, que é uma unidade de medida que leva em consideração a quantidade de pixels em sua área física. Ou seja, o componente iria possuir **"100dp"** na tela.

 ![](wrap-and-match-content.png)


##TextView

Caso tenha visto o post anterior, pudemos observar que ele é um texto estático e que possui várias propiedades dentro dele. Vamos dar uma olhada em algumas delas:

```kotlin
<TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"

        android:text="Hello World"
        android:textColor="@android:color/black"
        android:textSize="24sp"
        android:textStyle="bold"/>
```
![Representação do Componente](TextView.png)
* Como já vimos, o `android:layout_width` e o `android:layout_height` definem o tamanho (altura e largura) do componente.

* O `android:text` é uma String que será mostrado como texto estático para o usuário. No entanto, **definir esse atributo diretamente no arquivo de layout é ruim por 2 motivos**:
    * Ao criar variações de layout (landscape ou portrait), você deve repetir o texto real e mantê-lo atualizado ao fazer alterações;

    * O aplicativo não pode ser traduzido para outros idiomas.  

> Deve-se colocar todas as Strings que aparecerão para o usuário na **Resources folder** em um **[Arquivo de recursos](../arquivo-de-recursos)**.

* O `android:textColor` define a cor do texto referenciando a um recurso do tipo **color**.

* O `android:textSize` altera o tamanho da font usando a unidade de medida SP **_(Scalable Pixels)_**.

* O `android:textStyle` escolhe o estilo da fonte. Se ela é:
    * normal (já é o estilo padrão)
    * **bold**
    * _italic_


## EditText

É uma caixa de texto que permite o usuário, ao clicar, digitar texto dentro dele. É possível escolher o tipo de texto que nele será digitado, como: **Nome pessoal, email, senha, números**, dentre outros.

```kotlin
<EditText
    android:layout_width="250dp"
    android:layout_height="wrap_content"

    android:hint="Digite o seu nome..."
    android:inputType="textPersonName"
    android:maxLines="1" />

```

![Representação do Componente](EditText.png)
* **Podemos usar todos os atributos de um TextView no EditText**

* `android:hint` mostra uma **dica** ao usuário do que deve ser digitado nesse campo.

* `android:inputType` ajuda o android a escolher melhor tipo de teclado para mostrar baseado no tipo de texto que vai ser digitado. [Ver mais](https://developer.android.com/reference/android/widget/TextView#attr_android:inputType)
    * **Por exemplo:** _Se o inputType for de **number**, o teclado mostrará apenas numeros._

* `android:maxLines` define o número máximo de linhas do EditText

## Button
Como o nome já diz, é um Botão. Com ele é bem fácil de realizar determinadas funções quando o usuário clicar no botão.

```kotlin
<Button
    android:id="@+id/btn"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:backgroundTint="@android:color/black"
    android:text="Button" 
    android:onClick="myFunction"/>
```

![Representação do Componente](Button.png)

* **Podemos usar todos os atributos de um TextView no Button**

* O `android:text` é a mesma propiedade do TextView, no entanto, o texto vai aparecer em letras maiúsculas. 

* Com o `android:backgroundTint` podemos mudar a cor do botão.

* Dá para dispararmos funções da Activity ao clicar no botão de duas formas:

    * Dizendo o nome da função existente na Activity no `android:onClick`, como no exemplo acima.

    * Definindo a função com o `setOnClickListener()` na Activity.

Para podermos conectar os componentes à Activity, precisamos definir um `android:id` para componente. Nesse caso, o nosso Button recebeu o id de **"btn"**.
<hr>

##### Por que conectar os Componentes à Activity? 
Para podermos fazer mudanças nos componentes ou até mesmo em outros componentes, precisamos "sincronizar-los" com a Activity. Assim, trasformamos nosso aplicativo em um aplicativo interativo.  

## You got it!
<image style="width: 70%" src="you-got-it.gif"/> 

Nesse post vimos alguns componentes básicos para entender os projetos futuros. No entanto, usamos Strings diretamente no arquivo de layout e no próximo post aprenderemos como separar os arquivos de recursos do seu código.