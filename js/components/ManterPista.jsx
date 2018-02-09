import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class ManterPista extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.object.isRequired
        })
    };


    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    static defaultProps = {
    };

    state = {
    };


    componentDidMount() {

    }

    componentDidUpdate() {

    }


    render() {
        let loading = 'Não';
        if (this.props.isLoading) { loading = `${PropTypes} Carregando`; }
        return (
            <div>
                ManterPista
                {loading}
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    const { isLoading } = state;

    return {

        isLoading
    };
};

export default withRouter(connect(mapStateToProps)(ManterPista));
