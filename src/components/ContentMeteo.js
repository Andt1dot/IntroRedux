import { useEffect } from 'react';
import {connect} from 'react-redux'
import {fetchMeteo} from '../actions/actionMeteo'


const ContentMeteo = (props) =>{

    console.log('SalutAici',props);

    useEffect(()=>  {
    props.fetchMeteo();
    },[]);
   
    


return (<div>Salut Fetelor</div>)
}

const mapStateToProps = (state) => {
 return {meteo: state.meteo};   
}

const mapDispatchToProps  = {
fetchMeteo
}


export default connect (mapStateToProps,mapDispatchToProps)(ContentMeteo)