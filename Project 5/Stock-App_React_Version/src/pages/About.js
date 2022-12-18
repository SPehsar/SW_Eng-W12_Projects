export default function About() {
  return (
    <div className="bodyDiv">
      <h1>About</h1>
      <p>
        This app provides detailed information about companies' stocks. For our
        case, we simplified the detaile to let use create what the desired
        information using the data that is hardcoded. However if you want to
        leverage pulling data from an API you can sign up for an API key and use
        https://financialmodelingprep.com/.
      </p>

      <p>
        If a you click on one of the stocks listed in the Dashboard view, you
        will be directed to an individual stock show view. This view should
        display all of a stock's attributes.
      </p>
    </div>
  );
}
