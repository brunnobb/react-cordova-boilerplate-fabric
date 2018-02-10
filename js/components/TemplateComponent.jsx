import React from 'react';
import Swipeable from 'react-swipeable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { showMenuAction, hideMenuAction } from '../actions/templateActions';


import { APP_VERSION } from '../constants/constant';
import SideBar from './SidebarMenu.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

class Template extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.object.isRequired
        })
    };
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };


    onSwipedRight = (e, delta, isFlick) => {
        if (isFlick) { this.props.dispatch(showMenuAction()); }
    };

    render() {
        return (
            <Swipeable
                style={{ touchAction: 'none' }}
                onSwipedRight={this.onSwipedRight}
                delta={70}
                flickThreshold={0.7}
            >
                <div className="App">

                    <Fabric>
                        <div className="header">
                            <NavBar />
                        </div>

                        <div className="body">
                            <div className="sidebar">
                                <SideBar />
                            </div>
                            <div className="content">
                                <Content />
                            </div>

                        </div>
                        <div className="footer">
                            <Footer />
                        </div>
                    </Fabric>

                </div>
            </Swipeable>
        );
    }
}


const mapStateToProps = (state) => {
    const {
        menuIsVisible, loggedUser, loggedUserPass, isLoading
    } = state;

    return {
        menuIsVisible,
        loggedUser,
        loggedUserPass,
        isLoading
    };
};

export default withRouter(connect(mapStateToProps)(Template));
