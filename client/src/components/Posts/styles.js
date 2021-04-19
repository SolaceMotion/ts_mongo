import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => {
  return {
    mainContainer: {
      display: 'flex',
      alignItems: 'cemter',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }
})
