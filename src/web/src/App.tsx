import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cron Expression Descriptor</h1>
        <h2>Describe Cron expressions as human readable text</h2>
      </header>
      <main className="App-main">
        <form>
          <label>
            Cron Expression:
            <input type="text" name="cron" />
          </label>
          <input type="submit" value="Describe" />
        </form>
      </main>
    </div>
  );
}

export default App;
