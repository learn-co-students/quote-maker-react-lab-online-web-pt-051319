import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  render() {
    const renderQuotes = () => {
      return this.props.quotes.map(quote => {
        return (
          <QuoteCard
            key={quote.id}
            handleUpvote={this.props.upvoteQuote}
            handleDownvote={this.props.downvoteQuote}
            handleRemove={this.props.removeQuote}
            quote={quote}
          />
        )
      })
    }
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps =(dispatch) => {
  return {
    upvoteQuote: (quoteId) => dispatch({ type: "UPVOTE_QUOTE", quoteId: quoteId }),
    downvoteQuote: (quoteId) => dispatch({ type: "DOWNVOTE_QUOTE", quoteId: quoteId }),
    removeQuote: (quoteId) => dispatch({ type: "REMOVE_QUOTE", quoteId: quoteId })
  }
}

export default connect(state => ({ ...state }), mapDispatchToProps)(Quotes);
