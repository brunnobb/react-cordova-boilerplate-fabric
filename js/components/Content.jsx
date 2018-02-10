import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { showMenuAction, changeTextAction } from '../actions/templateActions';
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';
import { INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

class Content extends React.Component {
    constructor() {
        super();
    }
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        textValue: PropTypes.string.isRequired
    };

    getTextValidation = (a, b) => {
        window.console.log(a);
        window.console.log(b);
        return 'erro';
    };

    textChanged = (newText) => {
        this.props.dispatch(changeTextAction(newText));
    };


    showMenu = () => {
        this.props.dispatch(showMenuAction());
    };

    render() {
        const { textValue } = this.props;
        /* , menuItems, farMenuItems */

        return (
            <div className="container">
                <div>
                    teste conteudo
                    <DefaultButton
                        description="Opens the Sample Panel"
                        onClick={this.showMenu}
                        text="Open Panel"
                    />
                </div>
                <div>
                    <TextField
                        label="Descricao do Campo"
                        value={textValue}
                        prefix="https://"
                        suffix=".com"
                        iconProps={{ iconName: 'Calendar' }}
                        onChanged={this.textChanged}
                        validateOnFocusOut
                        onGetErrorMessage={this.getTextValidation}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {
        dispatch,
        loggedUser,
        loggedUserPass,
        textValue
    } = state;

    return {
        dispatch,
        loggedUser,
        loggedUserPass,
        textValue
    };
};

export default connect(mapStateToProps)(Content);
