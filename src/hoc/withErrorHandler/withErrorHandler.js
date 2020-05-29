import React, {Component} from 'react'; 
import Modal from '../../components/UI/Modal'
import Aux from '../Auxi/Auxi'; 

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null}); 
                return req; 
            });
            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error}); 
            }); 
        }

        componentWillUnmount(){
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor); 
            axios.interceptors.request.eject(this.reqInterceptor); 
            axios.interceptors.response.eject(this.resInterceptor); 
        }

        errorConfirmedHandler = () => {
            this.setState({error: null}); 
        }

        render() {
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        Something Didn't Work Dawg !
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default withErrorHandler; 