import React from 'react';
import {AppBar, Hidden, Icon, withStyles} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import UserNavbarHeader from 'fuse-layouts/shared/UserNavbarHeader';
import classNames from 'classnames';
import Logo from 'fuse-layouts/shared/Logo';
import NavbarFoldedToggleButton from 'fuse-layouts/shared/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'fuse-layouts/shared/NavbarMobileToggleButton';
import Navigation from 'fuse-layouts/shared/Navigation';

const styles = theme => ({
    root   : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        height       : '100%'
    },
    header : {},
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    }
});

const NavbarPartial = ({classes, navigation, className}) => {
    return (
        <div className={classNames(classes.root, className)}>
            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className={classNames(classes.header, "flex flex-row items-center flex-shrink h-64 min-h-64")}
            >
                <div className="flex flex-1 pr-8 pl-16">
                    <Logo/>
                </div>

                <Hidden mdDown>
                    <NavbarFoldedToggleButton/>
                </Hidden>

                <Hidden lgUp>
                    <NavbarMobileToggleButton>
                        <Icon>close</Icon>
                    </NavbarMobileToggleButton>
                </Hidden>
            </AppBar>

            <FuseScrollbars className={classNames(classes.content)}>

                <UserNavbarHeader/>

                <Navigation layout="vertical"/>

            </FuseScrollbars>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(NavbarPartial);


