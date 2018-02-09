import { push } from 'react-router-redux';

const redirectConsulta = (router, filter, dispatch) => {
    const path = `/sc/consulta/${filter}`;
    // router.history.push(path);
    dispatch(push(path));
};


export default redirectConsulta;
