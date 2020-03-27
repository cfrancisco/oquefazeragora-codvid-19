const styles = () => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 'calc(100%)',
        width: '100%',
        paddingTop: '50px',
        textAlign: 'center',
        display: 'inline-table',
        fontFamily: 'Montserrat',
        background: '#2B27A7',
    },
    stayhome:
  {
      paddingLeft: '60px',
  },
    title:
  {
      fontWeight: '500',
      margin: 'auto',
      display: 'block',
      fontSize: '48px',
      textAlign: 'center',
      color: 'white',
  },
    button:
  {
      width: '250px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      marginBottom: '50px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
      display: 'block',
      borderRadius: '22px',
      cursor: 'pointer',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '12px',
      padding: '11px',
      transition: 'all 0.3s ease-in-out',
      color: '#2B27A7',
      '&:hover': {
          boxShadow: '0px 18px 18px rgba(25, 25, 25, 0.25), 0px 18px 18px rgba(0, 0, 0, 0.25)',
          marginTop: '49px',
          marginBottom: '51px',
      },
  },
    grid:
  {
      boxSizing: 'border-box',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%',
      minHeight: '260px',
      background: 'white',
      borderLeft: '2px solid #A931D3',
      marginBottom: '90px',
  },
    title2:
  {
      fontWeight: '300',
      fontSize: '45px',
      textTransform: 'uppercase',
      color: '#A931D3',
      padding: '50px',
  },
    description:
  {
      boxSizing: 'border-box',
      fontFamily: 'Lato',
      padding: '40px 40px',
      paddingTop: '60px',
      fontSize: '16px',
      lineHeight: '169%',
      display: 'inline-block',
      textAlign: 'justify',
      fontWeight: '400',
      textIndent: '46px',
  },
    icon:
  {
      fontSize: '80px',
      width: '100px',
      height: '100px',
      color: '#df60bc',
      position: 'absolute',
      top: '203px',
      right: '8%',
  },

    bottomBar:
  {
      position: 'fixed',
      bottom: '0px',
      height: '35px',
      background: '#201C8C',
      width: '100%',
  },
    titleBottom:
  {
      padding: '10px',
      fontWeight: '500',
      fontSize: '12px',
      color: 'white !important',
      textTransform: 'uppercase',
      '& a':
    {
        color: 'white !important',
        textDecoration: 'none',
    },
  },
    onRight:
  {
      float: 'right',
      paddingRight: '100px',

  },
    onLeft:
  {
      float: 'left',
      paddingLeft: '100px',
  },
    '@media (max-width: 1024px)': {
        icon: {
            display: 'none',
        },

        title2:
      {
          fontWeight: '300',
          fontSize: '30px',
          padding: '30px',
          textAlign: 'center',
      },
        description:
      {
          paddingTop: '0px',
      },
        onRight:
      {
          padding: '10px',
      },
        onLeft:
      {
          padding: '10px',
      },
    },
});

export default styles;
/*  */
