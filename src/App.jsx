import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown";
import Cards from "./components/Cards";
import EmptyState from "./components/EmptyState";
import './App.css';
const dateArray = [
  "24-Apr-2024",
  "02-May-2024",
  "09-May-2024",
  "31-May-2024",
  "21-Jun-2024",
];

const strategyArray = [
  { 
    'View': 'Bullish', 
    'Value': { 
    '24-Apr-2024': ['Bull Call Spread','Bull Put Spread','Bull Put Spread','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy1','Strategy1','SpreadStrategy','Bull Call Spread'], 
    '02-May-2024': ['Bull Call Spread','Bull Call Spread','Bull Put Spread','Long Call','Long Call','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy2','Strategy1','Strategy2','Bull Call Spread'], 
    '09-May-2024': ['Strategy Put','Strategy Call','Strategy Call','Strategy Call','Strategy Put'], 
    } 
    },
  { 
      'View': 'Bearish', 
      'Value': { 
      '24-Apr-2024': ['Bear Call Spread','Bear Call Spread','Bear Call Spread','Long Put','Long Put','Long Put','Bear Call Spread',], 
      '31-May-2024': ['Long Put','Long Put','Long Put','Long Put','Long Put'], 
      '21-Jun-2024': ['Strategy3','Strategy3','Bear Put Spread','Strategy3','Long Put','Long Put'], 
      } 
  },
  { 
      'View': 'RangeBound', 
      'Value': { 
      '24-Apr-2024': ['Short Straddle','Short Strangle','Short Strangle','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy1','Strategy1','SpreadStrategy','Short Straddle'], 
      '02-May-2024': ['Short Straddle','Short Straddle','Short Strangle','Iron Butterfly','Iron Butterfly','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy2','Strategy1','Strategy2','Short Straddle'], 
      '21-Jun-2024': ['Iron Condor','Iron Butterfly','Iron Butterfly','Iron Butterfly','Iron Condor'], 
    } 
  },
  { 
      'View': 'Volatile', 
      'Value': { 
      '02-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle','Strategy1','Long Straddle','Strategy1','Strategy1','Spread-Strategy','Long Straddle'], 
      '09-May-2024': ['Long Straddle','Long Straddle','Long Strangle','Long Strangle','Long Straddle','Strategy1','Long Straddle','Strategy2','Strategy1','Strategy2','Long Straddle'], 
      '31-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle'], 
    } 
  }
];

function App() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategiesForView = strategyArray.find(
    (view) => view.View === selectedView
  )?.Value;

  const strategiesForDate = strategiesForView
    ? strategiesForView[selectedDate] || []
    : [];

  return (
    <div className="App">
      <h1>Strategy Viewer</h1>
      <Toggle views={["Bullish", "Bearish", "RangeBound", "Volatile"]} onToggle={setSelectedView} />
      <Dropdown dates={dateArray} selectedDate={selectedDate} onDateChange={setSelectedDate} />
      {strategiesForDate.length > 0 ? (
        <Cards strategies={strategiesForDate} />
      ) : (
        <EmptyState date={selectedDate} />
      )}
    </div>
  );
}

export default App;
