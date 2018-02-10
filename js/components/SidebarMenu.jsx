import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { hideMenuAction } from '../actions/templateActions';

class SidebarMenu extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        menuIsVisible: PropTypes.bool.isRequired,
        groups: INavLinkGroup,
        expanded: PropTypes.string,
        collapsed: PropTypes.string
    };

    static defaultProps = {
        // isMenuVisible: false,
        groups: [{
            links: [{
                name: 'Home',
                url: 'http://example.com',
                links: [{
                    name: 'Activity',
                    url: 'http://msn.com'
                }, {
                    name: 'News',
                    url: 'http://msn.com'
                }],
                isExpanded: true
            }, {
                name: 'Documents',
                url: 'http://example.com',
                isExpanded: true
            }, {
                name: 'Pages',
                url: 'http://msn.com'
            }, {
                name: 'Notebook',
                url: 'http://msn.com'
            }, {
                name: 'Long Name Test for elipsis. Longer than 12em!',
                url: 'http://example.com'
            }, {
                name: 'Edit Link',
                url: 'http://example.com',
                iconClassName: 'ms-Icon--Edit'
            }, {
                name: 'Edit',
                url: '#',
                icon: 'Edit',
                onClick: () => {}
            }]
        }],
        expanded: 'expanded',
        collapsed: 'collapsed'
    };



    hideMenu = () => {
        this.props.dispatch(hideMenuAction());
    };

    render() {
        const { menuIsVisible } = this.props;
        return (
            <div className="SidebarMenu">

                <Panel
                    isOpen={menuIsVisible}
                    type={PanelType.smallFixedNear}
                    isLightDismiss
                    headerText="Light Dismiss Panel"
                    onDismiss={this.hideMenu}
                >
                    <Nav
                        groups={this.props.groups}
                        expandedStateText={this.props.expanded}
                        collapsedStateText={this.props.collapsed}
                    />
                </Panel>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {
        menuIsVisible,
        loggedUser,
        loggedUserPass
    } = state;

    return {
        menuIsVisible,
        loggedUser,
        loggedUserPass
    };
};

export default connect(mapStateToProps)(SidebarMenu);
