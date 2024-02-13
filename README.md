
# GradientBackground

Este é um exemplo de como criar um fundo animado com um gradiente de cores utilizando componentes estilizados no React.

## Animação

O componente define uma animação de keyframes chamada `gradientAnimation`. Esta animação altera a posição do background ao longo do tempo, criando um efeito de movimento do gradiente.

## Componente Estilizado

O `AnimatedGrid` é um componente estilizado baseado no componente `Grid` do Material UI. Ele é estilizado para ocupar 100% da altura e largura e tem um gradiente linear como background. Este gradiente é animado usando a animação `gradientAnimation`.

## Props

O componente `GradientBackground` aceita um único prop: `children`. Este prop é do tipo `ReactNode`, o que significa que pode ser qualquer coisa que o React possa renderizar. Isso torna o `GradientBackground` um componente de ordem superior que pode envolver outros componentes.

## Uso

Para usar o componente `GradientBackground`, você pode envolver qualquer outro componente ou conteúdo que deseja ter o fundo animado. Por exemplo:

```jsx
<GradientBackground>
  <SeuComponente />
</GradientBackground>
```

Neste exemplo, `SeuComponente` terá o fundo animado fornecido pelo `GradientBackground`.
