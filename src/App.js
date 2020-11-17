import React, {useState} from 'react'

import './App.css';

const content = [
    {
        tab: "Section 1",
        content: "섹션 1입니다."
    },
    {
        tab: "Section 2",
        content: "섹션 2입니다."
    }

]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem:allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
};

const App = () => {

    const {currentItem, changeItem} = useTabs(0, content)

  return (
    <div className="App">
      <h1>Hello</h1>
        {content.map((section, index) => (
                <button key={index} onClick={()=>changeItem(index)}>{section.tab}</button>
        )
        )}
        <div>
            {currentItem.content}
        </div>
    </div>
  );
}

export default App;
