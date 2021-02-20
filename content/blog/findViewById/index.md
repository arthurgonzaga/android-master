---
title: FindViewById
date: "20-02-2021"
id: 5
description: Conectando os componentes à Activity
category: Android
---

Desde o primeiro post, vinhemos trabalhando em um aplicativo estático (que não faz nada), e nesse post finalmente vamos tornar nosso aplicativo em um dinâmico! Para que isso seja possível temos que ligar a interface do usuário (UI) ao código kotlin. 

## Defina os IDs

FindViewById significa no português: "encontrar exibição por ID". E para que podemos encontrar a nossa View _(Todos os componentes e tudo que é visivel para o usuário são views)_, devemos definir um ID para cada View que quisermos conectar com o código kotlin. Deixe o `activity_main.xml` como o código a seguir:

```kotlin
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/txtMessagem"
        android:text="@string/ola_mundo"
        android:textColor="@android:color/black"
        android:textSize="24sp"
        android:textStyle="bold"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/btnMudar"
        android:text="@string/mudar_texto"
        app:layout_constraintTop_toBottomOf="@+id/txtMessagem"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
> Definimos o ID do **TextView** e do **Button** como: **txtTexto, btnMensagem**.

E adicione o a seguinte linha no `strings.xml`:
```kotlin
<string name="mudar_texto">MUDAR TEXTO</string>
```
Por fim, o layout ficará assim:

![](activity.png)

## Conectando-os

Vamos para parte legal! A sua MainActivity.kt deve estar parecida com esta:

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

Para conectar os componentes do arquivo de layout a Activity, é preciso: 
1. Criar as variáveis de acordo com o tipo de componente dentro da Activity;
2. Inicializar estas variáveis usando o método findViewById com o ID do componente.  
<br>
 Veja o código a seguir:
```kotlin
class MainActivity : AppCompatActivity() {

        // Declarando as variáveis
        lateinit var txtMessagem: TextView
        lateinit var btnMudar: Button

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)

            // Inicializando as variáveis
            txtMessagem = findViewById(R.id.txtMessagem)
            btnMudar = findViewById(R.id.btnMudar)
        }
}
```
> **'lateinit'** permite inicializar uma propriedade não nula fora de um construtor

**Prontinho!!** Agora está tudo interligado. Vamos então adicionar interação ao clicar no botão.

## Mudando o texto

Antes de tudo, adicione a seguinte string ao `strings.xml`:
```kotlin
<string name="novo_texto">Eu sou fera!</string>
```

Agora, vamos detectar o pressionamento do **btnMudar** com o método `setOnClickListener`. Logo após, mudamos a propiedade `text` do **txtMensagem** para a string que acabamos de adicionar.

```kotlin
// É executado quando clicado no btnMudar
btnMudar.setOnClickListener {
    // Muda o texto do txtMessagem 
    txtMessagem.text = getText(R.string.novo_texto)
}
```
> o método **getText()** obtem a string do arquivo **strings.xml** usando o **R.string.\<id\_da\_string\>** como parâmetro.


# You made it!
Clique no botão e o texto será alterado, como na imagem a seguir:

![](after_click_result.png)

Nesse post, aprendemos como usar o findViewById e como executar linhas de códigos ao clicaar em um botão. No próximo post, vamos entender por que o **ViewBinding** substitúi o findViewById e por que é mais seguro.

