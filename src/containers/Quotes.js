import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map((quote, idx) => <QuoteCard key={idx} quote={quote} />);
  }
  
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{this.renderQuotes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
