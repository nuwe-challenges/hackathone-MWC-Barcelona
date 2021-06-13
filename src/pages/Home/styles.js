import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        width: '65%',
        alignItems:'center',
        alignContent: 'center',
        display: 'grid',
        gridTemplateColumns:' repeat(2, 50%)',

        '@media(max-width: 1024px)': {
            gridTemplateRowa: 'repeat(2, 50%)',
            marginTop: '0',
            width: '100vw',
            height: '97vh',
        },

        '@media(max-width: 500px)': {
            marginTop: '0',
            width: '100vw',
            height: '97vh',
        }
      },
      subCard: {
        padding: '10px',
        flexWrap: 'wrap',
        display: 'flex',
        cursor: 'pointer',

        '@media(max-width: 1024px)': {
            flexWrap: 'wrap',
            marginBottom: '20px',
            marginTop: '0',
            marginLeft: '50%',
            width: '50vw',
            height: '10vh',
        },

        '@media(max-width: 500px)': {
            marginTop: '0',
            width: '80vw',
            height: '20vh',
        },

        "&:hover" :{
            border: '1px solid #77acf1' 
        },
      },
   input: {
       marginBottom: '5%',
       '@media(max-width: 1024px)': {
        width: '75vw',
        marginLeft: '35px',
        marginBottom: '10%',
    },

    '@media(max-width: 500px)': {
       width: '85vw',
       marginLeft: '0px',
       alignSelf: 'center'
    }
   },
   img: {
       height: '70vh',
       width: '30vw',
       '@media(max-width: 1024px)': {
        display: 'none'
    }
   },
   title: {
       '@media(max-width: 1024px)': {
        marginLeft: '35px',
    },
    '@media(max-width: 500px)': {
        marginLeft: '0px',
        fontSize: '13px'
     }
   }, 
   p: {
       fontFamily: 'Roboto',
       fontSize: '0.9rem',
       '@media(max-width: 1024px)': {
        marginLeft: '35px',
    },
    '@media(max-width: 700px)': {
        display: 'none'
     }
   },
   pHome: {
    fontFamily: 'Roboto',
    fontSize: '0.9rem',
    textAlign: "end",
    },
   container: {
       marginTop: '5%',
       display: 'flex',
       justifyContent: 'center',
       '@media(max-width: 1024px)': {
        marginTop: '0px',
    }
   },
   btn: {
    '@media(max-width: 1024px)': {
        width: '75vw',
        marginLeft: '35px'
    },
    '@media(max-width: 500px)': {
        width: '85vw',
        marginLeft: '0px',
     }
   }
})

export default useStyles