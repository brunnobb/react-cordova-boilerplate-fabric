import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { showMenuAction } from '../actions/templateActions';

class NavBar extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.object.isRequired
        })
    };

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        itens: PropTypes.arrayOf(ICommandBarItemProps),
        itensDireita: PropTypes.arrayOf(ICommandBarItemProps)
    };

    static defaultProps = {
        itensDireita: [
            {
                iconOnly: true,
                iconProps: {
                    iconName: 'Add',
                    styles: '',
                    className: 'red'
                },
                key: 'user',
                name: 'Adicionar Linha',
                className: 'ms-CommandBarItem',
                onClick: this.showMenu
            }
        ]
    };

    showMenu = () => {
        this.props.dispatch(showMenuAction());
    };

    render() {
        return (
            <div className="NavBar">
                <CommandBar
                    isSearchBoxVisible={false}
                    items={[
                        {
                            iconOnly: true,
                            iconProps: {
                                iconName: 'CollapseMenu',
                                styles: '',
                                className: 'red'
                            },
                            key: 'menu',
                            name: 'Exibir Menu',
                            className: 'ms-CommandBarItem',
                            onClick: this.showMenu
                        }
                    ]}
                    farItems={this.props.itensDireita}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        dispatch,
        loggedUser,
        loggedUserPass
    } = state;

    return {
        dispatch,
        loggedUser,
        loggedUserPass
    };
};

export default connect(mapStateToProps)(NavBar);
