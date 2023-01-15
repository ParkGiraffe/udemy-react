import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "park", text: "Learning React is so hard!" },
  { id: "q2", author: "giraffe", text: "Learning React is so fun" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
