import React, { useState } from "react";
import ColorBoxApp from "./components/ColorBoxApp/ColorBoxApp";
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("color-box");

  const renderContent = () => {
    if (activeTab === "color-box") {
      return <ColorBoxApp />;
    } else if (activeTab === "todo-app") {
      return <TodoApp />;
    }
    return null;
  };

  return (
    <div className="App">
      <nav className="tabs">
        <button
          className={activeTab === "color-box" ? "active" : ""}
          onClick={() => setActiveTab("color-box")}
        >
          Color Box
        </button>
        <button
          className={activeTab === "todo-app" ? "active" : ""}
          onClick={() => setActiveTab("todo-app")}
        >
          Todo App
        </button>
      </nav>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
