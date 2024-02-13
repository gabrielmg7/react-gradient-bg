import { Grid, Typography } from "@mui/material"
import GradientBackground from "./GradientBackground"


function App() {

  return (
    <GradientBackground>
      <Grid container direction="column">
      <Typography variant="h5">Gradient Background</Typography>
      <Typography>
        <Typography>
          Este código define um componente React chamado GradientBackgroundGrid que renderiza um componente Grid do Material-UI com um fundo de gradiente animado.
        </Typography>
        <Typography variant="h6">Como funciona</Typography>
        <Typography variant="body1">
          O gradiente é definido usando a propriedade background-image com a função linear-gradient. As cores do gradiente são especificadas em formato RGBA, permitindo a inclusão de um valor de opacidade. Neste caso, a opacidade é definida como 0.6, o que significa que o fundo terá 40% de transparência.
        </Typography>
        <Typography variant="h6">Animação</Typography>
        <Typography variant="body1">
          A animação do gradiente é definida usando a função keyframes do styled-components. A animação altera a posição do background ao longo do tempo, criando o efeito de transição de cores. A animação é aplicada ao Grid com a propriedade animation.
        </Typography>
        <Typography variant="h6">Children</Typography>
        <Typography variant="body1">
          O componente GradientBackgroundGrid aceita children como propriedade, que são renderizados dentro do Grid. Isso permite que outros componentes sejam renderizados dentro do GradientBackgroundGrid, sobrepondo o fundo de gradiente.
        </Typography>
        <Typography variant="h6">Estilização</Typography>
        <Typography variant="body1">
          O Grid é estilizado para ocupar toda a altura e largura da janela de visualização, garantindo que o gradiente cubra toda a tela. As propriedades top, left, right e bottom são definidas como 100%, o que pode não ser o comportamento esperado, pois essas propriedades normalmente são usadas para posicionar um elemento dentro de um elemento pai posicionado de forma relativa ou absoluta. Se o objetivo é fazer com que o gradiente ocupe toda a tela, essas propriedades podem não ser necessárias.
        </Typography>
      </Typography>
      </Grid>
    </GradientBackground>
  )
}

export default App
