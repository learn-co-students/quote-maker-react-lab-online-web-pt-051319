export const addQuote = (quote) => ({ type: "ADD_QUOTE", quote: quote })
export const removeQuote = (quoteId) => ({ type: "REMOVE_QUOTE", quoteId: quoteId })
export const upvoteQuote = (quoteId) => ({ type: "UPVOTE_QUOTE", quoteId: quoteId })
export const downvoteQuote = (quoteId) => ({ type: "DOWNVOTE_QUOTE", quoteId: quoteId })