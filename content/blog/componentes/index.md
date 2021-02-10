---
title: Componentes
date: "06-05-2021"
id: 3
description: Conectando os componentes a Activity
category: Android
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
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
```

## Arquivo de recursos

## EditText

## Button

## findViewById
## ViewBinding
![](../../assets/em-construção.png)