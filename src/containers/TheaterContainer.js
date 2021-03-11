import React, { Component } from 'react';
import TheaterForm from './TheaterForm';
import Theater from '../components/Theater';
import { connect } from 'react-redux';
import { getTheaters } from '../actions/theaters';


class TheaterContainer extends Component {
    state = {
        sorted: false
    }

    handleClick = () => {
            this.setState({
                sorted: !this.state.sorted
            })
    }

    render() {
        console.log("Rendering") 
        let theatersLis 
        if (this.state.sorted) {
            const unsortedTheaters = [...this.props.theaters]
            const sortedTheaters = unsortedTheaters.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); 
                var nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                return 0;
            });
            theatersLis = sortedTheaters.map((th) => <Theater theater={th}/>)
            console.log(this.props.theaters)
        } else {
            theatersLis = this.props.theaters.map((th) => <Theater theater={th}/>)
            console.log(this.props.theaters)
        }

        return (
            <div className="App">
                <h2>Add Theater</h2>
                <TheaterForm/>
                <hr/>
                <button onClick= {this.handleClick}>
                    SORT!
                </button>
                <h2>Theaters</h2>
                    <ul>
                        {this.props.loading ? <h3>Loading...</h3> : theatersLis}
                    </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
        theaters: state.theaterReducer.theaters,
        loading: state.theaterReducer.loading,
    }
}

export default connect(mapStateToProps, {getTheaters})(TheaterContainer)