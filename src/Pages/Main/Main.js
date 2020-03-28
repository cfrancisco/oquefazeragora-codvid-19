import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { FirebaseService } from '../../Services/FirebaseService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import {
    faMap,
    faImages,
    faCarrot,
    faMusic,
    faEnvelope,
    faHeart,
    faIgloo,
    faMobile,
    faHeartbeat,
    faSmileWink,
} from '@fortawesome/free-solid-svg-icons';
import styles from './_styles';
import { options } from './options';

const iconsTr = {
    music: faMusic,
    cooking: faCarrot,
    photos: faImages,
    language: faMap,
    home: faIgloo,
    myself: faSmileWink,
    smartphone: faMobile,
    heartbeat: faHeartbeat,
};

let internalOptions = JSON.parse(JSON.stringify(options));

const useStyles = makeStyles(styles);

const Main = () => {
    const classes = useStyles();

    const [data, setData] = useState();

    const randomize = () => {
        if (internalOptions.length <= 1) {
            internalOptions = JSON.parse(JSON.stringify(options));
        }

        const min = Math.ceil(0);
        const max = Math.floor(internalOptions.length) - 1;

        const index = Math.floor(Math.random() * (max - min + 1));
        const aux = internalOptions[index];
        internalOptions.splice(index, 1);
        console.log('internalOptions', internalOptions);
        setData(aux);
    };

    useEffect(() => {
        randomize();
    }, []);

    /*
  FirebaseService.getDataList('participants', (list) => {
    console.log('list', list);
    const fakeData = { title: 'a', description: 'b', photolink: 's' };
    setData(fakeData);
  });
  */

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={2}>
                    <div className={classes.stayhome}>
                        <img src="/stayhome.png" />
                    </div>
                </Grid>
                <Grid item xs={12} md={9}>
                    <div className={classes.title}>O QUE FAZER AGORA?</div>
                    <div onClick={randomize} className={classes.button}>
                        ME DÊ UMA NOVA SUGESTÃO
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Content randomize data={data} />
                </Grid>
            </Grid>
            <BottonBar />
        </div>
    );
};

const Content = ({ data }) => {
    const classes = useStyles();
    if (!data) return null;


    const { title, description, icon } = data;
    return (
        <Grid container className={classes.grid} spacing={0}>
            <Grid item xs={12} md={6}>
                <div className={classes.title2}>{title}</div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={classes.description}>{description}</div>
                { }
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={iconsTr[icon]} />
                </div>
            </Grid>
        </Grid>
    );
};

const BottonBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.bottomBar}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <div className={`${classes.titleBottom} ${classes.onLeft}`}>
                    Você está produzindo algo online? &nbsp;
                        <a href="mailto:francisco.a.cabelo@gmail.com">
                        Envie sua sugestão por email&nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={`${classes.titleBottom} ${classes.onRight}`}>
                    Feito após lavar as mãos &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Main;
