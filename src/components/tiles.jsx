// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        //background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 50,
        width: 1500,
        cellHeight: 'auto',
    },
    subheader: {
        width: '100%',
    },
});

const tileData = [
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut1.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
        featured: true,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut2.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut3.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut4.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut5.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut6.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={300}
                      className={classes.gridList}
                      cols={3}
                >
                {tileData.map(tile => (
                    <GridListTile key={tile.img}
                                 // cols={tile.cols || 1 || 2}
                                  title={tile.title}
                                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                  actionPosition="left"
                                  titlePosition="top"
                                 // titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                  cols={tile.featured ? 2 : 1}
                                  rows={tile.featured ? 2 : 1}
                    >
                        <img src={tile.img} alt={tile.title} />

                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);

