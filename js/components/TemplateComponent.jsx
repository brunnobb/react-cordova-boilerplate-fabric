import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Layer } from 'office-ui-fabric-react/lib/Layer';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { APP_VERSION } from '../constants/constant';

import SideBar from './SidebarMenu.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

const DayPickerStrings: IDatePickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],

    shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],

    shortDays: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year'
};


class Template extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.object.isRequired
        })
    };


    static propTypes = {
        children: PropTypes.element,
        isLoading: PropTypes.bool.isRequired,
        loggedUser: PropTypes.string.isRequired,
        // dispatch: PropTypes.func.isRequired,
        loggedUserPass: PropTypes.string.isRequired
    };

    static defaultProps = {
        children: (<div />)
    };

    state = {
        drawerOpen: false,
        visibleMenu: false
    };


    componentDidMount() {
        const { loggedUser, loggedUserPass } = this.props;
        /*
        const { router } = this.context;
        const { dispatch } = this.props;
         */

        if (!loggedUser || !loggedUserPass) {
            // redirectLogin(router, dispatch);
        }
    }

    componentDidUpdate() {
        const { loggedUser, loggedUserPass } = this.props;
        /*
        const { router } = this.context;
        const { dispatch } = this.props;
         */

        if (!loggedUser || !loggedUserPass) {
            // redirectLogin(router, dispatch);
        }
    }

    hideFixedMenu = () => this.setState({ visibleMenu: false });

    showFixedMenu = () => this.setState({ visibleMenu: true });


    handleArea1Click = () => {
        /*
       const { router } = this.context;
       const { dispatch } = this.props;
        */
        // redirectLogin(router, dispatch);
    };

    handleArea2Click = () => {
        /*
       const { router } = this.context;
       const { dispatch } = this.props;
        */
        // redirectContato(router, dispatch);
    };

    handleExitClick = () => {
        // this.props.dispatch(fetchLogout());
    };

    showDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    };


    render() {
        // const { activeItem, loggedUser, isLoading } = this.props;
        const { visibleMenu } = this.state;
        /* let progressDiv;
        if (isLoading) {
            progressDiv = (
                <div className="fill-parent loading-bg vcenter" >
                    <div className="loadingDiv">
                        <CircularProgress size={100} thickness={7} color="White" style={loadingDivStyle} />
                    </div>
                </div>
            );
        }
        */

        /*

        <DefaultButton>
                        I am a button.
                    </DefaultButton>
                    <DefaultButton
                        text='See Button'
                        primary={ true }
                        href='#/components/button'
                    />
                    <DatePicker strings={ DayPickerStrings } showWeekNumbers={ true } firstWeekOfYear={ 1 } showMonthPickerAsOverlay={ true } placeholder='Select a date...' />

                    {editorialName}
                    {this.props.children}

         */

        const editorialName = `editorials version ${APP_VERSION}`;

        return (


                <div className="App">

                    <Fabric>

                        <div className="header">
                            <NavBar/>
                        </div>
                        <div className="body">
                            <div className="content">
                                <Content/>
                            </div>
                            <div className="sidebar">
                                <SideBar/>
                            </div>
                        </div>
                        <div className="footer">
                            <Footer/>
                        </div>
                    </Fabric>
                </div>






        );
    }
}


const mapStateToProps = (state) => {
    const { loggedUser, loggedUserPass, isLoading } = state;

    return {
        loggedUser,
        loggedUserPass,
        isLoading
    };
};

export default withRouter(connect(mapStateToProps)(Template));
