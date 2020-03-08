import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  renderQuotes() {
    return this.props.quotes.map(quote => {
      return (
        <QuoteCard
          quote={quote}
          removeQuote={() => this.props.removeQuote(quote.id)}
          upvoteQuote={() => this.props.upvoteQuote(quote.id)}
          downvoteQuote={() => this.props.downvoteQuote(quote.id)}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        {this.renderQuotes()}
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ quotes: state.quotes });

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(Quotes);
